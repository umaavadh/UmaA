import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  description: string;
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
  };
  cta: {
    text: string;
    url: string;
  };
}

export default function Portfolio() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const portfolioItems: AccordionItem[] = [
    {
      id: 'ai-feedback',
      title: 'AI-Powered Learner Feedback Automation',
      description: 'Designed and implemented an automated feedback system to measure AI readiness among learners. Using Google Forms for data collection, Google Sheets for automated scoring and cohort analytics, and Make.com as the automation layer, the solution delivers a personalized feedback email to each learner upon form submission. This use case demonstrates how no-code automation tools can be combined to scale personalized learner feedback efficiently, a capability with strong relevance for modern L&D practice.',
      badge: {
        text: 'Google Forms · Google Sheets · Make.com',
        bgColor: 'rgba(26, 122, 175, 0.2)',
        textColor: '#7AACCC',
        borderColor: '#7AACCC',
      },
      cta: {
        text: 'Click Here to Try',
        url: 'https://forms.gle/RZWiZiqqUp83h7eY6',
      },
    },
    {
      id: 'scope-secure',
      title: 'Scope Secure — AI-Powered Escrow Platform',
      description: 'An intelligent escrow platform that helps organizations and freelancers establish trusted partnerships. AI generates collaborative work scope checklists and verifies final deliverables against the agreed scope, minimizing disputes and triggering time-based resolution when needed.',
      badge: {
        text: 'First Prize Winner — AI Generalist Fellowship 2025',
        bgColor: 'rgba(212, 168, 75, 0.2)',
        textColor: '#D4A84B',
        borderColor: '#D4A84B',
      },
      cta: {
        text: 'Click Here to View',
        url: 'https://ss-backend-on-cursor.vercel.app/',
      },
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <>
      <div className="bg-ocean-bg">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-4 sm:mb-6">
            Work Samples
          </p>

          <p className="text-base sm:text-lg text-ocean-text leading-relaxed mb-0 max-w-[800px]">
            A selection of work samples spanning instructional design and AI-powered product development.
          </p>
        </div>
      </div>

      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-6">
            <div className="mb-6 sm:mb-8">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-navy-dark mb-2">L&D AI-powered Automation</h2>
            </div>

            <div className="border border-ocean-border rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggleItem(portfolioItems[0].id)}
                className="w-full flex items-center justify-between p-4 sm:p-6 bg-ocean-primary hover:bg-opacity-90 transition-all"
              >
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-left pr-4" style={{ color: '#E0EEF6' }}>
                  {portfolioItems[0].title}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform flex-shrink-0`}
                  style={{
                    color: '#E0EEF6',
                    transform: openItem === portfolioItems[0].id ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {openItem === portfolioItems[0].id && (
                <div className="p-4 sm:p-6 bg-white border-t border-ocean-border">
                  <p className="text-sm sm:text-[15px] leading-relaxed mb-6" style={{ color: '#7AACCC' }}>
                    {portfolioItems[0].description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <span
                      className="inline-block px-3 sm:px-4 py-1.5 text-xs font-medium border rounded-full"
                      style={{
                        backgroundColor: portfolioItems[0].badge.bgColor,
                        color: portfolioItems[0].badge.textColor,
                        borderColor: portfolioItems[0].badge.borderColor,
                      }}
                    >
                      {portfolioItems[0].badge.text}
                    </span>

                    <a
                      href={portfolioItems[0].cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 bg-ocean-primary text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
                    >
                      {portfolioItems[0].cta.text}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 sm:mt-12 mb-6 sm:mb-8">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-navy-dark mb-2">Featured Project: AI MVP</h2>
            </div>

            <div className="border border-ocean-border rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => toggleItem(portfolioItems[1].id)}
                className="w-full flex items-center justify-between p-4 sm:p-6 bg-ocean-primary hover:bg-opacity-90 transition-all"
              >
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-left pr-4" style={{ color: '#E0EEF6' }}>
                  {portfolioItems[1].title}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform flex-shrink-0`}
                  style={{
                    color: '#E0EEF6',
                    transform: openItem === portfolioItems[1].id ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {openItem === portfolioItems[1].id && (
                <div className="p-4 sm:p-6 bg-white border-t border-ocean-border">
                  <p className="text-sm sm:text-[15px] leading-relaxed mb-6" style={{ color: '#7AACCC' }}>
                    {portfolioItems[1].description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <span
                      className="inline-block px-3 sm:px-4 py-1.5 text-xs font-medium border rounded-full"
                      style={{
                        backgroundColor: portfolioItems[1].badge.bgColor,
                        color: portfolioItems[1].badge.textColor,
                        borderColor: portfolioItems[1].badge.borderColor,
                      }}
                    >
                      {portfolioItems[1].badge.text}
                    </span>

                    <a
                      href={portfolioItems[1].cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 bg-ocean-primary text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
                    >
                      {portfolioItems[1].cta.text}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
