import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});
import dynamic from 'next/dynamic';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { LearnOnlineFormProvider } from '@/components/LearnOnlineFormContext';
import { AdFunnelFormProvider } from '@/components/AdFunnelFormContext';
import { HighConvertingWebsiteFormProvider } from '@/components/HighConvertingWebsiteFormContext';

const StickyCTA = dynamic(() => import('@/components/StickyCTA').then((m) => ({ default: m.StickyCTA })), {
  ssr: true,
  loading: () => <div className="h-20" aria-hidden />,
});

const WhatsAppButton = dynamic(
  () => import('@/components/WhatsAppButton').then((m) => ({ default: m.WhatsAppButton })),
  { ssr: false }
);

const ExitIntentPopup = dynamic(
  () => import('@/components/ExitIntentPopup').then((m) => ({ default: m.ExitIntentPopup })),
  { ssr: false }
);

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'FunnelFlow Systems | High-Converting Funnels & Websites',
  description:
    'We build proven ad funnels and high-converting websites that turn clicks into paying customers.',
  openGraph: {
    title: 'FunnelFlow Systems',
    description: 'High-converting funnels and websites for your business.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen font-sans">
        <LearnOnlineFormProvider>
          <AdFunnelFormProvider>
            <HighConvertingWebsiteFormProvider>
              {children}
              <StickyCTA />
              <WhatsAppButton />
              <ExitIntentPopup />
              <Analytics />
            </HighConvertingWebsiteFormProvider>
          </AdFunnelFormProvider>
        </LearnOnlineFormProvider>
      </body>
    </html>
  );
}
