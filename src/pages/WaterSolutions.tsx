import CaseStudyDetail from '../components/CaseStudyDetail';

export default function WaterSolutions() {
  return (
    <CaseStudyDetail
      label="Analysis and Design"
      title="Training the Last Mile"
      subtitle="Operator Capability Building for a Community Water Network"
      industry="Social Enterprise"
      atAGlance={{
        clientType: "Social Enterprise",
        industry: "Community Water and Sanitation",
        myRole: "Lead Instructional Designer",
        projectType: "Blended Learning Design",
        status: "Completed"
      }}
      clientProfile="A social enterprise operating 450+ community water health centers across remote and underserved regions, delivering safe drinking water at affordable prices to populations with limited access to municipal infrastructure."
      businessNeed="The client needed to hire local school leavers and train them to independently manage all center operations, follow safety protocols, and handle basic troubleshooting, with a cost-effective, scalable solution that worked in low-connectivity, dispersed locations."
      approach="As Lead Instructional Designer, I conducted field visits to observe operations firsthand and assess operator skill levels in context. I applied the Rummler and Brache Performance Analysis Model to examine gaps at the organizational, process, and individual levels, then developed terminal and enabling objectives mapped to each operational function.

The solution was a cost-optimized blended program built around four interventions:"
      approachSections={[
        {
          heading: "1. Day 1 Headquarters Onboarding",
          content: "Leadership introduction, paperwork, and job briefing before field deployment"
        },
        {
          heading: "2. Multilingual Job Aids",
          content: "Task-specific reference cards in local languages, designed for low-literacy contexts and placed at point of need"
        },
        {
          heading: "3. WhatsApp Community of Practice",
          content: "Peer learning and real-time support across all 450+ centers"
        },
        {
          heading: "4. Standard Templates",
          content: "Ready-to-use communication and reporting tools to ensure operational consistency"
        }
      ]}
      deliverables={[
        "Performance analysis report",
        "Blended learning program design",
        "Multilingual job aids",
        "WhatsApp CoP framework",
        "Standard operating templates"
      ]}
      impactRows={[
        { outcome: "Reach", result: "450+ water health centers nationwide" },
        { outcome: "Approach", result: "Field-informed, performance-based blended design" },
        { outcome: "Cost efficiency", result: "Scalable program with no classroom infrastructure required" },
        { outcome: "Accessibility", result: "Multilingual materials for low-literacy, low-connectivity contexts" }
      ]}
      accordionImages={[
        {
          title: "Analysis Report Page 1",
          imagePath: "/images/casestudy1_screenshot1.png"
        },
        {
          title: "Terminal and Enabling Objectives Part 1",
          imagePath: "/images/casestudy1_screenshot2.png"
        },
        {
          title: "Terminal and Enabling Objectives Part 2",
          imagePath: "/images/casestudy1_screenshot3.png"
        }
      ]}
    />
  );
}
