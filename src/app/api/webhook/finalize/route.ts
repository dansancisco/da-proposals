import { NextRequest, NextResponse } from "next/server";

interface FinalizeRequest {
  slug: string;
  xeroPaymentId?: string;
  xeroInvoiceNumber?: string;
  amountPaid?: number;
  paidAt?: string;
  secret: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FinalizeRequest = await request.json();
    const { slug, xeroPaymentId, xeroInvoiceNumber, amountPaid, paidAt, secret } = body;

    // Verify webhook secret
    if (secret !== process.env.WEBHOOK_SECRET) {
      console.error("[FINALIZE] Unauthorized webhook attempt");
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Validate slug
    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid proposal slug" },
        { status: 400 }
      );
    }

    // Log the finalization
    console.log(`[FINALIZE] Proposal accepted and paid: ${slug}`);
    console.log(`  Xero Payment ID: ${xeroPaymentId || "N/A"}`);
    console.log(`  Xero Invoice: ${xeroInvoiceNumber || "N/A"}`);
    console.log(`  Amount: ${amountPaid ? `$${amountPaid}` : "N/A"}`);
    console.log(`  Paid At: ${paidAt || new Date().toISOString()}`);

    // Build finalization record
    const finalization = {
      slug,
      status: "accepted" as const,
      xeroPaymentId,
      xeroInvoiceNumber,
      amountPaid,
      paidAt: paidAt || new Date().toISOString(),
      finalizedAt: new Date().toISOString(),
    };

    // Return the finalization data for n8n to use in subsequent steps
    // (PDF generation, Google Drive upload, email notifications)
    return NextResponse.json({
      success: true,
      finalization,
      proposalUrl: `https://proposals.digitalassembly.agency/${slug}`,
    });
  } catch (error) {
    console.error("Error in finalize webhook:", error);
    return NextResponse.json(
      { success: false, error: "Failed to finalize proposal" },
      { status: 500 }
    );
  }
}

// Also support GET for health check
export async function GET() {
  return NextResponse.json({
    status: "ok",
    endpoint: "proposal-finalize-webhook",
    timestamp: new Date().toISOString(),
  });
}
