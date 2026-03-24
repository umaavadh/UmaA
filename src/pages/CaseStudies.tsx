import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const caseStudies = [
    {
      label: "Analysis and Design",
      title: "Training the Last Mile",
      subtitle: "Operator Capability Building for a Community Water Network",
      industry: "Social Enterprise",
      preview: "Designing a cost-optimized blended training program for school leavers managing 450+ remote water health centers.",
      link: "/case-studies/water-solutions"
    },
    {
      label: "Design and Development",
      title: "Policy Awareness at Scale",
      subtitle: "Microlearning for an Automotive Manufacturing Workforce",
      industry: "Manufacturing",
      preview: "28 microlearning video modules bringing compliance training to 8,000+ shopfloor employees across multiple plants.",
      link: "/case-studies/automotive-microlearning"
    },
    {
      label: "Blended Learning Design",
      title: "Nutrition Education at National Scale",
      subtitle: "Blended Learning for a Government Child Welfare Program",
      industry: "Government",
      preview: "A three-layer blended program reaching 10,000+ childcare centers across diverse regions through digital and offline channels.",
      link: "/case-studies/nutrition-program"
    },
    {
      label: "Evaluation Strategy",
      title: "Building Capacity for a Continent",
      subtitle: "Evaluation Strategy for a Pan-African Development Program",
      industry: "Global Development",
      preview: "A multi-layered evaluation framework for a Global development bank's 10-year SDG-aligned capacity building initiative.",
      link: "/case-studies/pan-african-capacity"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-6">
          Client Work
        </p>

        <p className="text-lg text-ocean-text leading-relaxed mb-16 max-w-[800px]">
          Four real-world projects spanning community development, manufacturing, public health, and global capacity building. Each one tells a different story about what thoughtful instructional design can achieve.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to={study.link}
              className="bg-white border border-[#CCDEEa] rounded-xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <span className="inline-block bg-[#F2F7FA] text-ocean-primary rounded-full px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-wide mb-4">
                {study.label}
              </span>

              <h2 className="font-display text-2xl text-navy-dark mb-2 group-hover:text-ocean-primary transition-colors">
                {study.title}
              </h2>

              <p className="text-[15px] font-medium text-ocean-primary mb-3">
                {study.subtitle}
              </p>

              <span className="inline-block bg-[#D8EEF6] text-[#0D5A8A] rounded-full px-3 py-1 text-[12px] font-sans font-medium mb-4">
                {study.industry}
              </span>

              <p className="text-[15px] text-ocean-text leading-relaxed">
                {study.preview}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
