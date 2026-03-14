# FunnelFlow Systems — Landing Page Funnel

High-performance 3-page landing funnel for Facebook ad traffic. Built with Next.js 14 (App Router), React, TailwindCSS, Framer Motion, and Lucide Icons.

## Routes

- **/** — Redirects to `/learn-online-income`
- **/learn-online-income** — Audience: people looking to earn money online
- **/ad-funnel-system** — Audience: business owners with underperforming ads
- **/high-converting-website** — Audience: businesses whose websites don’t generate leads

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Copy `.env.example` to `.env.local` and fill in:

   - `NEXT_PUBLIC_WHATSAPP_URL` — WhatsApp link (e.g. `https://wa.me/1234567890`)
   - `NEXT_PUBLIC_META_PIXEL_ID` — Meta (Facebook) Pixel ID
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics Measurement ID (e.g. `G-XXXXXXXXXX`)

3. **Run**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Performance

- Server components where possible; client components only for interactivity (Framer Motion, exit intent, forms).
- Exit intent popup loaded with `dynamic(..., { ssr: false })` to keep initial bundle smaller.
- `optimizePackageImports` for `lucide-react` in `next.config.js`.
- Tailwind + PostCSS for minimal CSS.
- Aim for Lighthouse > 95 and load under ~1.5s with a fast connection.

## Analytics

- **Meta Pixel** — PageView on load; Lead/events via `lib/analytics.ts`.
- **Google Analytics** — gtag config and event helpers in `lib/analytics.ts`.

Tracked events: `cta_click`, `whatsapp_click`, `lead_submit`. Use `trackEvent()`, `trackCTAClick()`, `trackWhatsAppClick()`, `trackLeadSubmit()` from `lib/analytics.ts`.
