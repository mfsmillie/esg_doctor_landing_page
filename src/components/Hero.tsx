import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-dark-blue to-brand-blue" />
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Physician consulting with patient"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Endoscopic Sleeve Gastroplasty
          <span className="block mt-2">
            with{' '}
            <span className="text-white">
              EndoZip™
            </span>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 font-light mb-8">
          A minimally invasive procedure to support weight loss
        </p>

        <div className="max-w-3xl mx-auto text-white/80 text-base sm:text-lg mb-10 space-y-4 leading-relaxed">
          <p>
            Endoscopic Sleeve Gastroplasty (ESG) with EndoZip™ is performed through the mouth,
            with no external incisions and no stomach tissue removal.
          </p>
          <p>
            It may be an option for appropriate patients who are seeking a minimally invasive
            approach to weight loss as part of a personalized obesity care plan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#consultation"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-brand-green text-white font-semibold text-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </a>
          <a
            href="#what-is-esg"
            className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Learn About ESG
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1/2">
        <img
          src="/images/hero/ENDO-teeth-Display_X3.png"
          alt=""
          className="w-full h-auto block"
        />
      </div>

      <a
        href="#obesity-care"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
