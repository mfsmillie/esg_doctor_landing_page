const steps = [
  {
    image: '/images/how-it-works/through_mouth.png',
    title: 'Access through the mouth',
    description: 'No external incisions',
  },
  {
    image: '/images/how-it-works/sutures_placed.png',
    title: 'Sutures placed',
    description: 'Inside the stomach',
  },
  {
    image: '/images/how-it-works/volume_reduced.png',
    title: 'Volume reduced',
    description: 'To support smaller portions',
  },
  {
    image: '/images/how-it-works/no_stomach_removal.png',
    title: 'No stomach removal',
    description: 'An anatomy-preserving approach',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            How the Procedure Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative text-center group"
            >
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-green/40 to-brand-blue/40" />
              )}
              <div className="relative z-10 w-28 h-28 mx-auto mb-5 group-hover:scale-105 transition-transform">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-lg text-brand-gray mb-2">{step.title}</h3>
              <p className="text-brand-gray/70 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center">
          <p className="text-brand-gray/80 text-lg leading-relaxed">
            Your physician determines whether ESG with EndoZip™ may be appropriate based on
            your anatomy, health history, and treatment goals.
          </p>
        </div>
      </div>
    </section>
  );
}
