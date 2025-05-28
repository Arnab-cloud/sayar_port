import nodemailer from "nodemailer";
import { generateBadge } from "./badgeGenerator";

// Email credentials - hardcoded for simplicity
const EMAIL_USER = 'sayar.basu007@gmail.com';
const EMAIL_PASSWORD = 'fxusbxyeoqzexvlt';

interface SendBadgeEmailParams {
  to: string;
  name: string;
  email: string;
  photoURL?: string;
}

// Create a Gmail transporter
function createGmailTransporter() {
  console.log('Creating Gmail transporter with:', EMAIL_USER);
  
  // Create transporter object with Gmail SMTP
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  });
}

export async function sendBadgeEmail(to: string, name: string, email: string, photoURL?: string | null) {
  try {
    console.log('Starting email send process to:', to);
    
    // Generate the badge
    const badgeBuffer = await generateBadge({ name, email, photoURL });
    console.log('Badge generated successfully');
    
    // Create Gmail transporter
    const transporter = createGmailTransporter();
    console.log('Gmail transporter created successfully');

    // Create the filename for the badge
    const badgeFilename = `${name.toLowerCase().replace(/\s+/g, '_')}_visitor_sayar_basu.png`;
    
    // Prepare email data
    const mailOptions = {
      from: `"Sayar Basu" <${EMAIL_USER}>`,
      to,
      subject: "Thank you for visiting my profile!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #4f46e5; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank you for visiting my profile!</h1>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; line-height: 1.5; color: #334155;">
              Hello ${name},
            </p>
            
            <p style="font-size: 16px; line-height: 1.5; color: #334155;">
              Thank you for taking the time to visit my portfolio and signing in. I'm excited to share my work in AI/ML with you.
            </p>
            
            <p style="font-size: 16px; line-height: 1.5; color: #334155;">
              As a token of appreciation, I've created a special badge for you. You can download it and share it on social media if you'd like!
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="font-size: 18px; font-weight: bold; color: #334155;">Your Custom Badge</p>
              <div style="margin-bottom: 20px;">
                <img src="cid:badge" alt="Your Custom Badge" style="max-width: 300px; border-radius: 10px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);" />
              </div>
              <div style="margin-top: 15px;">
                <a href="cid:badge" download="${badgeFilename}" style="display: inline-block; background-color: #4f46e5; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; transition: background-color 0.2s;">
                  Download Badge
                </a>
              </div>
            </div>
            
            <p style="font-size: 16px; line-height: 1.5; color: #334155;">
              Feel free to reach out if you have any questions or if you'd like to discuss potential collaborations.
            </p>
            
            <p style="font-size: 16px; line-height: 1.5; color: #334155;">
              Best regards,<br>
              Sayar Basu<br>
              AI/ML Engineer & GenAI Specialist
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 14px;">
              This is an automated email sent after visiting Sayar Basu's portfolio.
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          // Use the same filename variable for consistency
          filename: badgeFilename,
          content: badgeBuffer,
          cid: 'badge',
          contentType: 'image/png'
        }
      ]
    };
    
    // Send the email
    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log("Badge email sent:", info.messageId);
    
    // Log success message
    console.log('Email sent successfully from Gmail account');

    
    return info;
  } catch (error: any) {
    console.error("Error sending badge email:", error);
    // Log more detailed error information
    if (error.response) {
      console.error('SMTP Response Error:', error.response);
    }
    if (error.code) {
      console.error('Error Code:', error.code);
    }
    throw error;
  }
}
