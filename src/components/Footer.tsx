export default function Footer() {
  return (
    <footer className="bg-brand-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-slab font-bold text-xl text-white">
              EndoZip<span className="text-xs align-super">™</span>
            </span>
            <span className="text-white/50 text-sm font-condensed">by NitiNotes</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#what-is-esg" className="text-white/70 text-sm hover:text-white transition-colors">
              What is ESG
            </a>
            <a href="#how-it-works" className="text-white/70 text-sm hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#after-procedure" className="text-white/70 text-sm hover:text-white transition-colors">
              After the Procedure
            </a>
            <a href="#is-it-right" className="text-white/70 text-sm hover:text-white transition-colors">
              Is It Right for You
            </a>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-white/50 text-xs leading-relaxed max-w-4xl">
            <p className="mb-3">
              EndoZip™ is a trademark of NitiNotes Surgical Ltd. The information on this website
              is intended for educational purposes only and does not constitute medical advice.
              Always consult with a qualified healthcare professional regarding your health and
              treatment options.
            </p>
            <p className="mb-3">
              Results may vary. Weight loss outcomes depend on individual factors including
              adherence to post-procedure lifestyle modifications.
            </p>
            <p>
              &copy; {new Date().getFullYear()} NitiNotes Surgical Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
