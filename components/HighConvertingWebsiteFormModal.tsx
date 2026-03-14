'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WHATSAPP_BASE = 'https://wa.me/254792265306';

export function HighConvertingWebsiteFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<{ name?: string }>({});

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const nextErrors: { name?: string } = {};
      if (!name.trim()) {
        nextErrors.name = 'Please enter your name.';
      }
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;

      const message = `Hello I am ${name.trim()} I need a high converting website.`;
      const encoded = encodeURIComponent(message);
      const url = `${WHATSAPP_BASE}?text=${encoded}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        onClose();
        setName('');
        setErrors({});
      }, 350);
    },
    [name, onClose]
  );

  const handleClose = useCallback(() => {
    setErrors({});
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
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-brand-blue-light p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="high-converting-form-title"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 id="high-converting-form-title" className="pr-8 text-xl font-bold text-white mb-6">
              Get a high converting website
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="high-converting-form-name" className="block text-sm font-medium text-white/90 mb-1">
                  Name
                </label>
                <input
                  id="high-converting-form-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full min-h-[48px] rounded-xl bg-brand-orange py-4 font-semibold text-white transition hover:bg-brand-orange-hover active:scale-[0.98]"
              >
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
