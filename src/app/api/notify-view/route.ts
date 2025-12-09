import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { clientName, contactName, slug } = await request.json();

    // For now, log the view. In production, this would send an email
    // via Resend, SendGrid, or the Gmail MCP
    console.log(`[PROPOSAL VIEW] ${contactName} viewed proposal for ${clientName}`);
    console.log(`  URL: https://proposals.digitalassembly.agency/${slug}`);
    console.log(`  Time: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}`);

    // TODO: Integrate with email service
    // Example with Resend:
    // await resend.emails.send({
    //   from: "proposals@digitalassembly.agency",
    //   to: "daniel@digitalassembly.agency",
    //   subject: `Proposal Viewed: ${clientName}`,
    //   text: `${contactName} just viewed the proposal for ${clientName}.\n\nProposal: https://proposals.digitalassembly.agency/${slug}\nTime: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}\n\nConsider following up while it's fresh on their mind.`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in notify-view:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process notification" },
      { status: 500 }
    );
  }
}
