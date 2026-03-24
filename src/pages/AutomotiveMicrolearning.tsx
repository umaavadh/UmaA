import CaseStudyDetail from '../components/CaseStudyDetail';

export default function AutomotiveMicrolearning() {
  return (
    <CaseStudyDetail
      label="Design and Development"
      title="Policy Awareness at Scale"
      subtitle="Microlearning for an Automotive Manufacturing Workforce"
      industry="Manufacturing"
      atAGlance={{
        clientType: "Original Equipment Manufacturer (OEM)",
        industry: "Automotive Manufacturing",
        myRole: "Instructional Designer (Freelance)",
        projectType: "Microlearning Video Series",
        status: "Completed"
      }}
      clientProfile="A leading OEM supplying components to a global automobile manufacturer, operating multiple manufacturing plants with a combined workforce of 8,000+ full-time, part-time, and contract employees."
      businessNeed="Management needed a scalable way to ensure all shopfloor employees stayed informed about company policies and compliance guidelines, across every plant and every shift, without disrupting production."
      approach="Traditional classroom or long eLearning formats were not viable in a shift-based production environment where employees had only a few minutes available at a time. I redesigned the training from the ground up around that constraint, developing a suite of 28 video-based microlearning modules of 2 to 3 minutes each, covering distinct policy issues directly relevant to shopfloor work.

Each module followed a consistent four-part structure for maximum retention in minimum time:"
      approachSections={[
        {
          heading: "1. Storytelling hook using relatable characters",
          content: "Opening with familiar scenarios that employees recognize from their daily work"
        },
        {
          heading: "2. Real-world shopfloor scenario",
          content: "Demonstrating the policy challenge in context"
        },
        {
          heading: "3. Visual policy explanation",
          content: "Clear, concise guidance on the correct procedure"
        },
        {
          heading: "4. Correct behavior demonstration",
          content: "Showing exactly what compliance looks like in practice"
        }
      ]}
      deliverables={[
        "28 microlearning video modules (2 to 3 minutes each)",
        "Instructional design strategy document",
        "Comprehensive storyboards with full narrative and visual specifications"
      ]}
      impactRows={[
        { outcome: "Employees reached", result: "8,000+ across all manufacturing locations" },
        { outcome: "Modules delivered", result: "28 modules covering distinct shopfloor policy issues" },
        { outcome: "Training time target", result: "Designed to reduce training time by 50% vs traditional sessions" },
        { outcome: "Scalability", result: "Reusable model for all future policy updates" }
      ]}
      accordionImages={[
        {
          title: "Storyboard Slide for Grievance Redressal Procedure",
          imagePath: "/images/casestudy2_screenshot1.png"
        },
        {
          title: "Video Screenshot for Grievance Redressal Procedure",
          imagePath: "/images/casestudy2_screenshot2.png"
        }
      ]}
    />
  );
}
