import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail/smtp";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, mobile, queryType, message } = body || {};

    // 1. Server-side validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { success: false, message: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!mobile || typeof mobile !== "string" || !mobile.trim()) {
      return NextResponse.json(
        { success: false, message: "Mobile Number is required." },
        { status: 400 }
      );
    }

    if (!queryType || typeof queryType !== "string" || !queryType.trim()) {
      return NextResponse.json(
        { success: false, message: "Query type selection is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Message content is required." },
        { status: 400 }
      );
    }

    if (message.length > 3000) {
      return NextResponse.json(
        { success: false, message: "Message content exceeds maximum allowed length." },
        { status: 400 }
      );
    }

    // 2. Attempt SMTP Email Sending
    await sendContactEmail({
      fullName: fullName.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      queryType: queryType.trim(),
      message: message.trim(),
    });

    // 3. Return Success ONLY after sendMail() resolves cleanly
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error("[API /api/contact Error]:", error?.message || error);

    if (error?.message === "SMTP_NOT_CONFIGURED") {
      return NextResponse.json(
        {
          success: false,
          message: "Contact service is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
