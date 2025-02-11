import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    console.log(`📩 Received email: ${email}`);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Prevents SSL issues
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contactus@lodimgs.com",
      subject: "New Newsletter Subscription",
      text: `A new user has subscribed to the newsletter.\n\nEmail: ${email}`,
      html: `<p>A new user has subscribed to the newsletter.</p><p><strong>Email:</strong> ${email}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent: ${info.response}`);

    return NextResponse.json(
      { success: true, message: "Subscription email sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }
}
