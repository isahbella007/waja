import type { ImageContent } from "../types";

export type VolunteerRole = {
  id: string;
  title: string;
  summary: string;
  tasks: string[];
  // Where the role can be done from
  note: string;
};

export type VolunteerPageContent = {
  seo: { title: string; description: string };
  intro: { eyebrow: string; title: string; description: string; image: ImageContent };
  why: { title: string; description: string }[];
  roles: {
    eyebrow: string;
    title: string;
    detailEyebrow: string; // "What you'd actually do"
    choose: string; // button under the details
    list: VolunteerRole[];
  };
  lookingFor: { eyebrow: string; title: string; description: string; traits: string[] };
  form: {
    title: string;
    description: string;
    emailPrompt: string;
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    roles: { label: string };
    location: { label: string; placeholder: string };
    time: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
    submit: string;
    errors: { name: string; email: string; invalidEmail: string; roles: string };
    sentNote: string;
    emailSubject: string;
  };
};

export const VOLUNTEER_PAGE: VolunteerPageContent = {
  seo: {
    title: "Volunteer | WAJA",
    description:
      "Volunteer with WAJA in Ghana or remotely: program support, administration, communications, fundraising or professional expertise. You don't need to be a mechanic.",
  },
  intro: {
    eyebrow: "Volunteer with WAJA",
    title: "You don't need to be a mechanic.",
    description:
      "Your time and talent can help build opportunity, skills and hope in Ghana. Volunteers let our team focus on what matters most: delivering training, preparing participants for employment and widening our reach.",
    image: { alt: "Photo: a volunteer mentoring a trainee" },
  },
  why: [
    {
      title: "Extend our capacity",
      description: "Help our core team support training, operations and community engagement.",
    },
    {
      title: "Strengthen our mission",
      description: "Assist with fundraising, donor communications and partnership outreach.",
    },
    {
      title: "Contribute your skills",
      description: "Lend your professional expertise to improve our systems and program delivery.",
    },
  ],
  roles: {
    eyebrow: "Find the right role for you",
    title: "Pick the one that sounds like your Saturday.",
    detailEyebrow: "What you'd actually do",
    choose: "This sounds like me",
    // TODO(WAJA): only Program support came from the design; review the other four roles
    list: [
      {
        id: "program-support",
        title: "Program support",
        summary: "Help strengthen the learning environment and the experience of every participant.",
        tasks: [
          "Trainee encouragement and mentorship",
          "Workshop coordination support",
          "Classroom preparation and materials organisation",
          "Participant communication and follow-up",
        ],
        note: "Best suited to volunteers in or near Ghana.",
      },
      {
        id: "administrative-support",
        title: "Administrative support",
        summary: "Strong programs require strong operations. Support our team with organizational and administrative tasks.",
        tasks: [
          "Scheduling and coordination",
          "Data entry and records organization",
          "Document preparation and reporting",
        ],
        note: "Much of this can be done remotely.",
      },
      {
        id: "communications-outreach",
        title: "Communications and Outreach",
        summary: "Help us expand our visibility and share our story with a wider audience.",
        tasks: [
          "Website and newsletter support",
          "Social media assistance",
          "Community outreach and event promotion",
        ],
        note: "Remote or in Ghana.",
      },
      {
        id: "fundraising-donor-support",
        title: "Fundraising and Donor Support",
        summary: "Our growth depends on strong relationships with donors, sponsors, and partners. Help us build and maintain that support.",
        tasks: [
          "Donor research and sponsorship outreach",
          "Fundraising event support",
          "Stewardship communications",
        ],
        note: "Much of this can be done remotely.",
      },
      {
        id: "professional-expertise",
        title: "Professional and Technical Expertise",
        summary: "Provide high-value support by lending your professional skills in key areas.",
        tasks: [
          "Automotive technical instruction",
          "Vocational education support",
          "Nonprofit operations, legal, or finance guidance",
          "Partnership development",
        ],
        note: "Remote or in Ghana, depending on the skill.",
      },
    ],
  },
  lookingFor: {
    eyebrow: "Who we're looking for",
    title: "Does this sound like you?",
    description:
      "You do not need to be an automotive expert to make a difference. We welcome volunteers aligned with our mission and values.",
    traits: [
      "Passionate about empowering women and vulnerable youth",
      "Committed to service and community impact",
      "Organised, dependable and collaborative",
      "Willing to contribute skills, time or expertise",
    ],
  },
  form: {
    title: "Tell us what you'd like to do.",
    description: "We will come back to you with the roles that fit, whether you are in Ghana or anywhere else.",
    emailPrompt: "Prefer email?",
    name: { label: "Your name", placeholder: "Full name" },
    email: { label: "Email", placeholder: "name@example.com" },
    roles: { label: "Where you'd help" },
    location: { label: "Where you are", placeholder: "City and country" },
    time: { label: "Time you can give", placeholder: "e.g. a few hours a month" },
    message: { label: "Anything else", placeholder: "Skills, experience or questions" },
    submit: "Send my interest",
    errors: {
      name: "Please enter your name.",
      email: "Please enter your email address.",
      invalidEmail: "Please enter a valid email address.",
      roles: "Please choose at least one area.",
    },
    sentNote: "Your email app should now open with your message ready to send.",
    emailSubject: "Volunteer interest",
  },
};
