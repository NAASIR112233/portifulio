export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'creative' | 'management';
  level: number; // percentage e.g. 95
  experience: string;
  iconName: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  badge?: string;
  color?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link: string;
  category: string;
  metrics: string;
  featured: boolean;
  accentColor: string;
  imageUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  badge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
