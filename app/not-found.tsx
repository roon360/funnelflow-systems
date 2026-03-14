import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-blue flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">404</h1>
      <p className="mt-4 text-lg text-white/80">This page could not be found.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/learn-online-income"
          className="rounded-xl bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-hover"
        >
          Learn Online Income
        </Link>
        <Link
          href="/ad-funnel-system"
          className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Ad Funnel System
        </Link>
        <Link
          href="/high-converting-website"
          className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          High Converting Website
        </Link>
      </div>
    </div>
  );
}
