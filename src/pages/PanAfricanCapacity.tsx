import CaseStudyDetail from '../components/CaseStudyDetail';

export default function PanAfricanCapacity() {
  return (
    <CaseStudyDetail
      label="Evaluation Strategy"
      title="Building Capacity for a Continent"
      subtitle="Evaluation Strategy for a Pan-African Development Program"
      industry="Global Development"
      atAGlance={{
        clientType: "Multilateral Development Bank",
        industry: "International Development Financing",
        myRole: "Lead Instructional Designer",
        projectType: "Large-scale Multi-stakeholder Digital Learning",
        status: "Ongoing"
      }}
      clientProfile="A leading global development bank operating across Africa, running a 10-year strategic capacity building initiative aligned with the United Nations Sustainable Development Goals, serving bank officials, government public servants, ministries across member countries, and civil society organizations."
      businessNeed="The bank needed a comprehensive digital learning ecosystem to build capacity for sustainable, inclusive development across diverse learner populations spanning multiple countries, languages, political contexts, and development priorities."
      approach="As Lead Instructional Designer, I contributed across the full learning design lifecycle: designing multiple online courses, developing detailed storyboards for key modules, leading quality assurance across the entire program, and ensuring alignment between learning objectives, assessments, and real-world application.

My primary focus was designing a robust, multi-layered evaluation framework:"
      approachSections={[
        {
          heading: "Summative Assessment",
          content: "Course-end certification exams to validate knowledge acquisition, paired with reflective assignments encouraging critical thinking and contextual application."
        },
        {
          heading: "Formative Assessment",
          content: "Embedded quizzes and knowledge checks throughout each module, alongside metacognitive prompts designed to support self-reflection and deepen retention."
        },
        {
          heading: "Scenario-Based Evaluation",
          content: "Realistic, region-specific branching scenarios and case studies addressing diverse political, social, and economic challenges across African member countries, giving learners a structured space to practice complex development decision-making."
        }
      ]}
      deliverables={[
        "Multiple online courses",
        "Comprehensive storyboards",
        "Full quality assurance review across all program content",
        "Certification assessments and reflective assignments",
        "Region-specific branching scenarios and case studies"
      ]}
      impactRows={[
        { outcome: "Scale", result: "Multi-country program serving government, civil society, and institutional learners" },
        { outcome: "Alignment", result: "Learning outcomes mapped to UN Sustainable Development Goals" },
        { outcome: "Assessment depth", result: "Three-tier evaluation framework covering summative, formative, and scenario-based" },
        { outcome: "Learner engagement", result: "Contextually rich, region-specific scenarios driving application-focused learning" },
        { outcome: "Program status", result: "Ongoing with continuous improvement cycles based on learner feedback" }
      ]}
    />
  );
}
