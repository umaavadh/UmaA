import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-navy-dark shadow-navbar transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-display text-lg text-ocean-nav-hover hover:text-white transition-colors"
          >
            Uma Avadhanula
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path ||
                (link.path === '/case-studies' && location.pathname.startsWith('/case-studies'));

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-sans uppercase tracking-wide transition-colors ${
                    isActive
                      ? 'text-ocean-nav-hover border-b-2 border-ocean-nav-hover pb-1'
                      : 'text-ocean-nav-link hover:text-ocean-nav-hover'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ocean-nav-link hover:text-ocean-nav-hover transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path ||
                (link.path === '/case-studies' && location.pathname.startsWith('/case-studies'));

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 text-[13px] font-sans uppercase tracking-wide transition-colors ${
                    isActive
                      ? 'text-ocean-nav-hover font-semibold'
                      : 'text-ocean-nav-link hover:text-ocean-nav-hover'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
