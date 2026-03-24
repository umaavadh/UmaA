import CaseStudyDetail from '../components/CaseStudyDetail';

export default function NutritionProgram() {
  return (
    <CaseStudyDetail
      label="Blended Learning Design"
      title="Nutrition Education at National Scale"
      subtitle="Blended Learning for a Government Child Welfare Program"
      industry="Government"
      atAGlance={{
        clientType: "Government Ministry",
        industry: "Public Health and Child Welfare",
        myRole: "Lead Training Designer (Subcontractor)",
        projectType: "Blended Learning Program",
        status: "Deployed on national government portal"
      }}
      clientProfile="A government ministry responsible for Women and Child Welfare, operating 10,000+ childcare centers serving mothers, caregivers, and young children across rural and semi-urban communities nationwide."
      businessNeed="The ministry needed to improve nutrition awareness among pregnant women, lactating mothers, toddlers, and young children, reaching mothers, childcare workers, and district supervisors simultaneously through its national learning portal."
      approach="With nearly 70% of centers in rural areas with variable connectivity and digital literacy, a portal-only solution would have failed to reach most of the intended audience. I designed a three-layer blended program:"
      approachSections={[
        {
          heading: "Layer 1 — eLearning Modules on the Government Portal",
          content: "Structured digital lessons targeting supervisors and childcare workers, covering maternal and child nutrition basics, feeding guidelines, and deficiency identification."
        },
        {
          heading: "Layer 2 — Printable Brochures and Visual Posters",
          content: "Offline learning materials covering balanced food choices, age-appropriate meals, and nutrition-related health risks, designed for permanent display inside childcare centers."
        },
        {
          heading: "Layer 3 — Government-Enabled Distribution",
          content: "District and municipal representatives instructed to download, print, and deploy materials locally, turning the existing government hierarchy into a distribution engine."
        }
      ]}
      deliverables={[
        "eLearning curriculum and lesson plans",
        "Downloadable nutrition brochures",
        "Printable posters and wall charts",
        "Localized content in multiple regional languages"
      ]}
      impactRows={[
        { outcome: "Reach", result: "Designed to support 10,000+ childcare centers nationwide" },
        { outcome: "Deployment", result: "Program live on national government learning portal" },
        { outcome: "Client recognition", result: "Received written appreciation from implementing agency for creative concept" },
        { outcome: "Accessibility", result: "Regional language versions for linguistically diverse communities" },
        { outcome: "Scalability", result: "Reusable framework for future public health awareness programs" }
      ]}
      accordionImages={[
        {
          title: "Diet Chart Brochure for Pregnant Women",
          imagePath: "/images/casestudy3_screenshot1.png"
        },
        {
          title: "Appreciation Email from Client",
          imagePath: "/images/casestudy3_screenshot2.png"
        }
      ]}
    />
  );
}
