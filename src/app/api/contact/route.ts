import ContactEmail from "@/components/emails/ContactEmail";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Kaung Contact <contact@kaungkhantthar.dev>",
      to: "kaungkhantthar77@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Internal error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
