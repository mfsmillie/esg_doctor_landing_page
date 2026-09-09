import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-clip bg-white">
      <div className="absolute inset-0">
        <img
          src="/images/hero/Screenshot_2026-09-09_at_11.40.04_AM.png"
          alt="Smiling woman"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray mb-4 leading-tight">
            Automated Stomach Remodeling
            <span className="block mt-2">
              with{' '}
              <span className="text-brand-gray">
                EndoZip™
              </span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-brand-gray/80 font-light mb-8">
            A minimally invasive procedure to support weight loss
          </p>

          <div className="max-w-xl text-brand-gray/70 text-base sm:text-lg mb-10 space-y-4 leading-relaxed">
            <p>
              Endoscopic Sleeve Gastroplasty (ESG) with EndoZip™ is performed through the mouth,
              with no external incisions and no stomach tissue removal.
            </p>
            <p>
              It may be an option for appropriate patients who are seeking a minimally invasive
              approach to weight loss as part of a personalized obesity care plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-brand-green text-white font-semibold text-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </a>
            <a
              href="#what-is-esg"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-brand-gray/30 text-brand-gray font-semibold text-lg hover:bg-brand-gray/5 transition-all"
            >
              Learn About ESG
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1/2">
        <svg
          className="w-full block"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 960 56"
        >
          <defs>
            <pattern
              id="teeth-pattern"
              x="0"
              y="0"
              width="32"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <rect x="11" y="6" width="10" height="20" rx="5" fill="white" />
              <rect x="-5" y="30" width="10" height="24" rx="5" fill="white" />
              <rect x="27" y="30" width="10" height="24" rx="5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#teeth-pattern)" />
        </svg>
      </div>

      <a
        href="#obesity-care"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-brand-gray/40 hover:text-brand-gray transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
