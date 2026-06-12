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

interface Section {
  heading: string;
  item: AccordionItem;
}

const sections: Section[] = [
  {
    heading: 'L&D AI-powered Automation',
    item: {
      id: 'ai-feedback',
      title: 'AI-Powered Learner Feedback Automation',
      description: 'Designed and implemented an automated feedback system to measure AI readiness among learners. Using Google Forms for data collection, Google Sheets for automated scoring and cohort analytics, and Make.com as the automation layer, the solution delivers a personalized feedback email to each learner upon form submission. This use case demonstrates how no-code automation tools can be combined to scale personalized learner feedback efficiently, a capability with strong relevance for modern L&D practice.',
      badge: {
        text: 'Google Forms · Google Sheets · Make.com',
        bgColor: 'rgba(26, 122, 175, 0.2)',
        textColor: '#7AACCC',
        borderColor: '#7AACCC',
      },
      cta: { text: 'Click Here to Try', url: 'https://forms.gle/RZWiZiqqUp83h7eY6' },
    },
  },
  {
    heading: 'Featured Project: AI MVP',
    item: {
      id: 'scope-secure',
      title: 'SecureServe — AI-Powered Escrow Platform',
      description: 'An intelligent escrow platform that helps organizations and freelancers establish trusted partnerships. AI generates collaborative work scope checklists and verifies final deliverables against the agreed scope, minimizing disputes and triggering time-based resolution when needed.',
      badge: {
        text: 'First Prize Winner — AI Generalist Fellowship 2025',
        bgColor: 'rgba(212, 168, 75, 0.2)',
        textColor: '#D4A84B',
        borderColor: '#D4A84B',
      },
      cta: { text: 'Click Here to View', url: 'https://ss-backend-on-cursor.vercel.app/' },
    },
  },
  {
    heading: 'Rise 360 Course Demo',
    item: {
      id: 'id-showcase',
      title: 'AI Readiness for Every Professional',
      description: 'An interactive Rise 360 e-learning course featuring Storyline-embedded slides, multi-block interactivity, and a live Gemini API-powered assessment that generates a personalised, downloadable AI adoption plan from each learner\'s real workplace inputs.',
      badge: {
        text: 'Articulate Rise 360 · Articulate Storyline · Gemini API',
        bgColor: 'rgba(26, 122, 175, 0.2)',
        textColor: '#7AACCC',
        borderColor: '#7AACCC',
      },
      cta: { text: 'Click Here to View', url: 'https://360.articulate.com/review/content/2b8aa5fe-b87f-4f59-9de2-a65c5b56c5a9/review' },
    },
  },
  {
    heading: 'Learning Strategy & Consulting',
    item: {
      id: 'learning-strategy',
      title: 'Organisational Learning Needs Analysis — Financial Services',
      description: 'Led a full-cycle learning needs analysis engagement for a mid-sized financial services firm undergoing digital transformation. Conducted stakeholder interviews, focus groups, and skills gap assessments across five business units. Delivered a prioritised learning roadmap aligned to strategic business objectives, including recommendations for capability-building in data literacy, change agility, and regulatory compliance. The roadmap directly informed a 12-month L&D investment plan.',
      badge: {
        text: 'Needs Analysis · Learning Strategy · Stakeholder Consulting',
        bgColor: 'rgba(212, 168, 75, 0.2)',
        textColor: '#D4A84B',
        borderColor: '#D4A84B',
      },
      cta: { text: 'Click Here to Read', url: '#' },
    },
  },
];

function AccordionCard({ item, isOpen, onToggle }: { item: AccordionItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-ocean-border rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-6 bg-ocean-primary hover:bg-opacity-90 transition-all"
      >
        <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-left pr-4" style={{ color: '#E0EEF6' }}>
          {item.title}
        </h3>
        <ChevronDown
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform flex-shrink-0"
          style={{ color: '#E0EEF6', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {isOpen && (
        <div className="p-4 sm:p-6 bg-white border-t border-ocean-border">
          <p className="text-sm sm:text-[15px] leading-relaxed mb-6" style={{ color: '#7AACCC' }}>
            {item.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span
              className="inline-block px-3 sm:px-4 py-1.5 text-xs font-medium border rounded-full"
              style={{ backgroundColor: item.badge.bgColor, color: item.badge.textColor, borderColor: item.badge.borderColor }}
            >
              {item.badge.text}
            </span>

            <a
              href={item.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 bg-ocean-primary text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              {item.cta.text}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) => setOpenItem(openItem === id ? null : id);

  return (
    <>
      <div className="bg-ocean-bg flex flex-col justify-center min-h-[180px] md:min-h-[220px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-10">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-4 sm:mb-6">
            Work Samples
          </p>
          <p className="font-display text-[18px] md:text-[22px] leading-[1.4] mb-0 max-w-[800px] border-l-4 border-[#1A7AAF] pl-5" style={{ color: '#4A6A80', fontWeight: 'normal' }}>
            A selection of work samples spanning instructional design and AI-powered product development.
          </p>
        </div>
      </div>

      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={section.item.id}>
                <div className={`${index > 0 ? 'mt-10 sm:mt-12' : ''} mb-6 sm:mb-8`}>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-navy-dark mb-2">
                    {section.heading}
                  </h2>
                </div>
                <AccordionCard
                  item={section.item}
                  isOpen={openItem === section.item.id}
                  onToggle={() => toggle(section.item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
