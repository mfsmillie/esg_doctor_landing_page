export default function WhatIsESG() {
  return (
    <section id="what-is-esg" className="py-20 lg:py-28 bg-[#f8f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            What Is ESG Stomach Remodeling
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-brand-gray/80 text-lg leading-relaxed">
            <p>
              Endoscopic sleeve gastroplasty (ESG), or ESG Stomach Remodeling, is a minimally
              invasive procedure that reshapes the stomach from within, without removing part of
              the stomach or making external surgical incisions.
            </p>
            <p>
              The procedure is performed through the mouth using an endoscope. EndoZip™
              automates suturing to help the physician create a consistent pattern of sutures
              that remodels the stomach.
            </p>
            <p>
              By reducing stomach volume, ESG Stomach Remodeling may help you feel full sooner
              and eat smaller portions when combined with long-term dietary and lifestyle changes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-3xl blur-xl" />
            <img
              src="/images/obesity-care/man.png"
              alt="Patient with doctor during consultation"
              className="relative rounded-2xl shadow-lg w-full object-cover h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
