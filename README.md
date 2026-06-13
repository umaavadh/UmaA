# Uma Avadhanula — Portfolio

Professional portfolio website for **Uma Avadhanula**, a Learning Design Strategist with 18+ years of experience in instructional design, eLearning development, project management, and AI integration for L&D.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Routing | React Router v7 |
| Styling | Tailwind CSS 3 |
| Icons | lucide-react |
| Build Tool | Vite |
| Forms | Netlify Forms |

---

## Project Structure

```
src/
├── App.tsx                        # Root with BrowserRouter + route definitions
├── main.tsx                       # React entry point
├── index.css                      # Global styles (smooth scroll, base font)
├── pages/
│   ├── Home.tsx                   # Hero, stats, expertise cards, certificates
│   ├── About.tsx                  # Bio, credentials, education
│   ├── Experience.tsx             # Timeline of 5 career positions
│   ├── Portfolio.tsx              # 4 work samples in accordion layout
│   ├── CaseStudies.tsx            # Grid of 4 case study cards
│   ├── Contact.tsx                # Netlify contact form + LinkedIn card
│   ├── WaterSolutions.tsx         # Case study: water network training
│   ├── AutomotiveMicrolearning.tsx# Case study: 28-module compliance videos
│   ├── NutritionProgram.tsx       # Case study: national blended learning
│   └── PanAfricanCapacity.tsx     # Case study: evaluation strategy
└── components/
    ├── Layout.tsx                 # Persistent shell: Nav + Outlet + Footer
    ├── Navigation.tsx             # Fixed top navbar, scroll hide/show, mobile menu
    ├── Footer.tsx                 # Dark footer with copyright + social links
    ├── CaseStudyDetail.tsx        # Reusable detail layout for all case studies
    ├── CertificateModal.tsx       # Full-screen image modal for certificates
    └── ImageAccordion.tsx         # Collapsible artifact image panels
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/experience` | Experience |
| `/portfolio` | Portfolio |
| `/case-studies` | Case Studies (grid) |
| `/case-studies/water-solutions` | Case Study: Water Solutions |
| `/case-studies/automotive-microlearning` | Case Study: Automotive Microlearning |
| `/case-studies/nutrition-program` | Case Study: Nutrition Program |
| `/case-studies/pan-african-capacity` | Case Study: Pan-African Capacity |
| `/contact` | Contact |

All routes share the `Layout` component (Navigation + Footer).

---

## Pages

### Home
Hero with profile photo, tagline, and key stats (18 years, 300+ projects). Certificate buttons open a modal displaying PMP, CPTD, and AI Generalist Fellow certificates. Three-column cards link to About, Case Studies, and Experience.

### About
Biographical narrative and credentials sidebar with certificate buttons and education details.

### Experience
Vertical timeline of five career positions spanning 1993 to present. Each role includes intro text, responsibility sections, and key highlights.

### Portfolio
Four accordion panels showcasing recent work:
- AI-Powered Learner Feedback Automation (Google Forms + Make.com)
- SecureServe — AI MVP (First Prize, AI Generalist Fellowship 2025)
- AI Readiness for Every Professional (Rise 360 + Gemini API)
- The Courage to Speak Up (Articulate Storyline microlearning)

### Case Studies
Four project deep-dives using the shared `CaseStudyDetail` component. Each page includes a client profile, business need, approach narrative, project artifacts accordion, deliverables, and impact table. A sticky "At a Glance" sidebar shows metadata on larger screens.

### Contact
Netlify-integrated form (name, email, message) with a success state. Includes a LinkedIn connect card.

---

## Components

**Layout** — Root shell that wraps all pages with Navigation and Footer using React Router's `<Outlet>`.

**Navigation** — Fixed navbar that hides on scroll down and reappears on scroll up. Highlights the active route. Collapses to a hamburger menu on mobile and auto-closes on navigation.

**Footer** — Dark navy bar with copyright, LinkedIn, and email links.

**CaseStudyDetail** — Accepts structured props (label, title, subtitle, approach sections, deliverables, impact rows, artifact images) and renders a consistent two-column detail layout across all four case study pages.

**CertificateModal** — Overlay modal that displays a certificate image. Closes on backdrop click or the X button. Locks body scroll while open.

**ImageAccordion** — Single-open accordion for displaying project artifact images inside case study pages.

---

## Styling

Tailwind CSS with a custom ocean-inspired palette:

| Token | Hex | Usage |
|---|---|---|
| `ocean-bg` | `#F2F7FA` | Page background |
| `navy-dark` | `#0D2B40` | Navigation, headings |
| `ocean-primary` | `#1A7AAF` | Accent, links, badges |
| `ocean-text` | `#4A6A80` | Body text |
| `ocean-muted` | `#7A9AB0` | Secondary text |
| `ocean-border` | `#CCDEEa` | Card and input borders |
| `sand-gold` | `#D4A84B` | Special accent badges |

**Fonts:** DM Serif Display (headings) + DM Sans (body). Max container width: 1200px. 8px spacing system via Tailwind.

---

## Development

```bash
npm install
npm run dev
```

```bash
npm run build      # Production build
npm run typecheck  # TypeScript check without emit
npm run lint       # ESLint
```

---

## Deployment

The project is configured for **Netlify** static deployment. The contact form uses Netlify Forms (`data-netlify="true"`), which requires the site to be deployed on Netlify for form submissions to work.

All content is hardcoded — no database or backend required.

---

## Public Assets

Certificate and case study screenshot images are stored in `public/images/` and referenced by path:

```
public/images/
├── Profile_pic.png
├── pmp_certificate.png
├── cptd__certificate.png
├── Outskill_Certificate.png
├── casestudy1_screenshot1.png  (Water Solutions)
├── casestudy1_screenshot2.png
├── casestudy1_screenshot3.png
├── casestudy2_screenshot1.png  (Automotive Microlearning)
├── casestudy2_screenshot2.png
├── casestudy3_screenshot1.png  (Nutrition Program)
└── casestudy3_screenshot2.png
```
