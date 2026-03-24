export default function Experience() {
  const experiences = [
    {
      title: "eLearning and Instructional Design Consultant",
      company: "Self-Employed Freelancer",
      period: "February 2011 – Present",
      location: "New Jersey, USA",
      badge: "Current Role",
      intro: "For over 14 years I partnered with organizations to design and deliver learning solutions that drive measurable behavioral and business outcomes. My client base spans life sciences, banking and financial services, insurance, information and communication technology, manufacturing, food processing, government agencies, academic institutions, and research organizations. Clients come back to me for commitment to understanding of their world before designing a solution.",
      sections: [
        {
          heading: "Consulting Approach",
          content: "Every engagement begins with listening. Before a single learning objective is written, I invest time understanding the organizational context, the performance gap, the learner population, and the business outcome the client is actually trying to move. From there I design strategically, selecting the right instructional model, the right modality, and the right level of interactivity for the situation rather than defaulting to a one-size-fits-all template."
        }
      ],
      highlights: [
        "Built a 14-year referral-driven practice entirely on repeat business, long-term client relationships, a direct reflection of consistent quality and client trust",
        "Delivered 175+ eLearning projects serving learner populations ranging from small specialist teams to organizations with 60,000+ employees",
        "Designed and developed an AI-powered escrow platform as part of an 8-month AI Generalist Fellowship, winning First Prize among 30 competing MVPs in a cohort of 200 fellows, recognized for innovative concept and real-world AI integration"
      ]
    },
    {
      title: "Production Lead, Content",
      company: "CNK Management Ltd",
      period: "June 2006 – January 2011",
      location: "Hyderabad, India",
      intro: "At CNK Management, I led the end-to-end design and development of corporate blended learning programs, working across a diverse client portfolio spanning IT, telecom, banking, insurance, financial services, manufacturing, and accredited academic institutions. This role sharpened my ability to translate raw content and business needs into structured, pedagogically sound learning experiences at scale.",
      highlights: [
        "Created 150+ learning products serving targeted audiences ranging from 500 to 60,000 learners per deployment",
        "Applied Bloom's Taxonomy and Robert Mager's performance-based learning principles to set clear, measurable learning objectives across every project",
        "Coached and mentored junior instructional designers, building team capability in storyboarding, eLearning production, and SCORM-compliant module delivery using Articulate, Captivate, Flash, and HTML and XML"
      ]
    },
    {
      title: "Content Analyst",
      company: "Apex CoVantage",
      period: "December 2005 – May 2006",
      location: "Hyderabad, India",
      intro: "In this role I provided structured content solutions for a leading US-based online B2B portal, developing a sharp eye for clarity, accuracy, and audience-appropriate communication that would later become foundational to my instructional design practice.",
      highlights: [
        "Created online business profiles and product and service descriptions for a large-scale digital content platform",
        "Published abstracts for industrial press releases covering new product launches, developing concise and precise writing skills",
        "Built early expertise in content structuring and quality standards within a fast-paced, deadline-driven environment"
      ]
    },
    {
      title: "Project Executive",
      company: "FAPSIA-AP SSI Centre",
      period: "June 2004 – December 2005",
      location: "Hyderabad, India",
      intro: "This role placed me at the intersection of government, commerce, and industry, where I managed industrial development projects and organized state-level programs for small and medium enterprises. The experience gave me a strong foundation in stakeholder communication, proposal writing, and program coordination.",
      highlights: [
        "Instrumental in securing a Tier II partnership with UNCTAD as part of a Ministry of Commerce initiative, demonstrating the ability to navigate complex multi-stakeholder environments",
        "Prepared and presented project proposals and business plans to government bodies, financial institutions, and national research centers",
        "Organized state-level industrial surveys, workshops, and entrepreneurship development programs, building skills in program design and facilitation"
      ]
    },
    {
      title: "Principal Systems Coordinator",
      company: "CEC Pvt Ltd",
      period: "August 1993 – April 2000",
      location: "Chennai, India",
      intro: "My career began in information systems, where I was responsible for maintaining data infrastructure, managing security and availability of systems, and creating user documentation. This technical foundation later proved invaluable in understanding the architecture behind eLearning platforms and LMS environments.",
      highlights: [
        "Authored user manuals for custom-developed client-server application software, an early form of performance support and documentation design",
        "Managed centralized SQL report generation across all departments, developing strong analytical and data management capabilities",
        "Maintained and updated Standard Operating Procedures and knowledge assets, building habits of precision and documentation that carry through to every project today"
      ]
    }
  ];

  return (
    <>
      <div className="bg-ocean-bg">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-6">
            Career Journey
          </p>

          <p className="text-lg text-ocean-text leading-relaxed mb-0 max-w-[800px]">
            From information systems and project management to instructional design and AI, every role has shaped the way I think about learning.
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Timeline */}
              <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0 md:w-32 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#1A7AAF] flex-shrink-0 md:mt-2"></div>
                {index < experiences.length - 1 && (
                  <div className="hidden md:block w-[2px] h-full bg-[#CCDEEa] mx-auto mt-2"></div>
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white border border-[#CCDEEa] rounded-xl p-7 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-xl text-navy-dark">
                      {exp.title}
                    </h3>
                    {exp.badge && (
                      <span className="bg-[#D8EEF6] text-[#0D5A8A] rounded-full px-3 py-1 text-[11px] font-sans font-medium">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[15px] font-medium text-ocean-primary mb-1">
                    {exp.company}
                  </p>
                  <p className="text-[13px] text-ocean-text">
                    {exp.period} • {exp.location}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-base text-ocean-text leading-relaxed">
                    {exp.intro}
                  </p>

                  {exp.sections?.map((section, sIndex) => (
                    <div key={sIndex}>
                      <h4 className="font-sans font-semibold text-[15px] text-navy-dark mb-2">
                        {section.heading}
                      </h4>
                      <p className="text-base text-ocean-text leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}

                  <ul className="space-y-3 mt-5">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3 text-[15px] text-ocean-text leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A7AAF] flex-shrink-0 mt-2"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
