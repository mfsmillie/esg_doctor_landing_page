export default function IsItRight() {
  const questions = [
    'Which treatment options may be appropriate for me?',
    'How could ESG with EndoZip™ fit into my obesity care plan?',
    'What lifestyle changes will I need to make before and after treatment?',
    'What follow-up care and support will be needed?',
    'What are the potential benefits, risks, and alternatives?',
  ];

  return (
    <section id="is-it-right" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Is ESG with EndoZip™ Right for You?
          </h2>
          <p className="text-lg text-brand-gray/80 leading-relaxed">
            ESG with EndoZip™ may be an option for patients who are seeking a minimally
            invasive approach to weight loss and are ready to commit to long-term dietary
            and lifestyle changes.
          </p>
          <p className="text-lg text-brand-gray/80 leading-relaxed mt-4">
            Your physician will help determine whether ESG with EndoZip™ may be an appropriate
            part of your obesity care plan.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-brand-gray mb-6">
            Questions to Discuss with Your Doctor:
          </h3>
          <ul className="space-y-4">
            {questions.map((q) => (
              <li key={q} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded border-2 border-brand-blue/40 shrink-0 mt-0.5" />
                <span className="text-brand-gray/80 text-lg leading-relaxed">{q}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <a
              href="#consultation"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-brand-green text-white font-semibold text-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
