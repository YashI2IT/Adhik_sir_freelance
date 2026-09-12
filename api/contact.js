import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Pre-load the logo as base64 once at startup — embeds it directly in email HTML
// so it displays in ALL email clients without any external image blocking.
let LOGO_BASE64 = '';
try {
  const logoPath = join(__dirname, '../public/images/logo.png');
  LOGO_BASE64 = readFileSync(logoPath).toString('base64');
} catch (e) {
  console.warn('Could not load logo file for email:', e.message);
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { fullName, email, phone, organisation, enquiryType, otherEnquiryDetail, message } = req.body;

  // Basic validation
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Get environment variables
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    console.error('Missing GMAIL_USER or GMAIL_PASS environment variables.');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user,
        pass: pass,
      },
    });

    const fullEnquiryType = enquiryType === 'Other' ? `Other (${otherEnquiryDetail})` : enquiryType;

    // Use base64 embedded logo — displays in ALL email clients with zero external requests
    const logoUrl = LOGO_BASE64
      ? `data:image/png;base64,${LOGO_BASE64}`
      : 'https://raw.githubusercontent.com/YashI2IT/Adhik_sir_freelance/main/public/images/logo.png';

    const commonEmailStyle = `
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    `;

    const headerStyle = `
      background-color: #051315;
      padding: 30px 20px;
      text-align: center;
      border-bottom: 3px solid #D4AF37;
    `;

    // 1. Email to the Website Owner (BWF Team)
    const mailToOwner = {
      from: `"BWF Website Contact" <${user}>`,
      to: user,
      replyTo: email,
      subject: `New Enquiry: ${fullEnquiryType} - ${fullName}`,
      html: `
        <div style="background-color: #f9fafb; padding: 20px; font-family: sans-serif;">
          <div style="${commonEmailStyle}">
            <div style="${headerStyle}">
              <img src="${logoUrl}" alt="Borderless World Foundation" style="max-height: 60px; display: block; margin: 0 auto;" />
            </div>
            
            <div style="padding: 40px 30px;">
              <h2 style="color: #051315; margin-top: 0; font-size: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 15px;">New Website Enquiry</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 120px;"><strong style="color: #4b5563; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Name</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><strong style="color: #4b5563; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #12636B; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><strong style="color: #4b5563; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${phone || '<span style="color:#9ca3af; font-style:italic;">Not provided</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><strong style="color: #4b5563; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Organisation</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${organisation || '<span style="color:#9ca3af; font-style:italic;">Not provided</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><strong style="color: #4b5563; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Enquiry Type</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;"><span style="background-color: #f3f4f6; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 500;">${fullEnquiryType}</span></td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 25px;">
                <h3 style="color: #051315; margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">Message Details</h3>
                <p style="color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}" style="background-color: #12636B; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600; display: inline-block;">Reply to ${fullName}</a>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // 2. Thank You Email to the User (Sender)
    const mailToSender = {
      from: `"Borderless World Foundation" <${user}>`,
      to: email,
      subject: `Thank you for contacting Borderless World Foundation`,
      html: `
        <div style="background-color: #f9fafb; padding: 20px; font-family: sans-serif;">
          <div style="${commonEmailStyle}">
            <div style="${headerStyle}">
              <img src="${logoUrl}" alt="Borderless World Foundation" style="max-height: 60px; display: block; margin: 0 auto;" />
            </div>
            
            <div style="padding: 40px 30px;">
              <h2 style="color: #051315; margin-top: 0; font-size: 24px; margin-bottom: 20px;">Thank you for reaching out, ${fullName}!</h2>
              
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                We have successfully received your inquiry regarding <strong style="color: #111827;">${fullEnquiryType}</strong>.
              </p>
              
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                Our team is currently reviewing your message and will get back to you as soon as possible. We deeply appreciate your interest in our mission.
              </p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #D4AF37; padding: 25px; margin: 0 0 30px 0; border-radius: 0 6px 6px 0;">
                <p style="font-size: 12px; color: #64748b; margin-top: 0; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Copy of your message</p>
                <p style="margin: 0; color: #334155; font-style: italic; line-height: 1.6; white-space: pre-wrap;">"${message}"</p>
              </div>
              
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 40px;">
                If you have any urgent queries or need to add more information, feel free to reply directly to this email.
              </p>
              
              <table style="width: 100%; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                <tr>
                  <td>
                    <p style="color: #111827; margin: 0; font-weight: bold; font-size: 16px;">Best Regards,</p>
                    <p style="color: #12636B; margin: 5px 0 0 0; font-weight: bold; font-size: 16px;">The Borderless World Foundation Team</p>
                  </td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.5;">
                <strong>Borderless World Foundation</strong><br/>
                Working towards a world without boundaries.
              </p>
              <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 11px;">
                © ${new Date().getFullYear()} Borderless World Foundation. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(mailToSender)
    ]);

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json({ error: 'Failed to send emails' });
  }
}
