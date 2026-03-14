import { NextRequest, NextResponse } from 'next/server';

/**
 * Lead capture API.
 * Sends name, email, and form name to the endpoint in FORM_WEBHOOK_URL (e.g. Formspree).
 * If FORM_WEBHOOK_URL is not set, the submission is logged and still returns success
 * so you can see leads in your server terminal until you add a destination.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, formName } = body as {
      name?: string;
      email?: string;
      formName?: string;
    };

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const payload = { name, email, formName: formName || 'lead_capture' };
    const webhookUrl = process.env.FORM_WEBHOOK_URL;

    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error('[Lead API] Webhook failed:', res.status, await res.text());
        return NextResponse.json(
          { error: 'Failed to submit' },
          { status: 502 }
        );
      }
    } else {
      // No webhook configured: log so you can see leads in the terminal
      console.log('[Lead captured]', payload);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('[Lead API] Error:', e);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
