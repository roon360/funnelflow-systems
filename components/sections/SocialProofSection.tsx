'use client';

import { motion } from 'framer-motion';

export interface Testimonial {
  name: string;
  quote: string;
  location?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    quote:
      'Finally understood how to make money online. The systems are simple and actually work.',
    location: 'Nairobi',
  },
  {
    name: 'James K.',
    quote:
      'Our ad spend went down and conversions went up. The funnel made all the difference.',
    location: 'Nakuru',
  },
  {
    name: 'David L.',
    quote:
      'Our website now generates leads every week. Best investment we made.',
    location: 'Mombasa',
  },
];

interface SocialProofSectionProps {
  testimonials?: Testimonial[];
}

export function SocialProofSection({ testimonials = defaultTestimonials }: SocialProofSectionProps) {
  return (
    <section className="relative bg-brand-blue-light/30 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          What Others Are Saying
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-white/90">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic font-semibold text-white">
                  {t.name}
                  {t.location ? ` – ${t.location}` : ''}
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
