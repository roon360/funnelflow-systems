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
    title: 'Structured Meta Ad Strategy',
    description: 'Ads that target the right audience and scale with clarity.',
  },
  {
    title: 'High Converting Sales Page',
    description: 'A page that turns visitors into leads and customers.',
  },
  {
    title: 'WhatsApp Conversion Flow',
    description: 'Scripts and sequences that convert chats into sales.',
  },
  {
    title: 'Conversion Tracking',
    description: 'Know exactly what works and what to optimize.',
  },
  {
    title: 'Optimization For ROI',
    description: 'Continuous improvement focused on return on ad spend.',
  },
];

const ctaButtons: CTAButton[] = [
  { label: 'Book Consultation', href: '#cta', primary: true },
  { label: 'WhatsApp Chat', href: WHATSAPP_URL_WITH_MESSAGE, primary: false, external: true },
];

const testimonials: Testimonial[] = [
  {
    name: 'Grace W.',
    quote:
      'Our ads were burning money. After the funnel was installed we started getting real leads.',
    location: 'Nairobi',
  },
  {
    name: 'Daniel R.',
    quote:
      'The structure they put in place made all the difference. We now track every step.',
    location: 'Mombasa',
  },
  {
    name: 'Lucy N.',
    quote:
      'Simple funnel, clear results. Our cost per customer dropped in the first month.',
    location: 'Nakuru',
  },
];

export const metadata = {
  title: 'Ad Funnel System | FunnelFlow Systems',
  description:
    'Stop wasting money on ads. We install a proven ad funnel system that turns clicks into paying customers.',
};

export default function AdFunnelSystemPage() {
  return (
    <main className="pb-24">
      <HeroSection
        headline="Stop Wasting Money On Ads That Don't Convert."
        subheadline="Most businesses run ads but send traffic directly to WhatsApp without a proper funnel. We install a proven ad funnel system that turns clicks into paying customers consistently."
        primaryCTA="Get Your Profitable Ad System Installed"
        secondaryCTA="Chat On WhatsApp"
      />
      <ProblemSection
        title="Why Most Ads Fail"
        items={[
          'No sales page — traffic has nowhere to convert.',
          'Sending traffic directly to WhatsApp with no nurture.',
          'No lead capture — you lose visitors who aren\'t ready yet.',
          'No conversion tracking — you can\'t see what\'s working.',
          'No funnel structure — ad spend goes to waste.',
        ]}
        summary="Businesses waste money on ads without getting clients."
      />
      <SolutionSection
        title="We Install A Proven Funnel System"
        intro="FunnelFlow Systems builds complete marketing funnels for your business."
        cards={solutionCards}
      />
      <BenefitsSection
        title="What This Means For Your Business"
        items={[
          'More qualified leads',
          'Lower cost per customer',
          'Predictable client flow',
          'Higher return on ad spend',
        ]}
      />
      <SocialProofSection testimonials={testimonials} />
      <LeadCaptureForm
        title="Get A Free Funnel Audit"
        subtitle="Tell us about your ads and we'll show you what to fix."
        formName="ad_funnel"
      />
      <TrustBadges />
      <CTASection
        title="Get Your Profitable Ad System Installed"
        buttons={ctaButtons}
      />
    </main>
  );
}
