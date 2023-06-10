import { NextRequest, NextResponse } from 'next/server';
import * as sendgrid from '@sendgrid/mail';
import { ContactForm } from '@/types';
import { mailGenerator } from '@/util';

export async function POST(request: NextRequest) {
  const body: ContactForm = await request.json();

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? '');

  const msg = mailGenerator(body);

  try {
    await sendgrid.send(msg);
    return NextResponse.json({ message: 'Email successfully sent.' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Something went wrong when sending e-mail.' },
      { status: 500 },
    );
  }
}
