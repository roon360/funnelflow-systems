'use client';

import { motion } from 'framer-motion';

interface ProblemSectionProps {
  title: string;
  items: string[];
  summary?: string;
}

export function ProblemSection({ title, items, summary }: ProblemSectionProps) {
  return (
    <section className="relative border-y border-white/5 bg-brand-blue px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {title}
        </motion.h2>
        <ul className="mt-10 space-y-4">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500/80" />
              <span className="text-white/90">{item}</span>
            </motion.li>
          ))}
        </ul>
        {summary && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-lg text-white/80"
          >
            {summary}
          </motion.p>
        )}
      </div>
    </section>
  );
}
