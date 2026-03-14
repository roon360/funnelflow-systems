/**
 * WhatsApp contact – used across all funnel pages.
 * Override with NEXT_PUBLIC_WHATSAPP_URL in .env.local if needed.
 */
export const WHATSAPP_NUMBER = '254792265306';
export const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/254792265306';
export const WHATSAPP_URL_WITH_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  'https://wa.me/254792265306?text=Hello%20I%20am%20interested%20in%20your%20offer';
