import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="font-display text-lg text-ocean-nav-hover mb-2">
              Uma Avadhanula
            </h3>
            <p className="text-[13px] font-sans text-ocean-nav-link">
              eLearning Consultant and Instructional Design Strategist
            </p>
          </div>

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
            <a
              href="mailto:uma.avadh@gmail.com"
              className="text-ocean-nav-link hover:text-ocean-nav-hover transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ocean-text/20">
          <p className="text-xs font-sans text-ocean-nav-link text-center md:text-left">
            2025 Uma Avadhanula. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
