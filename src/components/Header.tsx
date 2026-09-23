import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#what-is-esg', label: 'What is ESG' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#after-procedure', label: 'After the Procedure' },
  { href: '#is-it-right', label: 'Is It Right for You' },
  { href: '#consultation', label: 'Schedule Consultation' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 px-3 rounded border border-gray-200 bg-gray-50 flex items-center justify-center">
            <span className="text-sm font-semibold text-brand-gray">
              [Practice Logo]
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray transition-colors hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md text-brand-gray"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-brand-gray font-medium py-2 px-3 rounded hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
