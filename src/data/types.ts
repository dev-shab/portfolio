export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  links: {
    github: string;
    linkedin: string;
  };
  summary: string;
  yearsExperience: number;
}

export interface ExperienceEntry {
  slug: string;
  hash: string;
  company: string;
  client?: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Highlight {
  text: string;
}
