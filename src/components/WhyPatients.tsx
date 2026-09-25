export default function WhyPatients() {
  return (
    <section id="is-it-right" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Is Stomach Remodeling with EndoZip™ Right for You?
            </h2>
            <div className="space-y-5 text-lg text-brand-gray/80 leading-relaxed">
              <p>
                ESG Stomach Remodeling with EndoZip™ may be an option for appropriate patients
                seeking a minimally invasive approach to support weight loss as part of a
                personalized obesity care plan.
              </p>
              <p>
                Long-term dietary and lifestyle changes are an important part of treatment. Talk
                with your physician about whether ESG Stomach Remodeling may be appropriate for you.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/20 to-brand-blue/20 rounded-3xl blur-2xl" />
            <img
              src="/images/how-it-works/couple.png"
              alt="Couple walking together outdoors"
              className="relative rounded-2xl shadow-xl w-full object-cover object-top h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
