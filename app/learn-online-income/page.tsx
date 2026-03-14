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
    title: 'Affiliate Marketing',
    description:
      'Promote products online and earn commissions every time someone buys.',
  },
  {
    title: 'Dropshipping',
    description:
      'Sell products online without holding inventory.',
  },
  {
    title: 'AI Tools For Business',
    description:
      'Use powerful AI tools to automate work and grow faster.',
  },
];

const ctaButtons: CTAButton[] = [
  { label: 'Learn How To Start Today', href: '#cta', primary: true },
  { label: 'Chat On WhatsApp', href: WHATSAPP_URL_WITH_MESSAGE, primary: false, external: true },
];

const testimonials: Testimonial[] = [
  {
    name: 'James M.',
    quote:
      'This helped me understand exactly what to do and I was able to start immediately.',
    location: 'Nairobi',
  },
  {
    name: 'Mary K.',
    quote:
      'The process was simple and practical. I finally took action.',
    location: 'Nakuru',
  },
  {
    name: 'Peter O.',
    quote:
      'I was skeptical but the training was clear. Started earning within weeks.',
    location: 'Kisumu',
  },
];

export const metadata = {
  title: 'Learn Online Income | FunnelFlow Systems',
  description:
    'Tired of being broke? We show you simple online income systems you can start with just your phone.',
};

export default function LearnOnlineIncomePage() {
  return (
    <main className="pb-24">
      <HeroSection
        headline="Tired Of Being Broke Before The Month Ends?"
        subheadline="Most people want to earn money online but don't know what actually works or where to start. We show you simple online income systems you can start using even with just your phone."
        primaryCTA="Start Learning How To Earn Online"
        secondaryCTA="Chat On WhatsApp"
        scarcityText="Limited training spots available this week."
      />
      <ProblemSection
        title="Why Most People Fail To Make Money Online"
        items={[
          'Try random online methods without a clear system.',
          'Spend months learning the wrong things.',
          'Join programs that don\'t deliver real results.',
          'Give up without seeing any income.',
        ]}
        summary="Making money online is possible only when you follow proven systems."
      />
      <SolutionSection
        title="We Show You The Exact Systems That Work"
        cards={solutionCards}
      />
      <BenefitsSection
        title="Simple Methods Anyone Can Start"
        items={[
          'Smartphone — that\'s all the tech you need to begin.',
          'Internet connection — work from anywhere.',
          'Willingness to learn — we guide you step by step.',
        ]}
      />
      <SocialProofSection testimonials={testimonials} />
      <LeadCaptureForm
        title="Get Free Training Tips"
        subtitle="Join our list for simple online income strategies."
        formName="learn_online_income"
      />
      <TrustBadges />
      <CTASection
        title="The Best Time To Start Is Now"
        buttons={ctaButtons}
      />
    </main>
  );
}
