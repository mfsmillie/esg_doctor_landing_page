import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function SafetyInfo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="safety" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 lg:p-12">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-gray">
                Important Patient Safety Information
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-brand-gray/80 leading-relaxed">
            <p>
              Talk with your physician to fully understand the potential benefits, risks, and
              alternatives associated with Endoscopic Sleeve Gastroplasty with EndoZip™. Your
              physician will determine whether this procedure is appropriate for you.
            </p>

            <div>
              <h3 className="font-bold text-brand-gray text-lg mb-2">About the sutures</h3>
              <p>
                Sutures placed during the procedure are designed to remain in the body. They do
                not dissolve and typically do not need to be removed unless your physician
                determines otherwise.
              </p>
              <p className="mt-2">
                The long-term presence of sutures is monitored during routine follow-up care.
              </p>
            </div>

            {expanded && (
              <>
                <div>
                  <h3 className="font-bold text-brand-gray text-lg mb-2">
                    Materials in contact with the body
                  </h3>
                  <p>
                    Implanted components include polypropylene suture and TECAPEEK MT.
                  </p>
                  <p className="mt-2">
                    These materials are widely used in medical devices and have been evaluated
                    for compatibility with the human body.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-brand-gray text-lg mb-2">
                    When to contact your physician
                  </h3>
                  <p>
                    Contact your physician promptly if you experience unexpected or concerning
                    symptoms after the procedure, including severe abdominal pain, persistent
                    vomiting, bleeding, fever, or difficulty breathing.
                  </p>
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-brand-blue font-semibold hover:text-brand-dark-blue transition-colors"
          >
            {expanded ? 'Show Less' : 'Read Full Safety Information'}
          </button>
        </div>
      </div>
    </section>
  );
}
