export default function AfterProcedure() {
  const instructions = [
    'Diet progression',
    'Physical activity',
    'Medications',
    'Scheduled follow-up visits',
  ];

  return (
    <section id="after-procedure" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Your Role After the Procedure
            </h2>
            <div className="space-y-5 text-lg text-brand-gray/80 leading-relaxed">
              <p>
                EndoZip™ is intended to be used in combination with appropriate dietary and
                lifestyle changes.
              </p>
              <p>
                Individual results vary and depend on adherence to medical guidance, diet, and
                physical activity recommendations.
              </p>
              <p>
                After the procedure, carefully follow your physician's instructions regarding:
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {instructions.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                  <span className="text-brand-gray/80 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg text-brand-gray/80 leading-relaxed">
              Regular follow-up care is an important part of recovery and ongoing management.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/20 to-brand-blue/20 rounded-3xl blur-2xl" />
            <img
              src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Healthy lifestyle"
              className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
