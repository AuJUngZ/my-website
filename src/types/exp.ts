export type WorkExperience = {
  title: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  description?: string
  achievements?: string[]
  companyUrl?: string
  skills?: string[]
}

export type TimelineProps = {
  experiences: WorkExperience[]
  currentPosition?: number
}
