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

    const host = req.headers['x-forwarded-host'] || req.headers.host || 'adhik-sir-freelance.vercel.app';
    const protocol = req.headers['x-forwarded-proto'] || (host.includes('localhost') ? 'http' : 'https');
    const logoUrl = `${protocol}://${host}/images/logo.png`;

    // 2. Thank You Email to the User (Sender)
    const mailToSender = {
      from: `"Borderless World Foundation" <${user}>`,
      to: email,
      subject: `Thank you for contacting Borderless World Foundation`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          
          <!-- Header with Logo -->
          <div style="text-align: center; padding: 30px 20px 20px 20px;">
            <img src="${logoUrl}" alt="Borderless World Foundation" style="max-height: 80px; width: auto; object-fit: contain;" />
          </div>
          
          <!-- Blue Separator -->
          <hr style="border: 0; border-top: 2px solid #16363B; margin: 0;" />
          
          <!-- Main Content -->
          <div style="padding: 30px 40px;">
            <h2 style="color: #051315; margin-top: 0; margin-bottom: 20px; font-size: 22px;">Thank you for contacting us, ${fullName}!</h2>
            
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px;">We have successfully received your inquiry regarding <strong>${fullEnquiryType}</strong>.</p>
            
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 30px;">Our team is currently reviewing your message and will get back to you as soon as possible.</p>
            
            <!-- Message Quote Block -->
            <div style="background-color: #f8fafc; border-left: 3px solid #D4AF37; padding: 20px; margin: 0 0 30px 0; border-radius: 0 4px 4px 0;">
              <p style="font-size: 11px; color: #718096; margin-top: 0; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">YOUR MESSAGE</p>
              <p style="margin: 0; color: #4a5568; font-style: italic; line-height: 1.5;">"${message.replace(/\n/g, '<br/>')}"</p>
            </div>
            
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 30px;">If you have any urgent queries, feel free to reply directly to this email.</p>
            
            <!-- Signature -->
            <p style="color: #051315; margin-bottom: 5px;">Best Regards,</p>
            <p style="color: #051315; margin-top: 0; font-weight: bold;">The Borderless World Foundation Team</p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #718096; font-size: 11px;">
              © ${new Date().getFullYear()} <span style="color: #D4AF37; font-weight: bold;">Borderless World Foundation</span>. All rights reserved.
            </p>
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
