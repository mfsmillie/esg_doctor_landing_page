import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#what-is-esg', label: 'What is ESG' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#after-procedure', label: 'After the Procedure' },
  { href: '#is-it-right', label: 'Is It Right for You' },
  { href: '#consultation', label: 'Schedule Consultation' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className={`h-9 px-3 rounded border flex items-center justify-center ${
            scrolled ? 'border-gray-200 bg-gray-50' : 'border-white/20 bg-white/10'
          } transition-colors`}>
            <span className={`text-sm font-semibold ${scrolled ? 'text-brand-gray' : 'text-white'} transition-colors`}>
              [Practice Logo]
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-green ${
                scrolled ? 'text-brand-gray' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-brand-gray' : 'text-white'}`}
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
