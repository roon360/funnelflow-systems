'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { trackLeadSubmit } from '@/lib/analytics';

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  formName?: string;
}

export function LeadCaptureForm({
  title = 'Get Free Tips & Updates',
  subtitle = 'Join our list and get actionable strategies delivered to your inbox.',
  formName = 'lead_capture',
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    trackLeadSubmit(formName);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, formName }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        return;
      }
      setStatus('success');
      setEmail('');
      setName('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-y border-white/5 bg-brand-blue px-4 py-16"
    >
      <div className="mx-auto max-w-xl">
        <h3 className="text-center text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-center text-white/80">{subtitle}</p>
        {status === 'success' ? (
          <p className="mt-6 text-center font-medium text-green-400">
            Thanks! We&apos;ll be in touch.
          </p>
        ) : (
          <>
            {status === 'error' && (
              <p className="mt-4 text-center text-sm font-medium text-red-400">
                Something went wrong. Please try again or contact us on WhatsApp.
              </p>
            )}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full min-h-[48px] rounded-xl bg-brand-orange py-4 font-semibold text-white transition hover:bg-brand-orange-hover active:scale-[0.98] disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending...' : 'Get Access'}
            </button>
          </form>
          </>
        )}
      </div>
    </motion.section>
  );
}
