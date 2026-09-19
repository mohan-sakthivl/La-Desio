const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files, forever pure localStorage
app.use(express.static(path.join(__dirname, '..')));

// Read .env if exists
const envPath = path.join(__dirname, '.env');
let GMAIL_USER = 'mohan.sakthivl@gmail.com';
let GMAIL_PASS = '';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const userMatch = envContent.match(/EMAIL_USER=(.*)/);
  const passMatch = envContent.match(/EMAIL_PASS=(.*)/) || envContent.match(/GMAIL_PASS=(.*)/);
  if (userMatch) GMAIL_USER = userMatch[1].trim();
  if (passMatch) GMAIL_PASS = passMatch[1].trim().replace(/[\"']/g, '');
}

GMAIL_USER = process.env.EMAIL_USER || GMAIL_USER;
GMAIL_PASS = process.env.EMAIL_PASS || GMAIL_PASS;

function getTransporter() {
  if (!GMAIL_PASS) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
}

// Exact Luxury Gold Email Template from Received Email
function getLuxuryEmailHtml(otp) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>LA DESIO - Verification Code</title>
  <style>
    body { margin: 0; padding: 0; background-color: #120502; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .email-wrapper { max-width: 580px; margin: 30px auto; background: #1C0A05; border: 1px solid #B8945B; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.8); }
    .header { background: #140603; padding: 36px 20px 24px; text-align: center; border-bottom: 1px solid rgba(184, 148, 91, 0.3); }
    .emblem { font-size: 38px; line-height: 1; }
    .brand-title { color: #E6CA85; font-size: 22px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase; margin-top: 10px; }
    .brand-subtitle { color: #D6C2B0; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-top: 4px; }
    .content { padding: 36px 32px; color: #FFFDF9; text-align: center; }
    .greeting { font-size: 16px; color: #E6CA85; font-weight: 600; margin-bottom: 8px; }
    .headline { font-size: 24px; font-weight: 700; color: #FFFFFF; margin: 0 0 16px; }
    .desc { font-size: 13px; line-height: 1.6; color: #D6C2B0; max-width: 440px; margin: 0 auto 28px; }
    .otp-box { background: #120502; border: 2px dashed #B8945B; border-radius: 16px; padding: 20px; display: inline-block; margin: 0 auto 24px; min-width: 240px; }
    .otp-code { font-size: 36px; font-weight: 800; letter-spacing: 12px; color: #E6CA85; font-family: monospace; }
    .otp-validity { font-size: 11px; color: #A08C78; margin-top: 6px; letter-spacing: 1px; text-transform: uppercase; }
    .footer { background: #140603; padding: 24px 20px; text-align: center; border-top: 1px solid rgba(184, 148, 91, 0.2); font-size: 11px; color: #8A7565; line-height: 1.5; }
    .gold-link { color: #E6CA85; text-decoration: none; }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <div class="emblem">👝</div>
      <div class="brand-title">LA DESIO</div>
      <div class="brand-subtitle">Haute Patisserie & Atelier • Milan & Chennai</div>
    </div>
    <div class="content">
      <div class="greeting">Benvenuto, Atelier Patron</div>
      <h1 class="headline">Your One-Time Passcode</h1>
      <p class="desc">
        Use the 6-digit authentication code below to access your exclusive <strong>La Desio Privé</strong> salon, redeem welcome points, or finalize your artisanal order.
      </p>
      <div class="otp-box">
        <div class="otp-code">${otp}</div>
        <div class="otp-validity">⏱️ Valid for 10 minutes</div>
      </div>
      <p style="font-size: 11px; color: #8A7565; margin-top: 10px;">
        If you did not request this verification, you can safely disregard this email. Never share your passcode with anyone.
      </p>
    </div>
    <div class="footer">
      © 2026 LA DESIO Patisserie S.r.l. All rights reserved.<br>
      Artisanal Salons: Chennai • Bengaluru ‪ Kochi • Milan<br>
      <a href="https://ladesio.com" class="gold-link">Visit Our Digital Atelier</a>
    </div>
  </div>
</body>
</html>`;
}


app.post('/api/auth/send-otp', async (req, res) => {
  const targetEmail = req.body.email || req.body.identifier;

  if (targetEmail && targetEmail.includes('@')) {
    const otp = req.body.otp || String(Math.floor(100000 + Math.random() * 900000));
    const transporter = getTransporter();
    
    if (transporter) {
      try {
        await transporter.sendMail({
          from: 'LA DESIO Patisserie <' + GMAIL_USER + '>',
          to: targetEmail,
          subject: 'Your LA DESIO Verification Code: ' + otp,
          text: 'Your LA DESIO verification code is: ' + otp + '. Valid for 10 minutes.',
          html: getLuxuryEmailHtml(otp)
        });
        console.log(' [Gmail Success] Dispatched to ' + targetEmail + ' with OTP ' + otp);
        return res.json({ success: true, message: 'Email delivered to ' + targetEmail, otp });
      } catch (err) {
        console.error(' [Nodemailer Error]:', err.message);
        return res.status(500).json({ success: false, message: 'Failed to send: ' + err.message, otp });
      }
    } else {
      console.log(' GMAIL_PASS not set in server/.env. Please add your google app password.');
      return res.json({ success: true, message: 'GMAIL_PASS missing', otp, simulated: true });
    }
  }

  return res.json({ success: false, message: 'Invalid email' });
});

// Support & Concierge Query Email Endpoint
app.post('/api/support/send-query', async (req, res) => {
  const { ticketId, name, email, phone, category, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const transporter = getTransporter();
  if (transporter) {
    try {
      // 1. Dispatch email to official concierge: mohan.sakthivl@gmail.com
      await transporter.sendMail({
        from: `LA DESIO Concierge <${GMAIL_USER}>`,
        to: GMAIL_USER,
        replyTo: email,
        subject: `[${ticketId || 'INQUIRY'}] ${subject} (From: ${name})`,
        text: `New La Desio Patron Inquiry\n\nTicket: ${ticketId}\nPatron: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCategory: ${category}\n\nMessage:\n${message}`,
        html: `
          <div style="background:#120502; padding:24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color:#FFFDF9;">
            <div style="max-width:580px; margin:0 auto; background:#1C0A05; border:1px solid #B8945B; border-radius:20px; padding:28px; box-shadow:0 10px 30px rgba(0,0,0,0.8);">
              <div style="text-align:center; border-bottom:1px solid rgba(184,148,91,0.3); padding-bottom:18px; margin-bottom:20px;">
                <span style="font-size:28px;">⚜️</span>
                <h2 style="color:#E6CA85; font-size:20px; margin:8px 0 4px; letter-spacing:2px; text-transform:uppercase;">New Patron Inquiry</h2>
                <span style="color:#D6C2B0; font-size:12px; font-family:monospace;">Ticket #${ticketId}</span>
              </div>
              <table style="width:100%; font-size:13px; color:#FFFDF9; border-collapse:collapse; margin-bottom:20px;">
                <tr><td style="padding:6px 0; color:#E6CA85; width:110px;"><strong>Patron Name:</strong></td><td>${name}</td></tr>
                <tr><td style="padding:6px 0; color:#E6CA85;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color:#FFFDF9; text-decoration:underline;">${email}</a></td></tr>
                <tr><td style="padding:6px 0; color:#E6CA85;"><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
                <tr><td style="padding:6px 0; color:#E6CA85;"><strong>Category:</strong></td><td><span style="padding:3px 8px; border-radius:6px; background:#2D140C; border:1px solid #B8945B; color:#E6CA85;">${category}</span></td></tr>
                <tr><td style="padding:6px 0; color:#E6CA85;"><strong>Subject:</strong></td><td><strong>${subject}</strong></td></tr>
              </table>
              <div style="background:#120502; border-left:3px solid #E6CA85; padding:16px; border-radius:8px; margin-bottom:20px;">
                <p style="margin:0; font-size:13px; line-height:1.6; color:#EAE4D9; white-space:pre-wrap;">${message}</p>
              </div>
              <p style="font-size:11px; color:#8A7565; text-align:center; margin:0;">
                Received via La Desio Concierge Desk • Reply directly to this email to contact the patron.
              </p>
            </div>
          </div>
        `
      });

      // 2. Also send patron a confirmation receipt
      try {
        await transporter.sendMail({
          from: `LA DESIO Concierge <${GMAIL_USER}>`,
          to: email,
          subject: `We have received your inquiry [${ticketId}] - LA DESIO Concierge`,
          html: `
            <div style="background:#120502; padding:24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color:#FFFDF9;">
              <div style="max-width:580px; margin:0 auto; background:#1C0A05; border:1px solid #B8945B; border-radius:20px; padding:28px;">
                <div style="text-align:center; border-bottom:1px solid rgba(184,148,91,0.3); padding-bottom:18px; margin-bottom:20px;">
                  <span style="font-size:28px;">⚜️</span>
                  <h2 style="color:#E6CA85; font-size:20px; margin:8px 0 4px; letter-spacing:2px; text-transform:uppercase;">LA DESIO</h2>
                  <span style="color:#D6C2B0; font-size:11px; letter-spacing:1px; text-transform:uppercase;">Client Care & Tasting Inquiries</span>
                </div>
                <p style="color:#E6CA85; font-size:14px; font-weight:bold;">Dear ${name},</p>
                <p style="font-size:13px; line-height:1.6; color:#D6C2B0;">
                  Thank you for reaching out to La Desio. Your inquiry has been registered under ticket reference <strong style="color:#E6CA85; font-family:monospace;">#${ticketId}</strong>.
                </p>
                <p style="font-size:13px; line-height:1.6; color:#D6C2B0;">
                  Our concierge team has received your message regarding <em>"${subject}"</em> and will review your request promptly. Typical response time is under 2 hours.
                </p>
                <div style="border-top:1px solid rgba(184,148,91,0.2); padding-top:16px; margin-top:20px; text-align:center; font-size:11px; color:#8A7565;">
                  Official Patron Concierge: <a href="mailto:${GMAIL_USER}" style="color:#E6CA85; text-decoration:none;">${GMAIL_USER}</a><br>
                  Helpline: +91 98401 23456 • Salons: Chennai • Bengaluru • Kochi
                </div>
              </div>
            </div>
          `
        });
      } catch (patronErr) {
        console.warn('Could not dispatch receipt to patron:', patronErr.message);
      }

      console.log(`✨ [Support Query Success] Ticket ${ticketId} delivered to ${GMAIL_USER} & ${email}`);
      return res.json({ success: true, message: 'Query dispatched successfully', ticketId });
    } catch (err) {
      console.error(' [Support Email Error]:', err.message);
      return res.status(500).json({ success: false, message: 'Failed to send query: ' + err.message });
    }
  }

  return res.json({ success: true, simulated: true, ticketId });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', emailReady: !!GMAIL_PASS, user: GMAIL_USER });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  const status = GMAIL_PASS ? 'READY (using ' + GMAIL_USER + ')' : 'MISSING GMAIL_PASS (add to server/.env)';
  console.log(' [LA DESIO OTP Server] Active at http://localhost:' + PORT + ' | GMAIL: ' + status);
});