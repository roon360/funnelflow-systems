'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics';
import { WHATSAPP_URL_WITH_MESSAGE } from '@/lib/constants';

function scrollToCTA(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
}
const STORAGE_KEY = 'funnelflow_exit_popup_seen';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
      setIsOpen(true);
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-brand-blue-light p-6 shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-2 text-xl font-bold text-white">
              Wait! Don&apos;t miss out
            </h3>
            <p className="mb-6 text-white/80">
              Get started today. Chat with us on WhatsApp for a free consultation.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#cta"
                onClick={(e) => {
                  scrollToCTA(e);
                  trackCTAClick('exit_popup_primary', pathname);
                  setIsOpen(false);
                }}
                className="min-h-[48px] flex items-center justify-center rounded-xl bg-brand-orange px-6 py-3 text-center font-semibold text-white hover:bg-brand-orange-hover active:scale-[0.98]"
              >
                Get Started Now
              </a>
              <a
                href={WHATSAPP_URL_WITH_MESSAGE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('exit_popup');
                  setIsOpen(false);
                }}
                className="min-h-[48px] flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-center font-semibold text-white hover:bg-white/10 active:scale-[0.98]"
              >
                Chat On WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
