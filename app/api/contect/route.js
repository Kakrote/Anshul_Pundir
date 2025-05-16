import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, msg } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: 'Message from Portfolio Contact Form',
      text: `Email: ${email}\n\nMessage: ${msg}`,
    });

    return new Response(JSON.stringify({ success: true, msg: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ success: false, msg: 'Failed to send email' }), {
      status: 500,
    });
  }
}
