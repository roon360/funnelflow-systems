import Link from 'next/link';

export const metadata = {
  title: 'Learn Online Income | FunnelFlow Systems',
  description:
    'High-converting mentorship for Affiliate Marketing, Dropshipping, and E-commerce focused on serious buyers ready to start earning.',
};

const WHATSAPP_URL =
  'https://wa.me/254792265306?text=I%20want%20to%20join%20the%20mentorship';

export default function LearnOnlineIncomePage() {
  return (
    <main className="scroll-smooth bg-gradient-to-b from-[#0B0F1A] to-[#05070D] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,122,0,0.24), transparent 45%), radial-gradient(circle at 80% 30%, rgba(255,167,38,0.2), transparent 40%), repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 24px)',
          }}
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
          <span className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-300">
            Premium Mentorship Program
          </span>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We&apos;ve Spent Years Figuring It Out - So You Don&apos;t Have To
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300 sm:text-xl">
            Skip the trial &amp; error and start earning faster using Affiliate Marketing,
            Dropshipping &amp; E-commerce
          </p>
          <p className="mt-6 max-w-3xl rounded-2xl border border-primary/40 bg-primary/10 px-5 py-4 text-sm font-medium text-orange-200 sm:text-base">
            This mentorship is for serious individuals ready to learn and start earning - not
            for those looking for shortcuts.
          </p>
          <div className="mt-10 flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 text-base font-semibold text-white shadow-[0_0_35px_rgba(255,122,0,0.45)] transition hover:-translate-y-0.5 hover:bg-[#ff8d1f]"
            >
              Join Mentorship - KES 1,500
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:border-primary/70 hover:text-orange-200"
            >
              Join via WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
            <h2 className="text-center text-2xl font-semibold text-white">Live Earnings Snapshot</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-gray-300">Today&apos;s Earnings</p>
                <p className="mt-2 text-2xl font-bold text-accent">KES 15,824</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-gray-300">New Sale</p>
                <p className="mt-2 text-2xl font-bold text-accent">KES 7,500</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-gray-300">Commission</p>
                <p className="mt-2 text-2xl font-bold text-accent">+KES 2,500</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="animate-pulse rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-medium text-orange-200">
                New Order Received
              </span>
              <span className="rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-sm font-medium text-amber-200">
                Affiliate Commission +KES 2,500
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-8 sm:p-10">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Most People Fail Online</h2>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Jump from one method to another
              </li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Watch endless videos without action
              </li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Waste money on wrong strategies
              </li>
            </ul>
            <p className="mt-8 text-2xl font-bold text-primary">And still earn nothing.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">A Proven System That Works</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            Instead of guessing what might work, you get a clear mentorship roadmap with practical
            steps, weekly accountability, and real execution support from start to first results.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-primary/60">
              <h3 className="text-xl font-semibold">Affiliate Marketing</h3>
              <p className="mt-3 text-gray-300">Promote proven offers and earn commission per sale.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-primary/60">
              <h3 className="text-xl font-semibold">Dropshipping</h3>
              <p className="mt-3 text-gray-300">
                Sell winning products online without stocking inventory.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-primary/60">
              <h3 className="text-xl font-semibold">E-commerce</h3>
              <p className="mt-3 text-gray-300">
                Build systems that turn traffic into buyers and repeat customers.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Why This Mentorship Is Different</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Beginner Friendly',
              'No Experience Needed',
              'Step-by-Step Mentorship',
              'Learn via WhatsApp',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm font-medium text-gray-100"
              >
                <span className="mr-2 text-accent">●</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-green-500/40 bg-green-500/10 p-8">
            <h2 className="text-2xl font-bold">This is for you if:</h2>
            <ul className="mt-5 space-y-3 text-green-100">
              <li>Serious about earning</li>
              <li>Ready to take action</li>
              <li>Can invest KES 1,500</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-red-500/40 bg-red-500/10 p-8">
            <h2 className="text-2xl font-bold">This is NOT for you if:</h2>
            <ul className="mt-5 space-y-3 text-red-100">
              <li>Want quick money without effort</li>
              <li>Won&apos;t follow instructions</li>
              <li>Just curious</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="cta" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-primary/40 bg-primary/10 p-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Start Your Online Income Journey Today</h2>
            <p className="mt-3 text-gray-300">Limited slots available</p>
            <div className="mt-8">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex animate-pulse items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-[0_0_35px_rgba(255,122,0,0.45)] transition hover:bg-[#ff8d1f]"
              >
                Join Mentorship - KES 1,500
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
