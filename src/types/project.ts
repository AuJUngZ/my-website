import { ComponentType } from 'react'

export type LinkTypeKey = 'github' | 'youtube'

export type LinkTypeProps = {
  key: string
  icon: ComponentType<{ className?: string }> // Adjusted to match React component type
  getLabel: (name: string) => string
}

export type LinkType = Record<LinkTypeKey, LinkTypeProps>

export type Project = {
  name: string
  description: string[]
  links?: Partial<Record<LinkTypeKey, string>> // e.g., { github: "url", youtube: "url" }
  technologies: string[]
  status: 'Completed' | 'In Progress' | 'Planned'
}
