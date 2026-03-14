import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { LeadCaptureForm } from '@/components/sections/LeadCaptureForm';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { CTASection } from '@/components/sections/CTASection';
import type { CTAButton } from '@/components/sections/CTASection';
import type { SolutionCard } from '@/components/sections/SolutionSection';
import type { Testimonial } from '@/components/sections/SocialProofSection';
import { WHATSAPP_URL_WITH_MESSAGE } from '@/lib/constants';

const solutionCards: SolutionCard[] = [
  {
    title: 'Lead Capture Forms',
    description: 'Capture visitor details before they leave.',
  },
  {
    title: 'High Converting Layout',
    description: 'Design that guides visitors toward one clear action.',
  },
  {
    title: 'Conversion Psychology',
    description: 'Copy and structure that build trust and urgency.',
  },
  {
    title: 'Fast Loading Performance',
    description: 'Sites that load in under 1.5 seconds.',
  },
  {
    title: 'Mobile Optimized Design',
    description: 'Perfect experience on every device.',
  },
];

const ctaButtons: CTAButton[] = [
  { label: 'Free Consultation', href: '#cta', primary: true },
  { label: 'WhatsApp Chat', href: WHATSAPP_URL_WITH_MESSAGE, primary: false, external: true },
];

const testimonials: Testimonial[] = [
  {
    name: 'Samuel T.',
    quote:
      'Our website used to look good but brought no leads. Now we get inquiries every week.',
    location: 'Nairobi',
  },
  {
    name: 'Jane M.',
    quote:
      'The new site is fast and clear. Visitors know exactly what to do next.',
    location: 'Eldoret',
  },
  {
    name: 'Joseph K.',
    quote:
      'Best investment we made. The conversion-focused design actually works.',
    location: 'Kisumu',
  },
];

export const metadata = {
  title: 'High Converting Website | FunnelFlow Systems',
  description:
    'If your website isn\'t generating leads daily, it\'s costing you money. We build conversion-focused websites.',
};

export default function HighConvertingWebsitePage() {
  return (
    <main className="pb-24">
      <HeroSection
        headline="If Your Website Isn't Generating Leads Daily, It's Costing You Money."
        subheadline="Most business websites look good but fail to turn visitors into clients. We build high converting websites designed to generate leads consistently."
        primaryCTA="Get a High Converting Website."
        secondaryCTA="Chat On WhatsApp"
      />
      <ProblemSection
        title="Most Business Websites Don't Convert"
        items={[
          'No clear offer — visitors don\'t know what to do next.',
          'No call to action — no button or link that converts.',
          'No lead capture — you lose visitors who aren\'t ready to buy.',
          'Slow loading pages — visitors leave before they see your message.',
          'Poor mobile experience — half your traffic gets a bad experience.',
        ]}
      />
      <SolutionSection
        title="We Build Conversion Focused Websites"
        cards={solutionCards}
      />
      <BenefitsSection
        title="What Happens When Your Website Works"
        items={[
          'More leads',
          'More inquiries',
          'More clients',
          'More revenue',
        ]}
      />
      <SocialProofSection testimonials={testimonials} />
      <LeadCaptureForm
        title="Get A Free Website Review"
        subtitle="Send us your site and we'll show you conversion opportunities."
        formName="high_converting_website"
      />
      <TrustBadges />
      <CTASection
        title="Get Your High Converting Website"
        buttons={ctaButtons}
      />
    </main>
  );
}
