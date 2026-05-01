import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/brevo';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, message, phone });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
