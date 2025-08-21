// Interfaces para os dados do portfólio

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  projectLink: string
  githubLink: string
}

export interface TechCategory {
  name: string
  items: string[]
}

export interface Experience {
  id: number
  period: string
  position: string
  company: string
  description: string
  responsibilities: string[]
}

export interface ContactInfo {
  icon: string
  title: string
  value: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  class: string
}

// Tipos para navegação
export type SectionId = 'home' | 'about' | 'projects' | 'technologies' | 'experience' | 'contact'

// Props e Emits interfaces
export interface ScrollEmits {
  (e: 'scrollToSection', sectionId: string): void
}

export interface HeaderProps {
  activeSection: string
}