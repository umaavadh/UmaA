import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  imagePath: string;
}

interface ImageAccordionProps {
  items: AccordionItem[];
}

export default function ImageAccordion({ items }: ImageAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-sans font-semibold text-lg text-navy-dark mb-4">
        Project Artifacts
      </h3>
      {items.map((item, index) => (
        <div key={index} className="border border-[#CCDEEa] rounded-lg overflow-hidden">
          <button
            onClick={() => togglePanel(index)}
            className="w-full flex items-center justify-between bg-[#F2F7FA] px-6 py-4 hover:bg-[#E8F1F5] transition-colors"
          >
            <span className="font-sans font-medium text-[15px] text-navy-dark">
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-ocean-primary transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="p-4">
              <img
                src={item.imagePath}
                alt={item.title}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
