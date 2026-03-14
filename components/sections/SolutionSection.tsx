'use client';

import { motion } from 'framer-motion';

export interface SolutionCard {
  title: string;
  description: string;
  icon?: string;
}

interface SolutionSectionProps {
  title: string;
  cards: SolutionCard[];
  intro?: string;
}

export function SolutionSection({ title, cards, intro }: SolutionSectionProps) {
  return (
    <section className="relative bg-brand-blue-light/50 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {title}
        </motion.h2>
        {intro && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-center text-white/80"
          >
            {intro}
          </motion.p>
        )}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group transition hover:border-white/20 hover:shadow-glow/20"
            >
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-white/80">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
