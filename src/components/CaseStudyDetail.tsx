import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ImageAccordion from './ImageAccordion';

interface AtAGlance {
  clientType: string;
  industry: string;
  myRole: string;
  projectType: string;
  status: string;
}

interface Section {
  heading: string;
  content: string;
}

interface ImpactRow {
  outcome: string;
  result: string;
}

interface AccordionImage {
  title: string;
  imagePath: string;
}

interface CaseStudyDetailProps {
  label: string;
  title: string;
  subtitle: string;
  industry: string;
  atAGlance: AtAGlance;
  clientProfile: string;
  businessNeed: string;
  approach: string;
  approachSections?: Section[];
  deliverables: string[];
  impactRows: ImpactRow[];
  accordionImages?: AccordionImage[];
}

export default function CaseStudyDetail({
  label,
  title,
  subtitle,
  industry,
  atAGlance,
  clientProfile,
  businessNeed,
  approach,
  approachSections,
  deliverables,
  impactRows,
  accordionImages,
}: CaseStudyDetailProps) {
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[14px] text-ocean-primary hover:text-ocean-dark transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Case Studies</span>
        </Link>
      </div>

      <div className="bg-[#0D2B40] py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <span className="inline-block bg-[#1A7AAF] text-white rounded-full px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-wide mb-4">
            {label}
          </span>
          <h1 className="font-display text-[48px] lg:text-[56px] text-[#E0EEF6] mb-4">
            {title}
          </h1>
          <p className="text-lg text-[#7AACCC] mb-6 max-w-[800px]">
            {subtitle}
          </p>
          <span className="inline-block bg-[#1A7AAF] bg-opacity-20 text-[#7AACCC] border border-[#7AACCC] rounded-full px-4 py-1.5 text-[13px] font-sans font-medium">
            {industry}
          </span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[65%] space-y-10">
            <section>
              <h2 className="font-display text-2xl text-navy-dark mb-4">
                Client Profile
              </h2>
              <p className="text-base text-ocean-text leading-relaxed">
                {clientProfile}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy-dark mb-4">
                The Business Need
              </h2>
              <p className="text-base text-ocean-text leading-relaxed">
                {businessNeed}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy-dark mb-4">
                My Approach
              </h2>
              <p className="text-base text-ocean-text leading-relaxed mb-6">
                {approach}
              </p>
              {approachSections && approachSections.length > 0 && (
                <div className="space-y-6">
                  {approachSections.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-sans font-semibold text-[16px] text-navy-dark mb-3">
                        {section.heading}
                      </h3>
                      <p className="text-base text-ocean-text leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {accordionImages && accordionImages.length > 0 && (
              <section>
                <ImageAccordion items={accordionImages} />
              </section>
            )}

            <section className="lg:hidden">
              <h2 className="font-display text-2xl text-navy-dark mb-4">
                Deliverables
              </h2>
              <ul className="space-y-2">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex gap-3 text-[15px] text-ocean-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A7AAF] flex-shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy-dark mb-6">
                Impact
              </h2>
              <div className="border border-[#CCDEEa] rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {impactRows.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-[#F2F7FA]' : 'bg-white'}
                      >
                        <td className="px-6 py-4 font-sans font-semibold text-[15px] text-navy-dark w-[35%]">
                          {row.outcome}
                        </td>
                        <td className="px-6 py-4 text-[15px] text-ocean-text">
                          {row.result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="lg:w-[35%]">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white border border-[#CCDEEa] rounded-xl p-6">
                <h3 className="font-sans font-semibold text-lg text-navy-dark mb-6">
                  At a Glance
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-[13px] font-sans font-medium text-ocean-primary mb-1">
                      Client Type
                    </dt>
                    <dd className="text-[15px] text-ocean-text">
                      {atAGlance.clientType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-sans font-medium text-ocean-primary mb-1">
                      Industry
                    </dt>
                    <dd className="text-[15px] text-ocean-text">
                      {atAGlance.industry}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-sans font-medium text-ocean-primary mb-1">
                      My Role
                    </dt>
                    <dd className="text-[15px] text-ocean-text">
                      {atAGlance.myRole}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-sans font-medium text-ocean-primary mb-1">
                      Project Type
                    </dt>
                    <dd className="text-[15px] text-ocean-text">
                      {atAGlance.projectType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-sans font-medium text-ocean-primary mb-1">
                      Status
                    </dt>
                    <dd className="text-[15px] text-ocean-text">
                      {atAGlance.status}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="hidden lg:block bg-white border border-[#CCDEEa] rounded-xl p-6">
                <h3 className="font-sans font-semibold text-lg text-navy-dark mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-2">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex gap-3 text-[15px] text-ocean-text">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A7AAF] flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
