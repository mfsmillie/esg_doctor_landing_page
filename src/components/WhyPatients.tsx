import { Aperture, Ban, Heart, Utensils, Users } from 'lucide-react';

const considerations = [
  'Are seeking a minimally invasive approach to weight loss',
  'Are ready to commit to long-term dietary and lifestyle changes',
  'Want to understand where ESG may fit within a personalized obesity care plan',
  'Have discussed the potential benefits, risks, and alternatives with their physician',
];

const benefits = [
  {
    icon: <Aperture className="w-7 h-7" />,
    title: 'Minimally invasive',
    description: 'Performed through the mouth',
  },
  {
    icon: <Ban className="w-7 h-7" />,
    title: 'No external incisions',
    description: 'No surgical cuts through the skin',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'No stomach tissue removal',
    description: 'Anatomy preserving procedure',
  },
  {
    icon: <Utensils className="w-7 h-7" />,
    title: 'Designed to support smaller portions',
    description: 'By reducing stomach volume from the inside',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Part of a broader care plan',
    description:
      'Used together with nutrition, physical activity, behavioral support, and physician-guided follow-up',
  },
];

export default function WhyPatients() {
  return (
    <section id="why-patients" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            ESG with EndoZip™ May Be Considered For Patients Who:
          </h2>
          <ul className="text-left space-y-3 text-lg text-brand-gray/80 max-w-2xl mx-auto">
            {considerations.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-green mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-brand-gray/80 leading-relaxed">
            ESG may be an option for patients who are seeking a minimally invasive approach to
            weight loss and are ready to commit to long-term dietary and lifestyle changes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green/10 to-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg text-brand-gray mb-2">{benefit.title}</h3>
              <p className="text-brand-gray/70 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
