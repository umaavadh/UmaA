import { useState } from 'react';
import CertificateModal from '../components/CertificateModal';

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState({ src: '', title: '' });

  const openCertificate = (src: string, title: string) => {
    setSelectedCertificate({ src, title });
    setModalOpen(true);
  };

  const expertiseClusters = [
    {
      title: 'Instructional Design',
      tags: [
        'Needs Assessment',
        'Learner Analysis',
        'Storyboarding',
        'Content Curation',
        'Practice Design',
        'Learning and Performance-Based Objective setting',
        'ADDIE',
        'SAM',
        'Agile Learning Design',
        "Bloom's Taxonomy",
        "Gagne's Nine Events",
        "Merrill's Principles of Instruction",
        'Kirkpatrick Model',
        'Action Mapping',
        '70:20:10 Framework',
        'Universal Design for Learning',
        'Experiential Learning (Kolb)',
        'Constructivism',
        'Microlearning',
        'Scenario-Based Learning',
        'Spaced Repetition',
        'Gamification'
      ]
    },
    {
      title: 'eLearning Development',
      tags: [
        'Articulate Rise',
        'Articulate Storyline',
        'Adobe Captivate',
        'SCORM Compliance',
        'Job-aids',
        'content localization'
      ]
    },
    {
      title: 'Project and Program Management',
      tags: [
        'End-to-End Project Delivery',
        'Stakeholder Management',
        'SME Collaboration',
        'Quality Assurance',
        'Evaluation and Assessment Design',
        'Formative and Summative Evaluation',
        'Cross-Functional Team Coordination'
      ]
    },
    {
      title: 'AI and Emerging Tech',
      tags: [
        'AI Integration in Learning',
        'Prompt Engineering for L&D',
        'Functional Prototyping',
        'Generative AI for Content Design',
        'Automation Agents'
      ]
    }
  ];

  return (
    <>
      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-6">
            About Me
          </p>

          <p className="text-lg text-ocean-text leading-relaxed mb-16 max-w-[800px]">
            As a learning design strategist, I believe that exceptional learning reshapes thinking, behavior, and outcomes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="text-base text-ocean-text leading-relaxed space-y-6">
                <p>
                  With 18+ years of experience and dual certifications in project management (PMP) and talent development (CPTD), I've built over 300 self-paced learning solutions for clients spanning government agencies, healthcare, banking, life sciences, IT, insurance, manufacturing, academic institutions, and research organizations. My work starts long before a single slide is built, with needs analysis, learner research, and strategic design, and ends when measurable outcomes are confirmed.
                </p>

                <p>
                  A key strength in my approach is the combination of instructional design rigor, disciplined delivery, and growing fluency in AI tools. As a recent AI Generalist Fellow, I've built functional MVPs that bring intelligent design thinking into the learning space, including an award-winning project recognized for its efficient AI integration.
                </p>

                <p>
                  Based in New Jersey, I partner with organizations looking to reinvigorate corporate learning, upskill remote workforces, or rethink onboarding from the ground up. Whether you're starting from scratch or rescuing a stalled program, I bring clarity, creativity, and consistency to every engagement.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border border-[#CCDEEa] rounded-xl p-6">
                <p className="text-[13px] font-sans font-medium uppercase tracking-[1.5px] text-ocean-primary mb-6">
                  Credentials
                </p>

                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => openCertificate('/images/pmp_certificate.png', 'PMP Certificate')}
                    className="w-full bg-ocean-tag-bg text-ocean-tag-text border border-ocean-button-border rounded-full px-4 py-2 text-[13px] font-sans font-medium hover:bg-ocean-primary hover:text-white hover:border-ocean-primary transition-colors text-left"
                  >
                    Project Management Professional (PMP)
                  </button>
                  <button
                    onClick={() => openCertificate('/images/cptd__certificate.png', 'CPTD Certificate')}
                    className="w-full bg-ocean-tag-bg text-ocean-tag-text border border-ocean-button-border rounded-full px-4 py-2 text-[13px] font-sans font-medium hover:bg-ocean-primary hover:text-white hover:border-ocean-primary transition-colors text-left"
                  >
                    Certified Professional in Talent Development (CPTD)
                  </button>
                  <button
                    onClick={() => openCertificate('/images/Outskill_Certificate.png', 'AI Generalist Fellow Certificate')}
                    className="w-full bg-ocean-tag-bg text-ocean-tag-text border border-ocean-button-border rounded-full px-4 py-2 text-[13px] font-sans font-medium hover:bg-ocean-primary hover:text-white hover:border-ocean-primary transition-colors text-left"
                  >
                    AI Generalist Fellow (AIGF)
                  </button>
                </div>

                <div className="border-t border-ocean-border pt-6">
                  <p className="text-[13px] font-sans font-medium uppercase tracking-[1.5px] text-ocean-primary mb-4">
                    Education
                  </p>
                  <ul className="space-y-3 text-sm text-ocean-text">
                    <li>Master of Business Administration (MBA) in Operations</li>
                    <li>Bachelor of Science in Applied Sciences and Computer Technology</li>
                    <li>AI Generalist Fellowship (6-month certification program)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-[36px] text-navy-dark mb-10">
              Areas of Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertiseClusters.map((cluster, index) => (
                <div key={index} className="bg-white border border-[#CCDEEa] rounded-xl p-7">
                  <h3 className="font-display text-xl text-navy-dark mb-5">
                    {cluster.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cluster.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block bg-[#D8EEF6] text-[#0D5A8A] rounded-full px-3 py-1 text-[11px] font-sans font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
