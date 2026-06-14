export async function sendContactEmail(data: { name: string; email: string; message: string; phone?: string }) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  
  if (!BREVO_API_KEY) {
    throw new Error('BREVO_API_KEY is not defined');
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': BREVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: process.env.BREVO_SENDER_NAME || "K-Sundo Website",
        email: process.env.BREVO_SENDER_EMAIL || "noreply@k-sundo.org"
      },
      replyTo: {
        name: data.name,
        email: data.email
      },
      to: (process.env.BREVO_RECEIVER_EMAIL || "hanbrandon@gmail.com")
        .split(',')
        .map(email => ({ email: email.trim() })),
      subject: `New Contact Form Submission from ${data.name}`,
      htmlContent: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #000; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; pt-10;">
            Sent from K-Sundo.org Contact Form
          </p>
        </div>
      `
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Brevo API Error:', error);
    throw new Error('Failed to send email');
  }

  return await response.json();
}
