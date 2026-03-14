'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';
import { WHATSAPP_URL_WITH_MESSAGE } from '@/lib/constants';

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL_WITH_MESSAGE}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating_button')}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition hover:shadow-xl hover:shadow-[#25D366]/50 sm:bottom-28 sm:right-6 sm:h-16 sm:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
    </motion.a>
  );
}
