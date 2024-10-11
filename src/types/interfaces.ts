import { LucideIcon } from "lucide-react";
// import { Any } from "next-sanity";

export interface NavLink extends SocialLink {
  title: string;
}

export interface SocialLink {
  href: string;
  icon: LucideIcon;
}

export interface Statistics {
  label: string;
  value: number;
}

// enum category {
//   FRONTEND = 'frontend',
//   BACKEND = 'backend',
//   TOOLS = 'tools'
// }

export type SkillCategory = "backend" | "frontend" | "tools";

export interface Skill {
  _id: string;
  label: string;
  value: number;
  category: SkillCategory;
}

export interface TabItem {
  value: SkillCategory;
  icon: LucideIcon;
  label: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  demoLink: string;
  githubLink: string;
  publishedAt: string;
  isResponsive: boolean;
}
