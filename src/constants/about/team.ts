import type { CtaLink, ImageContent, SectionHeading } from "../types";

export type TeamMember = {
  // Stable key; becomes the Sanity document _id / slug later
  id: string;
  name: string;
  role: string;
  // Short text shown on the card
  summary: string;
  // Full bio shown in the pop-up. One string per paragraph; leave empty to hide "Read full bio"
  bio: string[];
  // Optional work email (@gowaja.org), shown in the bio pop-up. Never personal emails or phone numbers.
  email?: string;
  image: ImageContent;
};

export type Volunteer = {
  id: string;
  name: string;
  role: string;
  // Not shown in the current credits-style list; kept for a future layout with photos
  image: ImageContent;
};

export type TeamContent = {
  seo: { title: string; description: string };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    howWeWork: { title: string; description: string; link: CtaLink };
  };
  leadership: SectionHeading & { members: TeamMember[]; readBioLabel: string };
  volunteers: SectionHeading & { people: Volunteer[] };
  governance: SectionHeading & { principles: { title: string; description: string }[] };
  advisoryBoard: {
    badge: string;
    title: string;
    description: string;
    button: CtaLink;
    benefitsLabel: string;
    benefits: string[];
  };
  structure: { title: string; description: string; link: CtaLink };
};

export const TEAM: TeamContent = {
  seo: {
    title: "Our Team | WAJA",
    description:
      "Meet the WAJA leadership team and volunteers, and learn how we hold ourselves accountable while building automotive opportunity in West Africa.",
  },
  intro: {
    eyebrow: "Our team",
    title: "The people who open the workshop door.",
    paragraphs: [
      "WAJA is led by a team committed to strengthening workforce development, expanding economic opportunity and building modern automotive service infrastructure in West Africa.",
      "Our leadership team brings together experience in business, technical training, operations and international development.",
    ],
    howWeWork: {
      title: "How we work",
      description:
        "We operate with transparency, accountability and a focus on measurable impact. Our staff and volunteers power this mission, and we could not do much without their energy and dedication.",
      link: { label: "See our governance principles", href: "#governance" },
    },
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Who leads the work.",
    readBioLabel: "Read full bio",
    members: [
      {
        id: "ben",
        name: "Ben",
        role: "Founder",
        summary: "[Two lines on his background and what he does at WAJA.]",
        bio: ["[Full bio paragraph one.]", "[Full bio paragraph two.]"],
        image: { src: "/team/ben_founder.png", alt: "Ben, founder of WAJA, smiling", position: "center 75%" },
      },
      {
        id: "philip",
        name: "Philip Johnson",
        role: "CEO",
        email: "Phil@gowaja.org",
        summary: "A veteran and former U.S. Army officer who keeps WAJA's standards, compliance and stewardship of donor and partner support strong.",
        bio: [
          "A veteran and former U.S. Army officer, Phil draws on years of military leadership, operational discipline and mission-driven execution to turn WAJA's mission into action. His role focuses on making sure the organisation maintains strong internal standards, regulatory compliance and responsible stewardship of donor and partner support.",
          "Phil works closely with the wider leadership team to ensure WAJA operates with the discipline and accountability expected of a mission-driven organisation working at the intersection of workforce development and infrastructure.",
        ],
        image: { alt: "Photo: Philip Johnson" },
      },
      {
        id: "abigail",
        name: "Abigail Owusu",
        role: "COO",
        summary: "A Ghanaian leader in women's empowerment who leads WAJA's day-to-day operations as the garage network and training grow.",
        bio: [
          "Abigail brings years of leadership in women's empowerment, with a track record of opening doors and building opportunity for women. As a Ghanaian, she knows the communities we serve firsthand and understands both the challenges and the promise ahead.",
          "Abigail is a brilliant strategist and an eloquent voice for change. She will lead WAJA's day-to-day operations as we grow our garage network and expand vocational training that prepares women for skilled, well-paid careers. We're excited to have her guide the next chapter of our mission.",
        ],
        image: { alt: "Photo: Abigail Owusu" },
      },
      {
        id: "gerard",
        name: "Gerard Hillary Osei Boakye",
        role: "Senior Executive Director",
        email: "Gerard@gowaja.org",
        summary: "Decades of leadership across the military, the church and national service. Gerard provides WAJA's strategic oversight and governance.",
        bio: [
          "Gerard serves as our Senior Executive Director, bringing decades of distinguished leadership across the military, the church and national service. Widely respected for his integrity, wisdom and steady guidance, he has built a legacy of principled leadership grounded in discipline, faith and a deep commitment to community development.",
          "Throughout his career, Gerard has led with vision and accountability: mentoring emerging leaders, strengthening institutions and championing initiatives that create lasting impact. At WAJA he provides strategic oversight and governance, keeping the organisation mission-focused, operationally sound and positioned for sustainable growth.",
          "His leadership reflects a lifelong dedication to service, and the belief that strong institutions empower strong communities.",
        ],
        image: {src: "/team/gerard.png", alt: "Photo: Gerard Hillary Osei Boakye" },
      },
      {
        id: "homero",
        name: "Homero Vasquez",
        role: "Partnerships Director",
        email: "Homero@gowaja.org",
        summary: "Builds WAJA's relationships with investors, industry partners and philanthropic organisations that support the growth of its automotive workforce platform.",
        bio: [
          "Homero serves as our Partnerships Director, bringing extensive experience in building grassroots organisations and advancing breakthrough opportunities on a global scale. Throughout his career, he has helped turn bold ideas into impactful initiatives: connecting communities, mobilising partnerships and driving sustainable growth across diverse regions.",
          "Known for his generosity, thoughtful leadership and boundless energy, Homero approaches every endeavour with both heart and strategy. He is deeply committed to expanding access to opportunity and empowering people at the local level while thinking globally.",
          "At WAJA, his work focuses on building relationships with investors, industry partners and philanthropic organisations that support the growth of WAJA's automotive workforce platform.",
        ],
        image: {src:"/team/homero.png", alt: "Photo: Homero Vasquez" },
      },
      {
        id: "aisha",
        name: "Aisha Bernard",
        role: "Programs Director",
        email: "Aisha@gowaja.org",
        summary: "A global advocate for women's empowerment who leads WAJA's programs, expanding access to education, economic opportunity and leadership.",
        bio: [
          "Aisha serves as our Programs Director, bringing years of experience as a thoughtful leader and a fierce global advocate for women's empowerment. Throughout her career, she has championed initiatives that expand access to education, economic opportunity and leadership development for women across diverse communities.",
          "Respected for her strategic insight and unwavering commitment to equity, Aisha combines compassion with bold advocacy. She believes that when women are equipped with skills, resources and a voice, entire societies thrive. Her global perspective and principled leadership keep empowerment at the heart of WAJA's programs, both inclusive and transformative.",
        ],
        image: {src:"/team/aisha.png", alt: "Photo: Aisha Bernard" },
      },
      {
        id: "jose",
        name: "Jose de Jesus Vasquez",
        role: "Logistics Director",
        email: "JJ@gowaja.org",
        summary: "A connector and organisation builder who turns collaboration into measurable progress, leading logistics for WAJA.",
        bio: [
          "Jose serves as our Logistics Director, bringing years of experience building and strengthening organisations with vision and purpose. He has a natural ability to cultivate meaningful relationships, build strong networks and connect people across sectors, turning collaboration into measurable progress.",
          "Charismatic and mission-driven, Jose leads with authenticity and heart. As a devoted single father raising twin teenage daughters, he carries a personal commitment to giving young women opportunity, confidence and access to pathways that shape strong futures. His perspective, grounded in both professional expertise and lived experience, adds depth, compassion and strategic insight to WAJA's work.",
        ],
        image: {src:"/team/jose.png", alt: "Photo: Jose de Jesus Vasquez" },
      },
      
    ],
  },
  volunteers: {
    eyebrow: "Volunteers",
    title: "The people who give their time.",
    description:
      "As dedicated volunteers, they are an essential part of our efforts to raise funds responsibly, promote awareness and deliver lasting change through collaboration, research and workforce development.",
    people: [
      {
        id: "douglas-karboni",
        name: "Douglas Karboni",
        role: "U.S. veteran and business owner",
        image: { alt: "Photo" },
      },
      {
        id: "scholastica-dohard",
        name: "Scholastica Dohard",
        role: "Education program officer",
        image: { alt: "Photo" },
      },
    ],
  },
  governance: {
    eyebrow: "Governance",
    title: "How we hold ourselves accountable.",
    principles: [
      {
        title: "Transparency",
        description:
          "Organizations working for social impact should give clear information about their mission, programs and operations. We communicate openly with donors, partners and the communities we serve.",
      },
      {
        title: "Accountability",
        description:
          "Our leadership is responsible for allocating entrusted resources responsibly and in line with our mission, supported by internal systems for program delivery and financial management.",
      },
      {
        title: "Mission alignment",
        description:
          "Every strategic decision is measured against our mission: expanding opportunity for women and vulnerable people through technical training and entrepreneurship.",
      },
      {
        title: "Ethical stewardship",
        description:
          "We are committed to ethical fundraising and responsible stewardship of every contribution from donors and partners.",
      },
    ],
  },
  advisoryBoard: {
    badge: "In progress",
    title: "Global Automotive & Mobility Advisory Board",
    description:
      "We are establishing an advisory board of leaders from the automotive, mobility, investment and development communities. It will help WAJA grow responsibly while staying connected to global best practice.",
    button: { label: "Join the advisory board", href: "/about/contact?topic=advisory-board" },
    benefitsLabel: "The board will provide:",
    benefits: [
      "Strategic guidance",
      "Industry insight",
      "Introductions to potential partners and investors",
      "Expertise in automotive infrastructure and workforce development",
    ],
  },
  structure: {
    title: "Organizational structure",
    description:
      "WAJA is a nonprofit organization and does not issue equity or investment opportunities. Certain mobility innovation initiatives may be developed through separate for-profit entities that can pursue investment to support scalable projects.",
    link: { label: "Questions about how we are structured? Contact us", href: "/about/contact" },
  },
};
