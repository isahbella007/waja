// All programs, in pathway order. The Overview panels and each program's page
// (/programs/[slug]) both read from here. Order also decides each program's colour.

export type ProgramFact = { label: string; value: string };

export type ProgramPhase = {
  phase: string;
  // Optional: when it happens, e.g. "Months 2–10" or "Session one"
  when?: string;
  title: string;
  items: string[];
};

export type ProgramStat = { value: string; label: string };

export type ProgramContactPerson = {
  name: string;
  role: string;
  email: string;
  phone: string;
};

export type ProgramDetail = {
  seoDescription: string;
  cover: { intro: string; facts: ProgramFact[] };
  purpose: { title: string; paragraphs: string[] };
  curriculum: { title: string; modules: string[]; note: string };
  // method: optional teaching sequence shown as "A → B → C"
  approach: { title: string; method?: string[]; highlights: string[]; support: string };
  journey: { title: string; phases: ProgramPhase[] };
  eligibility: { title: string; items: string[] };
  // results: optional written outcomes, listed under the numbers
  outcomes: { title: string; stats: ProgramStat[]; results?: string[]; note?: string };
  // Optional: remove to hide the quote band
  quote?: { text: string; name: string; role: string };
  contact: { title: string; description: string; person: ProgramContactPerson };
};

export type Program = {
  slug: string;
  label: string;
  number: string;
  title: string;
  subtitle: string;
  // Short description used on the Overview panel
  summary: string;
  tag: string;
  // Full page content. Programs without it show their cover and a "coming soon" note.
  detail?: ProgramDetail;
};

export const PROGRAMS: Program[] = [
  {
    slug: "automotive-skills",
    label: "Program",
    number: "One",
    title: "Women in Automotive Skills & Certification",
    subtitle: "Flagship 16-month cohort training",
    summary:
      "Equipping underserved women and orphans with high-demand mechanical skills that lead directly to employment and entrepreneurship.",
    tag: "Technical mastery",
    detail: {
      seoDescription:
        "A 16-month, hands-on automotive training program in Ghana for women and orphans, with apprenticeships and a nationally aligned certificate. No formal literacy requirement.",
      cover: {
        intro:
          "Hands-on mechanical training that leads straight to paid work or a business of your own, built for women who have been shut out of formal training.",
        facts: [
          { label: "Length", value: "16 months, in cohorts" },
          { label: "For", value: "Women aged 18–40, orphans prioritised" },
          { label: "Literacy", value: "No formal requirement" },
          { label: "Certificate", value: "Nationally aligned, competency-based" },
        ],
      },
      purpose: {
        title: "Why it exists",
        paragraphs: [
          "Across West Africa, women, and orphans especially, face real barriers to work. Technical trades are male-dominated, literacy requirements shut women out of formal training, and financial instability passes poverty from one generation to the next.",
          "Orphans entering adulthood often have no family network, no savings and no way into the market. This program gives them a trade, a certificate and a way in.",
        ],
      },
      curriculum: {
        title: "What you'll learn",
        modules: [
          "Vehicle systems and diagnostics",
          "Brakes and suspension",
          "Engine maintenance",
          "Electrical systems",
          "Small engine repair",
          "Entrepreneurship fundamentals",
        ],
        note: "Reading and numeracy are taught inside the workshop, using visual tools, colour coding, picture-based safety guides and spoken checks.",
      },
      approach: {
        title: "How it's taught",
        method: ["Demonstration", "Guided practice", "Independent practice"],
        highlights: [
          "Literacy-friendly, hands-on instruction",
          "Apprenticeships with local workshops",
          "Taught by U.S. Master Mechanic instructors",
          "Certified on 8 of 10 core competencies",
        ],
        support:
          "Mothers of children under 16 get structured support, and their children get parallel educational help, so childcare doesn't stand in the way of finishing.",
      },
      journey: {
        title: "The 16-month journey",
        phases: [
          {
            phase: "Phase 1",
            when: "Month 1",
            title: "Orientation & safety",
            items: ["Workplace conduct", "Tool identification", "Safety protocols", "Numeracy through measurement"],
          },
          {
            phase: "Phase 2",
            when: "Months 2–10",
            title: "Core mechanical systems",
            items: [
              "Vehicle diagnostics",
              "Engine maintenance",
              "Brakes and suspension",
              "Electrical systems",
              "Small engines: motorcycles and generators",
            ],
          },
          {
            phase: "Phase 3",
            when: "Months 11–14",
            title: "Apprenticeship",
            items: ["Shadowing on the job", "Servicing real clients", "Skills observation checklists"],
          },
          {
            phase: "Phase 4",
            when: "Months 15–16",
            title: "Assessment & certification",
            items: ["Practical competency tests", "Oral verification", "Certification ceremony"],
          },
        ],
      },
      eligibility: {
        title: "Who can apply",
        items: [
          "Women aged 18–40, with orphans prioritised",
          "Demonstrated financial need",
          "Able to commit to the full 16 months",
          "Physically able to take part in workshop training",
          "Willing to follow safety rules",
          "No formal literacy requirement",
        ],
      },
      outcomes: {
        title: "What you leave with",
        stats: [
          { value: "95%", label: "Employment target" },
          { value: "99%", label: "Completion goal" },
          { value: "8/10", label: "Core competencies to certify" },
        ],
        note: "Apprenticeship partners, employer links and business support mean graduates move straight into earning.",
      },
      quote: {
        text: "[A short quote from a graduate about what the program changed for her.]",
        name: "[Graduate name]",
        role: "[Cohort year], Program One",
      },
      contact: {
        title: "Questions, or ready to apply?",
        description: "To learn more about Program One or to apply, call or email Rexford.",
        person: {
          name: "Rexford Mensah",
          role: "Program Director",
          email: "R.Mensah@gowaja.org",
          phone: "+233 24 981 8176",
        },
      },
    },
  },
  {
    slug: "microenterprise",
    label: "Program",
    number: "Two",
    title: "Women's Microenterprise & Market Linkage Accelerator",
    subtitle: "Post-training business launch program",
    summary: "Ensuring graduates move from skills to sustainable income.",
    tag: "Income & entrepreneurship",
    detail: {
      seoDescription:
        "A 9-month business launch accelerator in Ghana that helps women automotive graduates turn their skills into income: business planning, toolkits, employer links and mentorship.",
      cover: {
        intro:
          "A 9-month accelerator that turns technical skills into steady income: launching businesses, landing jobs and building a base of clients.",
        facts: [
          { label: "Length", value: "9 months" },
          { label: "For", value: "Program One graduates or equivalent skills" },
          { label: "Priority", value: "Orphans and women without a safety net" },
          { label: "Launch target", value: "90% start a business" },
        ],
      },
      purpose: {
        title: "Why it exists",
        paragraphs: [
          "Technical skills alone don't guarantee a living. Women, and orphans especially, often lack startup capital, business know-how and access to steady markets.",
          "This accelerator closes that gap. It helps graduates launch businesses, secure jobs and build client networks, so their skills become earnings.",
        ],
      },
      curriculum: {
        title: "What the program provides",
        modules: [
          "Business planning made simple for low-literacy learners",
          "Toolkit grants, equipment support or cooperative purchasing",
          "Employer placement and a referral network",
          "Market mapping and client acquisition training",
          "Mentorship and income tracking",
        ],
        note: "Orphans and women without a financial safety net get priority access to startup support.",
      },
      approach: {
        title: "Where the work comes from",
        highlights: [
          "Referrals to transport companies",
          "Partnerships with fleet operators",
          "Fleet and workshop partnerships",
          "Community mechanic referral networks",
        ],
        support: "Our goal is women-owned service hubs that go on to train the next generation.",
      },
      journey: {
        title: "Four session blocks",
        phases: [
          {
            phase: "Block 1",
            when: "Session one",
            title: "Business foundations",
            items: ["Pricing services", "Budgeting with visual tools", "Record-keeping with icons and symbols", "Customer service role play"],
          },
          {
            phase: "Block 2",
            when: "Session two",
            title: "Market readiness",
            items: ["Market mapping", "Fleet and workshop partnerships", "Employer interview preparation"],
          },
          {
            phase: "Block 3",
            when: "Session three",
            title: "Business launch",
            items: ["Toolkit handover", "Starter toolkit grants or micro-financing", "Branding basics", "Forming a cooperative, where it fits"],
          },
          {
            phase: "Block 4",
            when: "Session four",
            title: "After launch",
            items: ["Income tracking and adjustments", "Coaching check-ins every 3 months", "Problem-solving clinics"],
          },
        ],
      },
      eligibility: {
        title: "Who can apply",
        items: [
          "Graduate of Program One (preferred), or equivalent skills",
          "Committed to business mentorship sessions",
          "Interested in a job or running a business",
          "Willing to take part in follow-up data collection",
        ],
      },
      outcomes: {
        title: "What success looks like",
        stats: [
          { value: "90%", label: "Business launch rate" },
          { value: "85%", label: "Still running after one year" },
          { value: "90%+", label: "Employer satisfaction" },
        ],
        note: "Income growth is documented at 3 and 6 months after launch.",
      },
      contact: {
        title: "Questions, or ready to apply?",
        description: "To learn more about Program Two or to apply, call or email Abigail.",
        person: {
          name: "Abigail K. Mensah",
          role: "Business Development Director",
          email: "Abigail.M@gowaja.org",
          phone: "+233 54 394 3374",
        },
      },
    },
  },
  {
    slug: "life-skills-leadership",
    label: "Program",
    number: "Three",
    title: "Life Skills, Leadership & Workforce Readiness",
    subtitle: "Foundational and wraparound support program",
    summary:
      "Building confidence, numeracy, safety awareness and leadership capacity that supports long-term economic success.",
    tag: "Leadership & sustainability",
    detail: {
      seoDescription:
        "Life skills, leadership and workforce readiness for women in automotive trades in Ghana: numeracy, communication, safety and leadership, with support for their children.",
      cover: {
        intro:
          "Confidence, communication and workplace readiness: the skills that keep women thriving in male-dominated trades.",
        facts: [
          { label: "For", value: "Women in Program One or Two, or equivalent" },
          { label: "Format", value: "Peer groups and mentorship" },
          { label: "Completion target", value: "97%" },
          { label: "Family", value: "Educational support for children" },
        ],
      },
      purpose: {
        title: "Why it exists",
        paragraphs: [
          "Long-term independence takes more than technical skill. Confidence, communication and workplace readiness are often underdeveloped in women who were shut out of formal education.",
          "This program builds the confidence, numeracy, safety awareness and leadership that women need to succeed in male-dominated trades. It strengthens the woman behind the skill.",
        ],
      },
      curriculum: {
        title: "What it strengthens",
        modules: [
          "Numeracy through applied measurement",
          "Workplace communication",
          "Conflict resolution",
          "Leadership development",
          "Safety compliance",
          "Professional conduct",
        ],
        note: "Participants' children get structured educational support too, so the impact carries into the next generation.",
      },
      approach: {
        title: "How it works",
        highlights: [
          "Literacy and numeracy built into every session",
          "Workplace readiness coaching",
          "Leadership development circles",
          "Conflict resolution training",
        ],
        support: "Women learn together in peer groups, with mentorship sessions alongside.",
      },
      journey: {
        title: "Four sessions",
        phases: [
          {
            phase: "Session 1",
            title: "Foundational numeracy",
            items: ["Visual budgeting practice", "Measurement and calculation through engine work", "Reading and calibrating tools"],
          },
          {
            phase: "Session 2",
            title: "Workplace readiness",
            items: ["Client interaction simulations", "Time management", "Professional communication"],
          },
          {
            phase: "Session 3",
            title: "Leadership & confidence",
            items: ["Team-based mechanical problem-solving", "Public speaking practice", "Peer mentoring"],
          },
          {
            phase: "Session 4",
            title: "Retention & support",
            items: ["Safety reinforcement workshops", "Case management check-ins", "Family engagement sessions"],
          },
        ],
      },
      eligibility: {
        title: "Who can apply",
        items: [
          "Enrolled in Program One or Two, or proven equivalent skills",
          "Committed to taking part in a peer group",
          "Willing to join mentorship sessions",
        ],
      },
      outcomes: {
        title: "What success looks like",
        stats: [{ value: "97%", label: "Completion target" }],
        results: [
          "Measurable improvement in workplace readiness",
          "Better safety compliance",
          "More stable household finances",
          "Stronger leadership participation",
        ],
      },
      contact: {
        title: "Questions, or ready to apply?",
        description: "To learn more about Program Three or to apply, call or email Rex.",
        person: {
          name: "Rexford Mensah",
          role: "Program Director",
          email: "Rexford@gowaja.org",
          phone: "+233 24 981 8176",
        },
      },
    },
  },
];

// Words used around the program pages
export const PROGRAM_PAGE_LABELS = {
  series: "WAJA Programs",
  of: "of",
  openLabel: "Open",
  comingSoon: "Full details for this program are coming soon.",
  turnThePage: "Turn the page",
  backToStart: "Back to the start",
  backToOverview: "Back to overview",
  previousLeaflet: "Previous leaflet",
  applyLabel: "Apply to this program",
  // Printed line at the foot of each leaflet
  sheetFooter: "gowaja.org",
};
