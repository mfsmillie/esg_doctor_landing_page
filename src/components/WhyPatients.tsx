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
                EndoZip™ may be an option for patients seeking a minimally invasive approach to
                stomach remodeling to support weight loss and who are ready to commit to long-term
                dietary and lifestyle changes.
              </p>
              <p>
                For appropriate patients, EndoZip may provide a minimally invasive option within a
                personalized obesity care plan—alongside medical therapy, lifestyle support and,
                when appropriate, bariatric surgery.
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
