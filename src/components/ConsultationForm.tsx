import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    preferred_contact: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase
      .from('consultation_requests')
      .insert([{
        full_name: `${formData.first_name} ${formData.last_name}`.trim(),
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message
          ? `Preferred contact: ${formData.preferred_contact || 'Not specified'}\n\n${formData.message}`
          : formData.preferred_contact
            ? `Preferred contact: ${formData.preferred_contact}`
            : null,
      }]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    } else {
      setStatus('success');
      setFormData({ first_name: '', last_name: '', email: '', phone: '', preferred_contact: '', message: '' });
    }
  }

  if (status === 'success') {
    return (
      <section id="consultation" className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-dark-blue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold text-brand-gray mb-3">Thank You!</h3>
            <p className="text-brand-gray/70">
              Your consultation request has been submitted. A member of the care team will
              be in touch with you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-white">
            <div className="w-40 h-16 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-8">
              <span className="text-white/50 text-sm font-condensed">[Practice Logo]</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Take the Next Step
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Talk with [Physician / Practice Name] about whether ESG with EndoZip™ may be
              an appropriate part of your obesity care plan.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 space-y-3">
              <p className="text-white font-semibold text-lg">[Physician Name]</p>
              <p className="text-white/80">[Practice Name]</p>
              <div className="border-t border-white/10 pt-3 mt-3 space-y-2 text-sm text-white/70">
                <p>[Phone]</p>
                <p>[Email]</p>
                <p>[Website]</p>
                <p>[Address]</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl"
          >
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-semibold text-brand-gray mb-1.5">
                    First Name *
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    required
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-semibold text-brand-gray mb-1.5">
                    Last Name *
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    required
                    value={formData.last_name}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-gray mb-1.5">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-gray mb-1.5">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="preferred_contact" className="block text-sm font-semibold text-brand-gray mb-1.5">
                  Preferred Contact Method
                </label>
                <select
                  id="preferred_contact"
                  value={formData.preferred_contact}
                  onChange={(e) => setFormData({ ...formData, preferred_contact: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                >
                  <option value="">Select preference</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="No preference">No preference</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-gray mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
                  placeholder="Tell us about your goals or any questions..."
                />
              </div>
            </div>

            {status === 'error' && (
              <p className="mt-4 text-red-600 text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-brand-green to-brand-blue text-white font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg"
            >
              {status === 'submitting' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {status === 'submitting' ? 'Submitting...' : 'Request a Consultation'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
