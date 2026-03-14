'use client';

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

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA?: string;
  scarcityText?: string;
}

export function HeroSection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA = 'Chat On WhatsApp',
  scarcityText,
}: HeroSectionProps) {
  const learnForm = useLearnOnlineForm();
  const adFunnelForm = useAdFunnelForm();
  const highConvertingForm = useHighConvertingWebsiteForm();
  const opensLearnForm = primaryCTA === LEARN_CTA_TEXT && learnForm;
  const opensAdFunnelForm = primaryCTA === AD_FUNNEL_CTA_TEXT && adFunnelForm;
  const opensHighConvertingForm = primaryCTA === HIGH_CONVERTING_CTA_TEXT && highConvertingForm;

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-hero-gradient px-4 pt-16 pb-32 sm:pt-24 sm:pb-40">
      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-orange/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {opensLearnForm ? (
            <button
              type="button"
              onClick={() => {
                learnForm.openLearnForm();
                trackCTAClick('hero_primary', 'hero');
              }}
              className="w-full min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-8 py-4 text-center text-lg font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:w-auto"
            >
              {primaryCTA}
            </button>
          ) : opensAdFunnelForm ? (
            <button
              type="button"
              onClick={() => {
                adFunnelForm.openAdFunnelForm();
                trackCTAClick('hero_primary', 'hero');
              }}
              className="w-full min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-8 py-4 text-center text-lg font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:w-auto"
            >
              {primaryCTA}
            </button>
          ) : opensHighConvertingForm ? (
            <button
              type="button"
              onClick={() => {
                highConvertingForm.openHighConvertingForm();
                trackCTAClick('hero_primary', 'hero');
              }}
              className="w-full min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-8 py-4 text-center text-lg font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:w-auto"
            >
              {primaryCTA}
            </button>
          ) : (
            <a
              href="#cta"
              onClick={(e) => {
                scrollToCTA(e);
                trackCTAClick('hero_primary', 'hero');
              }}
              className="w-full min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-8 py-4 text-center text-lg font-semibold text-white shadow-glow transition hover:bg-brand-orange-hover hover:shadow-glow-lg active:scale-[0.98] sm:w-auto"
            >
              {primaryCTA}
            </a>
          )}
          <a
            href={WHATSAPP_URL_WITH_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero_secondary')}
            className="w-full min-h-[48px] flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-white/10 active:scale-[0.98] sm:w-auto"
          >
            {secondaryCTA}
          </a>
        </motion.div>

        {scarcityText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm text-amber-400/90"
          >
            {scarcityText}
          </motion.p>
        )}
      </div>
    </section>
  );
}
