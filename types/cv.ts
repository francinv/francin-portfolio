import { CVIcon } from '@/lib';

interface ContactInfo {
  icon: CVIcon;
  text: string;
  link: string;
}

interface Experience {
  title: string;
  company: string;
  from: string;
  to?: string;
  location: string;
  description: string;
  highlights: string[];
}

interface Education {
  title: string;
  school: string;
  from: string;
  to: string;
}

interface Language {
  language: string;
  proficiency: string;
}

export interface CV {
  name: string;
  title: string;
  contact_info: ContactInfo[];
  experiences: Experience[];
  education: Education[];
  summary: string;
  skills: string[][];
  languages: Language[];
}
