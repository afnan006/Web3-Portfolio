export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  metrics: string[];
  image: string;
  tags: string[];
}