export type ResumeLink = {
  label: string
  href: string
}

export type ResumeJob = {
  company: string
  role: string
  period: string
  summary?: string
  points?: string[]
  stack?: string
}

export type ResumeProject = {
  title: string
  description: string
  stack: string
  links: ResumeLink[]
}

export type ResumeEducation = {
  place: string
  period: string
  details?: string
}

export type ResumeContent = {
  name: string
  title: string
  photo?: string
  location: string
  workPermit: string
  contacts: ResumeLink[]
  links: ResumeLink[]
  headings: {
    about: string
    skills: string
    projects: string
    experience: string
    otherExperience: string
    education: string
    achievements: string
    languages: string
  }
  backToSite: string
  savePdf: string
  about: string
  skills: { title: string; items: string }[]
  projects: ResumeProject[]
  experience: ResumeJob[]
  otherExperience: ResumeJob[]
  education: ResumeEducation[]
  achievements: string[]
  languages: string
}
