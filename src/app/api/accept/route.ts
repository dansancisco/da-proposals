import { NextRequest, NextResponse } from "next/server";

interface AcceptRequest {
  slug: string;
  userAgent: string;
  browserInfo: {
    language: string;
    platform: string;
    screenResolution: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: AcceptRequest = await request.json();
    const { slug, userAgent, browserInfo } = body;

    // Validate slug
    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid proposal" },
        { status: 400 }
      );
    }

    // Get client IP from headers (Vercel sets x-forwarded-for)
    const forwarded = request.headers.get("x-forwarded-for");
    const clientIp = forwarded?.split(",")[0]?.trim() || "unknown";

    // Create acceptance record
    const acceptance = {
      slug,
      status: "pending" as const,
      acceptedAt: new Date().toISOString(),
      clientIp,
      userAgent,
      browserInfo,
    };

    // Log the acceptance (always works, even on Vercel)
    console.log(`[ACCEPTANCE] Pending acceptance recorded for ${slug}`);
    console.log(`  IP: ${clientIp}`);
    console.log(`  Time: ${acceptance.acceptedAt}`);
    console.log(`  User Agent: ${userAgent}`);
    console.log(`  Browser: ${JSON.stringify(browserInfo)}`);

    // Store acceptance data
    // Option 1: POST to n8n webhook for Google Sheets storage
    // Option 2: Use Vercel KV (requires setup)
    // For now, we log and can add persistent storage later

    if (process.env.ACCEPTANCE_WEBHOOK_URL) {
      try {
        await fetch(process.env.ACCEPTANCE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(acceptance),
        });
        console.log(`[ACCEPTANCE] Sent to webhook for ${slug}`);
      } catch (webhookError) {
        console.error("[ACCEPTANCE] Webhook failed:", webhookError);
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in accept API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process acceptance" },
      { status: 500 }
    );
  }
}
