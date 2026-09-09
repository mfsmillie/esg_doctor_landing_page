export default function ObesityCare() {
  return (
    <section id="obesity-care" className="py-20 lg:py-28 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Obesity Care Is Personal
          </h2>
          <p className="text-lg text-brand-gray/80 leading-relaxed">
            Obesity is a complex, chronic disease. The right treatment depends on your health,
            your goals, your treatment history, and a discussion with your physician.
          </p>
          <p className="text-lg text-brand-gray/80 leading-relaxed mt-4">
            Your care plan may include one or more treatment options — alone or in combination — over time.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <img
            src="/images/hero/personal.png"
            alt="A personalized obesity care plan showing Medical therapy, Lifestyle Support, Stomach remodeling, and Bariatric surgery"
            className="w-full max-w-2xl"
          />
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-brand-gray/80 text-lg leading-relaxed">
            For appropriate patients, ESG with EndoZip™ may be one minimally invasive option
            within a personalized obesity care plan.
          </p>
        </div>
      </div>
    </section>
  );
}
