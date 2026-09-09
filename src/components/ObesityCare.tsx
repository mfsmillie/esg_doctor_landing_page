const continuum = [
  {
    image: '/images/obesity-care/lifestyle.png',
    title: 'Lifestyle support',
    description: 'Nutrition, physical activity, and behavioral support',
    color: 'from-green-400 to-green-500',
  },
  {
    image: '/images/obesity-care/medical.png',
    title: 'Medical therapy',
    description: 'Prescription weight-loss medications, including GLP-1 therapies',
    color: 'from-teal-400 to-teal-500',
  },
  {
    image: '/images/obesity-care/endoscopic.png',
    title: 'Endoscopic procedures',
    description: 'Minimally invasive options such as Endoscopic Sleeve Gastroplasty',
    color: 'from-brand-blue to-blue-600',
    highlighted: true,
  },
  {
    image: '/images/obesity-care/bariatric.png',
    title: 'Bariatric surgery',
    description: 'Surgical procedures for appropriate patients',
    color: 'from-blue-700 to-blue-800',
  },
];

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

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {continuum.map((item) => (
            <div
              key={item.title}
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                item.highlighted
                  ? 'border-brand-blue/30 bg-brand-blue/5 shadow-md ring-1 ring-brand-blue/10'
                  : 'border-gray-100 bg-white'
              }`}
            >
              <div className="w-14 h-14 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-lg text-brand-gray mb-2">{item.title}</h3>
              <p className="text-brand-gray/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
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
