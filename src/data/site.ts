// Single place for contact details and site-wide copy.
export const site = {
  name: process.env.SITE_NAME ?? "FalconAI Academy",
  // WhatsApp number in international format, digits only (assumes India, +91).
  whatsapp: "918177988081",
  whatsappDisplay: "+91 81779 88081",
  whatsappText: "Hi, I'd like to know more about your courses.",
  addresses: [
    {
      label: "Pune, India",
      lines: ["VTP Velair, Mahalunge", "Pune, India 411045"],
    },
    {
      label: "Toronto, Canada",
      lines: ["150 Dundas St East", "Toronto, Canada M5B 0A9"],
    },
  ],
};

export const whatsappLink = (text = site.whatsappText) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const features = [
  {
    title: "Hands-on projects",
    body: "Every course is built around projects you can show to employers, not just lectures.",
  },
  {
    title: "Mentor support",
    body: "Get your questions answered by people who build and ship AI systems.",
  },
  {
    title: "Career guidance",
    body: "Resume and portfolio feedback to help you present your work well.",
  },
  {
    title: "Learning community",
    body: "Learn alongside peers, share progress and get unstuck faster.",
  },
];

export const steps = [
  { title: "Pick a course", body: "Browse the catalog and choose the program that fits your goals." },
  { title: "Register", body: "Fill in the short form. It takes about a minute and there is no payment at this stage." },
  { title: "We contact you", body: "Our team reaches out by email or WhatsApp with the next steps and batch details." },
];

export const faqs = [
  {
    q: "Do I need to pay to register?",
    a: "No. Registering your interest is free and does not commit you to anything.",
  },
  {
    q: "Do I need coding experience?",
    a: "It depends on the course. Each course page lists its prerequisites. The AI Product Management course needs no coding.",
  },
  {
    q: "How are the classes delivered?",
    a: "Courses are taught online. Batch timings and format are shared when we contact you.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes, you receive a completion certificate from us after finishing the course requirements.",
  },
  {
    q: "How can I reach you quickly?",
    a: "Message us on WhatsApp. The button is at the bottom right of every page.",
  },
];
