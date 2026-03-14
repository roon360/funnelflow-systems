'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, HeadphonesIcon } from 'lucide-react';

const badges = [
  { icon: Shield, text: 'Proven systems' },
  { icon: Zap, text: 'Fast setup' },
  { icon: HeadphonesIcon, text: 'Support included' },
];

export function TrustBadges() {
  return (
    <section className="border-t border-white/5 bg-brand-blue px-4 py-10">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 sm:gap-12">
        {badges.map(({ icon: Icon, text }, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 text-white/80"
          >
            <Icon className="h-5 w-5 text-brand-orange" />
            <span className="font-medium">{text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
