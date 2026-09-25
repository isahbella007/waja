import type { CtaBannerContent, ImageContent, SectionHeading } from "../types";

export type HistoryContent = {
  seo: { title: string; description: string };
  intro: SectionHeading & { image: ImageContent };
  turningPoint: { title: string; paragraphs: string[] };
  founderQuote: { quote: string; name: string; role: string; image: ImageContent };
  approach: SectionHeading & { items: { title: string; description: string }[] };
  timeline: SectionHeading & { entries: { year: string; title: string; description: string }[] };
  cta: CtaBannerContent;
};

export const HISTORY: HistoryContent = {
  seo: {
    title: "Our History | WAJA",
    description:
      "How WAJA started with one Jeep and a roadside repair, and grew into a movement training women in Ghana for automotive careers.",
  },
  intro: {
    eyebrow: "Our history",
    title: "It started with one Jeep and a roadside repair.",
    description:
      "During a simple roadside repair, two women stepped forward, eager to learn and ready to lead. In that moment we saw it clearly: the talent was already there. What was missing was opportunity.",
    image: { alt: "Photo: the original Jeep, or the first roadside lesson" },
  },
  turningPoint: {
    title: "From “how can we help?” to “how can we open doors?”",
    paragraphs: [
      "Two women pushed us to think differently. We started building relationships with local workshop owners, community leaders, trainers and partners who believed women belong in technical trades. We looked past traditional models of charity and focused on practical, market-driven solutions.",
      "What began as a single hands-on lesson has grown into a movement that equips women with practical skills, confidence and real pathways to income.",
    ],
  },
  founderQuote: {
    quote:
      "As I stood beside that Jeep, watching two determined women eagerly learn something they had never been given access to before, I realised this wasn't just about fixing a vehicle. It was about unlocking potential.",
    name: "Ben",
    role: "Founder, WAJA",
    image: { alt: "Photo: Ben, founder" },
  },
  approach: {
    eyebrow: "How we built it",
    title: "Thinking outside the box, step by step.",
    items: [
      {
        title: "Mechanics willing to mentor",
        description: "We partnered with working mechanics who agreed to train and mentor women in their own workshops.",
      },
      {
        title: "Training for women left out of school",
        description: "We designed the programme for women who had been excluded from formal education.",
      },
      {
        title: "Literacy inside the workshop",
        description: "Reading and numeracy are embedded in hands-on learning rather than taught separately.",
      },
      {
        title: "Direct links to income",
        description: "Graduates are connected to paid work, apprenticeships and their own service businesses.",
      },
      {
        title: "Barriers removed with communities",
        description: "We worked with communities on childcare and access to tools so women could actually attend.",
      },
      {
        title: "Partnership over charity",
        description: "Workshop owners, community leaders and trainers built this with us, not for us.",
      },
    ],
  },
  timeline: {
    eyebrow: "Timeline",
    title: "Where we've been, year by year.",
    entries: [
      {
        year: "2024",
        title: "Pilot launched in a shared garage",
        description:
          "A shared garage partnership in Ghana let training start quickly, with real vehicles, real tools and real customer expectations. The pilot began with 29 women.",
      },
      {
        year: "2025",
        title: "19 women still advancing",
        description:
          "19 women remained actively committed and continued training, including 3 orphans.",
      },
      {
        year: "2026",
        title: "Training Centre launch",
        description: "WAJA’s goal is to complete pilot training and launch the warehouse-based training center.",
      },
      {
        year: "2027",
        title: "A technology-enabled training centre",
        description:
          "No new intake. WAJA will focus on fully developing the current 17 women through incubation, mentorship, personal development, and business readiness.",
      },
      { 
        year: "2028", 
        title: "Future Plans", 
        description: "WAJA plans to launch a second cohort, beginning with approximately 40 candidates and targeting a retained group of 30 participants through a more selective intake process."
      }
    ],
  },
  cta: {
    title: "The next chapter is the training centre",
    description: "17 women ready for the next phase. See where they train now and what we are building next.",
    buttons: [{ label: "See our impact", href: "/#impact" }],
  },
};
