import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-6">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-ocean-nav-link">
            2026 Uma Avadhanula. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/umaavadhanula/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean-nav-link hover:text-ocean-nav-hover transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <Link
              to="/contact"
              className="text-ocean-nav-link hover:text-ocean-nav-hover transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
