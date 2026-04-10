'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WHATSAPP_BASE = 'https://wa.me/254792265306';
const LEARN_OPTIONS = [
  'Affiliate Marketing',
  'Dropshipping',
  'E-commerce',
] as const;

export function LearnOnlineFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!name.trim() || !interest) {
        window.alert('Please fill all fields');
        return;
      }

      const message = `Hi, my name is ${name.trim()}. I'm interested in ${interest} and I want to join the mentorship. Please guide me on how to get started.`;
      const encoded = encodeURIComponent(message);
      const url = `${WHATSAPP_BASE}?text=${encoded}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
      setName('');
      setInterest('');
    },
    [name, interest, onClose]
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/70"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="learn-form-title"
          >
            <div
              className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B0F1A] p-6 text-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-3 top-3 text-xl text-white transition hover:text-orange-300"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <h2 id="learn-form-title" className="mb-6 pr-8 text-xl font-bold text-white">
                Get started
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  id="learn-form-name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-4 w-full rounded-lg bg-gray-800 p-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                  autoComplete="name"
                />
                <select
                  id="learn-form-option"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="mb-4 w-full rounded-lg bg-gray-800 p-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="" disabled>
                    What do you want to learn?
                  </option>
                  {LEARN_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Continue to WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
