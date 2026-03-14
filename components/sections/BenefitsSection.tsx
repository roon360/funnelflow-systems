'use client';

import { motion } from 'framer-motion';

interface BenefitsSectionProps {
  title: string;
  items: string[];
}

export function BenefitsSection({ title, items }: BenefitsSectionProps) {
  return (
    <section className="relative border-y border-white/5 bg-brand-blue px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {title}
        </motion.h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
                ✓
              </span>
              <span className="font-medium text-white">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
