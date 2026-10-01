import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface FaqModalProps {
  open: boolean;
  onClose: () => void;
}

const faqItems = [
  {
    question: 'What is ESG Stomach Remodeling with EndoZip\u2122?',
    answer: `Endoscopic sleeve gastroplasty, or ESG Stomach Remodeling, is a minimally invasive procedure that reshapes the stomach from within without removing part of the stomach or making external surgical incisions.\n\nEndoZip\u2122 is the medical device used by trained physicians during the procedure. It automates suturing to help place sutures inside the stomach and support stomach remodeling from within.`,
  },
  {
    question: 'How does ESG Stomach Remodeling with EndoZip\u2122 work?',
    answer: `The procedure is performed through the mouth using an endoscope. EndoZip\u2122 places sutures inside the stomach to remodel it from within and reduce stomach volume \u2014 with no external incisions or stomach tissue removal.\n\nBy reducing stomach volume, ESG Stomach Remodeling may help you feel full sooner and eat smaller portions when combined with long-term dietary and lifestyle changes. Individual results vary.`,
  },
  {
    question: 'Will I need anesthesia?',
    answer:
      'The procedure is performed under anesthesia. Your physician and care team will determine the appropriate approach based on your individual health and clinical needs.',
  },
  {
    question: 'How many sutures are placed?',
    answer:
      'Up to five sutures may be placed during the procedure. The number and placement are determined by your physician based on your anatomy and clinical needs.',
  },
  {
    question: 'Do the sutures stay in the stomach?',
    answer:
      'Yes. The sutures are designed to remain in the body and do not dissolve. They typically do not need to be removed unless your physician determines otherwise.',
  },
  {
    question: 'What should I expect after the procedure?',
    answer:
      'Your physician will provide instructions for diet progression, physical activity, medications and follow-up visits.\n\nOngoing follow-up is important to monitor your recovery and progress and address any questions or concerns.',
  },
  {
    question: 'What symptoms should I report after the procedure?',
    answer:
      'Contact your physician promptly if you experience unexpected or concerning symptoms, including:\n\n\u2022 Severe abdominal pain\n\u2022 Persistent vomiting\n\u2022 Bleeding\n\u2022 Fever\n\u2022 Difficulty breathing',
  },
  {
    question: 'Is ESG Stomach Remodeling with EndoZip\u2122 right for me?',
    answer:
      'ESG Stomach Remodeling with EndoZip\u2122 may be an option for appropriately selected patients seeking a minimally invasive approach to support weight loss.\n\nYour physician will consider your health history, treatment goals, previous treatment experience and readiness to commit to long-term dietary and lifestyle changes and follow-up care.',
  },
  {
    question: 'Questions to Ask Your Physician',
    answer:
      '\u2022 Could ESG Stomach Remodeling with EndoZip\u2122 be appropriate for me?\n\u2022 What should I expect before, during and after the procedure?\n\u2022 What lifestyle changes and follow-up will I need?\n\u2022 What are the potential benefits, risks and alternatives?',
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base font-semibold text-brand-gray group-hover:text-brand-blue transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-0.5 text-brand-gray/40 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand-blue' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-brand-gray/70 text-sm leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqModal({ open, onClose }: FaqModalProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl mx-4 mt-20 mb-8 max-h-[calc(100vh-7rem)] flex flex-col bg-white rounded-2xl shadow-2xl animate-slide-up overflow-hidden">
        <div className="flex items-center justify-between px-8 pt-8 pb-4 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-brand-gray">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-brand-gray/60 mt-1">
              ESG Stomach Remodeling with EndoZip{'\u2122'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-brand-gray/60 hover:text-brand-gray"
            aria-label="Close FAQ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-8">
          <p className="text-sm text-brand-gray/70 leading-relaxed pt-6 pb-2">
            Get answers to common questions about ESG Stomach Remodeling with
            EndoZip{'\u2122'} — a minimally invasive procedure to support weight loss
            as part of a personalized obesity care plan.
          </p>

          <div className="divide-y-0">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <div className="py-8 space-y-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-brand-gray text-center">
              Contact us to discuss if ESG Stomach Remodeling with EndoZip{'\u2122'}{' '}
              is right for you.
            </p>
            <p className="text-xs text-brand-gray/50 text-center leading-relaxed max-w-lg mx-auto">
              This FAQ provides general information and does not replace
              consultation with your physician. Your physician can discuss whether
              ESG Stomach Remodeling with EndoZip{'\u2122'} is appropriate for you,
              including potential benefits, risks and alternatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
