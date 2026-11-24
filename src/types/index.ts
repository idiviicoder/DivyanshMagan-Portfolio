export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  highlights: string[];
  tags: string[];
  category: 'Flagship' | 'Full-Stack & AI' | 'Infrastructure & Data';
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  architectureDiagram?: string;
  featured: boolean;
  metrics?: string[];
}

export interface ExperienceSubSection {
  title: string;
  subtitle?: string;
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type?: 'Full-Time' | 'Freelance' | 'Independent Venture' | 'Family Business';
  category?: 'AI & GTM Systems' | 'Growth & GTM' | 'Entrepreneurship';
  description: string;
  subSections?: ExperienceSubSection[];
  bullets: string[];
  impactBadges: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'Expert' | 'Advanced' | 'Proficient';
    featured?: boolean;
    description?: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeType: 'GPA' | 'Percentage';
  highlights?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date?: string;
  badge?: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: string;
  numericValue: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
  icon: string;
}
