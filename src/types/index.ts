export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  viewUrl: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}