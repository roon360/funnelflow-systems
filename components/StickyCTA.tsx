'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics';
import { WHATSAPP_URL_WITH_MESSAGE } from '@/lib/constants';
import { useLearnOnlineForm } from '@/components/LearnOnlineFormContext';
import { useAdFunnelForm } from '@/components/AdFunnelFormContext';
import { useHighConvertingWebsiteForm } from '@/components/HighConvertingWebsiteFormContext';

const LEARN_CTA_TEXT = 'Start Learning How To Earn Online';
const AD_FUNNEL_CTA_TEXT = 'Get Your Profitable Ad System Installed';
const HIGH_CONVERTING_CTA_TEXT = 'Get a High Converting Website.';

function scrollToCTA(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
}

const pageCTAs: Record<
  string,
  { primary: string; primaryHref: string; secondary?: string }
> = {
  '/learn-online-income': {
    primary: 'Start Learning How To Earn Online',
    primaryHref: '#cta',
    secondary: 'Chat On WhatsApp',
  },
  '/ad-funnel-system': {
    primary: 'Get Your Profitable Ad System Installed',
    primaryHref: '#cta',
    secondary: 'Chat On WhatsApp',
  },
  '/high-converting-website': {
    primary: 'Get a High Converting Website.',
    primaryHref: '#cta',
    secondary: 'Chat On WhatsApp',
  },
};

const defaultCTA = {
  primary: 'Get Started',
  primaryHref: '/learn-online-income',
  secondary: 'Chat On WhatsApp',
};

export function StickyCTA() {
  const pathname = usePathname();
  const cta = pageCTAs[pathname] ?? defaultCTA;
  const learnForm = useLearnOnlineForm();
  const adFunnelForm = useAdFunnelForm();
  const highConvertingForm = useHighConvertingWebsiteForm();
  const primaryOpensLearnForm = cta.primary === LEARN_CTA_TEXT && learnForm;
  const primaryOpensAdFunnelForm = cta.primary === AD_FUNNEL_CTA_TEXT && adFunnelForm;
  const primaryOpensHighConvertingForm = cta.primary === HIGH_CONVERTING_CTA_TEXT && highConvertingForm;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-brand-blue/95 backdrop-blur-lg pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        {primaryOpensLearnForm ? (
          <button
            type="button"
            onClick={() => {
              learnForm.openLearnForm();
              trackCTAClick('sticky_primary', pathname);
            }}
            className="flex-1 min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-6 py-4 text-center font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:flex-none sm:px-8"
          >
            {cta.primary}
          </button>
        ) : primaryOpensAdFunnelForm ? (
          <button
            type="button"
            onClick={() => {
              adFunnelForm.openAdFunnelForm();
              trackCTAClick('sticky_primary', pathname);
            }}
            className="flex-1 min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-6 py-4 text-center font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:flex-none sm:px-8"
          >
            {cta.primary}
          </button>
        ) : primaryOpensHighConvertingForm ? (
          <button
            type="button"
            onClick={() => {
              highConvertingForm.openHighConvertingForm();
              trackCTAClick('sticky_primary', pathname);
            }}
            className="flex-1 min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-6 py-4 text-center font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:flex-none sm:px-8"
          >
            {cta.primary}
          </button>
        ) : cta.primaryHref.startsWith('#') ? (
          <a
            href={cta.primaryHref}
            onClick={(e) => {
              scrollToCTA(e);
              trackCTAClick('sticky_primary', pathname);
            }}
            className="flex-1 min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-6 py-4 text-center font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:flex-none sm:px-8"
          >
            {cta.primary}
          </a>
        ) : (
          <Link
            href={cta.primaryHref}
            onClick={() => trackCTAClick('sticky_primary', pathname)}
            className="flex-1 min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-6 py-4 text-center font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:flex-none sm:px-8"
          >
            {cta.primary}
          </Link>
        )}
        {cta.secondary && (
          <a
            href={WHATSAPP_URL_WITH_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('sticky_bar')}
            className="flex-1 min-h-[48px] flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10 active:scale-[0.98] sm:flex-none sm:px-8"
          >
            {cta.secondary}
          </a>
        )}
      </div>
    </motion.div>
  );
}
