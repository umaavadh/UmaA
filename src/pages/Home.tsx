import { useState } from 'react';
import { Link } from 'react-router-dom';
import CertificateModal from '../components/CertificateModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState({ src: '', title: '' });

  const openCertificate = (src: string, title: string) => {
    setSelectedCertificate({ src, title });
    setModalOpen(true);
  };

  return (
    <>
      <div className="bg-ocean-bg">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-20">
            <div className="flex-1 max-w-[520px] order-2 md:order-1">
              <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-6">
                Learning Design Strategist
              </p>

              <h1 className="font-display text-[42px] lg:text-[56px] text-navy-dark leading-[1.15] mb-6">
                Transforming <span className="italic text-ocean-primary">complex ideas</span><br />into captivating learning experiences.
              </h1>

              <p className="text-base text-ocean-text leading-relaxed mb-8">
                18 years. &nbsp;&nbsp;·&nbsp;&nbsp; 300+ projects. &nbsp;&nbsp;·&nbsp;&nbsp; Clients worldwide.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => openCertificate('/images/pmp_certificate.png', 'PMP Certificate')}
                  className="bg-ocean-tag-bg text-ocean-tag-text border border-ocean-button-border rounded-full px-4 py-1.5 text-[13px] font-sans font-medium hover:bg-ocean-primary hover:text-white hover:border-ocean-primary transition-colors"
                >
                  PMP
                </button>
                <button
                  onClick={() => openCertificate('/images/cptd__certificate.png', 'CPTD Certificate')}
                  className="bg-ocean-tag-bg text-ocean-tag-text border border-ocean-button-border rounded-full px-4 py-1.5 text-[13px] font-sans font-medium hover:bg-ocean-primary hover:text-white hover:border-ocean-primary transition-colors"
                >
                  CPTD
                </button>
                <button
                  onClick={() => openCertificate('/images/Outskill_Certificate.png', 'AI Generalist Fellow Certificate')}
                  className="bg-ocean-tag-bg text-ocean-tag-text border border-ocean-button-border rounded-full px-4 py-1.5 text-[13px] font-sans font-medium hover:bg-ocean-primary hover:text-white hover:border-ocean-primary transition-colors"
                >
                  AI Generalist Fellow
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end order-1 md:order-2">
              <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[340px] lg:h-[340px] rounded-full bg-navy-dark flex items-center justify-center flex-shrink-0">
                <p className="text-sm font-sans font-medium text-white opacity-60">
                  Photo ID
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-ocean-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div>
            <p className="text-[10px] font-sans font-medium uppercase tracking-[1.5px] text-ocean-primary mb-3">
              Expertise
            </p>
            <h3 className="font-display text-lg text-navy-dark mb-3">
              Instructional Design
            </h3>
            <p className="text-sm text-ocean-text mb-4 leading-relaxed">
              Crafting learning journeys from discovery to mastery.
            </p>
            <span className="inline-block bg-ocean-tag-bg text-ocean-tag-text rounded-full px-3 py-1.5 text-[11px] font-sans font-medium">
              eLearning  Facilitation
            </span>
          </div>

          <div>
            <p className="text-[10px] font-sans font-medium uppercase tracking-[1.5px] text-ocean-primary mb-3">
              Portfolio
            </p>
            <h3 className="font-display text-lg text-navy-dark mb-3">
              Case Studies
            </h3>
            <p className="text-sm text-ocean-text mb-4 leading-relaxed">
              Real problems, real solutions, measurable outcomes.
            </p>
            <span className="inline-block bg-ocean-tag-bg text-ocean-tag-text rounded-full px-3 py-1.5 text-[11px] font-sans font-medium">
              4 featured projects
            </span>
          </div>

          <div>
            <p className="text-[10px] font-sans font-medium uppercase tracking-[1.5px] text-ocean-primary mb-3">
              Experience
            </p>
            <h3 className="font-display text-lg text-navy-dark mb-3">
              18+ Years
            </h3>
            <p className="text-sm text-ocean-text mb-4 leading-relaxed">
              Across healthcare, education, and biopharma sectors.
            </p>
            <span className="inline-block bg-ocean-tag-bg text-ocean-tag-text rounded-full px-3 py-1.5 text-[11px] font-sans font-medium">
              Senior Specialist
            </span>
          </div>
        </div>
      </div>

      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedCertificate.src}
        title={selectedCertificate.title}
      />
    </>
  );
}
