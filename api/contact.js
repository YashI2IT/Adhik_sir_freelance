import nodemailer from 'nodemailer';

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

    // 1. Email to the Website Owner (BWF Team)
    const mailToOwner = {
      from: `"BWF Website Contact" <${user}>`,
      to: user, // Send to the owner's email (the same one used to authenticate)
      replyTo: email,
      subject: `New Enquiry from Website: ${fullEnquiryType}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Organisation:</strong> ${organisation || 'N/A'}</p>
        <p><strong>Enquiry Type:</strong> ${fullEnquiryType}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // 2. Thank You Email to the User (Sender)
    const mailToSender = {
      from: `"Borderless World Foundation" <${user}>`,
      to: email,
      subject: `Thank you for contacting Borderless World Foundation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #12636B;">Thank you for contacting us, ${fullName}!</h2>
          
          <p>We have successfully received your inquiry regarding <strong>${fullEnquiryType}</strong>.</p>
          
          <p>Our team is currently reviewing your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; border-left: 4px solid #F4B942; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0;">
            <p style="font-size: 12px; color: #666; margin-top: 0; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">YOUR MESSAGE</p>
            <p style="margin: 0; color: #333; font-style: italic;">"${message.replace(/\n/g, '<br/>')}"</p>
          </div>
          
          <p>If you have any urgent queries, feel free to reply directly to this email.</p>
          
          <br/>
          <p style="margin-bottom: 5px;">Best Regards,</p>
          <p style="margin-top: 0; font-weight: bold;">The Borderless World Foundation Team</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 30px; margin-bottom: 20px;" />
          <div style="text-align: center; font-size: 11px; color: #888;">
            <p>© ${new Date().getFullYear()} Borderless World Foundation. All rights reserved.</p>
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
