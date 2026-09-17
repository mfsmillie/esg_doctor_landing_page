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
          <img
            src="/images/EndoZip_Logo_FullColor_Display_X3.png"
            alt="EndoZip Logo"
            className="h-12 sm:h-14 lg:h-16 w-auto mb-6"
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3f3f3f] mb-4 leading-tight">
            Automated Stomach Remodeling
          </h1>

          <p className="text-xl sm:text-2xl text-[#3f3f3f]/80 font-light mb-8">
            A minimally invasive procedure to support weight loss
          </p>

          <div className="max-w-xl text-[#3f3f3f]/70 text-base sm:text-lg mb-10 space-y-4 leading-relaxed">
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
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-[#3f3f3f]/30 text-[#3f3f3f] font-semibold text-lg hover:bg-[#3f3f3f]/5 transition-all"
            >
              Learn About ESG
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-[40px]"
        style={{ background: 'linear-gradient(to right, #4a90c4, #5a9a8e, #8ab530, #a0c800)' }}
      />

      <a
        href="#obesity-care"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#3f3f3f]/40 hover:text-[#3f3f3f] transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
