import nodemailer from "nodemailer";

export interface ContactMailData {
  fullName: string;
  email: string;
  mobile: string;
  queryType: string;
  message: string;
}

export async function sendContactEmail(data: ContactMailData): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const secure = process.env.SMTP_SECURE === "true";
  const contactEmail = process.env.CONTACT_EMAIL || "Contact@FoxRun.in";

  // Check if required environment variables exist
  if (!host || !user || !pass) {
    console.error("[SMTP Error] Missing required SMTP environment variables.");
    throw new Error("SMTP_NOT_CONFIGURED");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New FoxRun Contact Enquiry</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 16px; overflow: hidden; color: #ffffff; border: 2px solid #FFB400;">
    <div style="background-color: #FFB400; padding: 24px; text-align: center; color: #111111;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 800;">FoxRun™ Mobility</h1>
      <p style="margin: 5px 0 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase;">New Contact Enquiry</p>
    </div>
    
    <div style="padding: 30px; background-color: #111111; color: #ffffff;">
      <table style="width: 100%; border-collapse: collapse; color: #ffffff;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #FFB400; font-weight: bold; width: 140px;">Query Type:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-weight: bold; font-size: 16px;">${escapeHtml(data.queryType)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #FFB400; font-weight: bold;">Full Name:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222;">${escapeHtml(data.fullName)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #FFB400; font-weight: bold;">Email:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222;"><a href="mailto:${escapeHtml(data.email)}" style="color: #FFB400; text-decoration: underline;">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #FFB400; font-weight: bold;">Mobile:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222;"><a href="tel:${escapeHtml(data.mobile)}" style="color: #ffffff; text-decoration: none;">${escapeHtml(data.mobile)}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #FFB400; font-weight: bold;">Submitted At:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #9CA3AF; font-size: 12px;">${timestamp} IST</td>
        </tr>
      </table>

      <div style="margin-top: 25px; padding: 20px; background-color: #1a1a1a; border-radius: 12px; border: 1px solid #333333;">
        <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #FFB400; text-transform: uppercase;">Message Content:</h3>
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e5e7eb; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
      </div>
    </div>

    <div style="background-color: #0a0a0a; padding: 15px; text-align: center; font-size: 11px; color: #6b7280;">
      © 2026 FoxRun India (OPC) Private Limited. All rights reserved.
    </div>
  </div>
</body>
</html>
  `;

  const info = await transporter.sendMail({
    from: `"FoxRun Website" <${user}>`,
    to: contactEmail,
    replyTo: data.email,
    subject: `New FoxRun Contact Enquiry — ${data.queryType}`,
    html: htmlContent,
  });

  return !!(info && info.messageId);
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
