'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics';
import { WHATSAPP_URL, WHATSAPP_URL_WITH_MESSAGE } from '@/lib/constants';

function scrollToSection(e: React.MouseEvent, hash: string) {
  e.preventDefault();
  document.getElementById(hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
}

export interface CTAButton {
  label: string;
  href: string;
  primary?: boolean;
  external?: boolean;
}

interface CTASectionProps {
  title: string;
  buttons: CTAButton[];
}

export function CTASection({ title, buttons }: CTASectionProps) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-hero-gradient px-4 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-brand-orange/5" />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          {buttons.map((btn) => {
            const isPrimary = btn.primary !== false;
            const isWhatsApp =
              btn.href.includes('wa.me') ||
              btn.href === WHATSAPP_URL ||
              btn.href === WHATSAPP_URL_WITH_MESSAGE;
            const isHash = btn.href.startsWith('#');
            const isExternal =
              btn.external ||
              btn.href.startsWith('http') ||
              btn.href.startsWith('https') ||
              isWhatsApp;
            const baseClass =
              'min-h-[48px] flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold text-white transition active:scale-[0.98]';
            const className = isPrimary
              ? `${baseClass} bg-brand-orange shadow-glow hover:bg-brand-orange-hover hover:shadow-glow-lg`
              : `${baseClass} border border-white/20 bg-white/5 hover:bg-white/10`;

            if (isWhatsApp) {
              return (
                <a
                  key={btn.label}
                  href={WHATSAPP_URL_WITH_MESSAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('cta_section')}
                  className={className}
                >
                  {btn.label}
                </a>
              );
            }
            if (isHash) {
              return (
                <a
                  key={btn.label}
                  href={btn.href}
                  onClick={(e) => {
                    scrollToSection(e, btn.href);
                    trackCTAClick(btn.label, 'cta_section');
                  }}
                  className={className}
                >
                  {btn.label}
                </a>
              );
            }
            if (isExternal) {
              return (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick(btn.label, 'cta_section')}
                  className={className}
                >
                  {btn.label}
                </a>
              );
            }
            return (
              <Link
                key={btn.label}
                href={btn.href}
                onClick={() => trackCTAClick(btn.label, 'cta_section')}
                className={className}
              >
                {btn.label}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
