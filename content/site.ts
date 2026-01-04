export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Book {
  title: string;
  description: string;
  purchaseLink?: string;
  goodreadsLink?: string;
  videoLink?: string;
  coverImage: string;
}

export interface Resource {
  title: string;
  url: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  cvUrl: string;
  social: {
    linkedin: string;
    googleScholar: string;
    instagram: string;
    github?: string;
    twitter?: string;
  };
  books: Book[];
  resources: Resource[];
  positions: string[];
}

export const siteConfig: SiteConfig = {
  name: "Mahmoud Elsayed",
  title: "Mahmoud Elsayed — Neuroscientist, Writer, Researcher",
  description: "Neuroscientist and writer working on decision-making, cognition, and the intersection of science and philosophy.",
  url: "https://mahmoudelsayed.com",
  email: "elsaym18@mcmaster.ca",
  cvUrl: "/Resume.docx",
  social: {
    linkedin: "https://www.linkedin.com/in/elsayedmahmoud/",
    googleScholar: "https://scholar.google.com/citations?user=ZH390LgAAAAJ&hl=en&inst=5276095121047773438",
    instagram: "https://www.instagram.com/elsayedmmahmoud/",
  },
  books: [
    {
      title: "The Bitter Truth of Reality",
      description: "An exploration of reality, meaning, and human understanding. This book examines the complex relationship between perception, truth, and the human experience.",
      purchaseLink: "https://books2read.com/BitterTruthofReality?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnEixmucy8cJBvBflmJZ8F6y8ypDQO3uvpd93drjMBxjALJP5luQIKMbEMQO4_aem_1RadYNL60S51SwWxi29LaQ",
      goodreadsLink: "https://www.goodreads.com/book/show/58297076-the-bitter-truth-of-reality",
      videoLink: "https://www.instagram.com/tv/CP6zVXxl1Aw6u7wMoCyT2kJMat7J-wuzdl_qlQ0/?igsh=MW9ubGRwMXdveWhuNA==",
      coverImage: "/images/BTR.jpg",
    },
    {
      title: "The Trip of Certainty",
      description: "A philosophical exploration of certainty and knowledge.",
      purchaseLink: "https://web.mrrha.app/app/products/detail/122504",
      goodreadsLink: "https://www.goodreads.com/book/show/33013612",
      coverImage: "/images/certainityTrip.jpeg",
    },
  ],
  resources: [
    {
      title: "CIVI — Educational Initiative",
      url: "/CIVI.pdf",
      description: "Core document outlining the CIVI educational initiative.",
    },
    {
      title: "A World at Risk: CIVI's Initiative",
      url: "/AWorldAtRiskCivi.pdf",
      description: "Comprehensive overview of CIVI's mission and approach.",
    },
  ],
  positions: [
    "Research Associate | Peter Boris Centre for Addictions Research | St. Joseph's Healthcare Hamilton",
    "Neuroscience PhD Candidate | Department of Psychiatry and Behavioural Neurosciences | McMaster University",
    "MBI Student | Marnix Heersink Institute for Biomedical Innovation | McMaster University",
    "Consulting Machine Learning Engineer | Mediaology Solutions",
  ],
};
