import React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle, Circle, Dot, Building2, Link, MapPin } from 'lucide-react'

interface WorkExperience {
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

interface TimelineProps {
  experiences: WorkExperience[]
  currentPosition?: number
}

export default function WorkExperienceTimeline({
  experiences,
  currentPosition = 0,
}: TimelineProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex flex-col gap-8">
        {experiences.map((experience, index) => {
          const isCurrentPosition = index === currentPosition
          const isFuturePosition = index < currentPosition

          return (
            <div
              key={index}
              className="relative flex flex-col gap-2 pl-8 border-l-2 border-blue-200 dark:border-gray-700"
            >
              {/* Timeline indicator */}
              <div
                className={cn(
                  'absolute -left-[11px] top-[18px] bg-white dark:bg-gray-900 flex items-center justify-center',
                  isCurrentPosition && 'w-5 h-5 -left-[13px]',
                )}
              >
                {isCurrentPosition ? (
                  <Dot className="w-6 h-6 text-blue-600" />
                ) : isFuturePosition ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Circle className="w-5 h-5 text-blue-400" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col card-content">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        'font-semibold text-lg mb-1',
                        isCurrentPosition
                          ? 'text-blue-700'
                          : 'text-gray-800 dark:text-gray-100',
                      )}
                    >
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          className="hover:text-blue-600 flex items-center gap-1 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience.company}
                          <Link className="w-3 h-3" />
                        </a>
                      ) : (
                        <span>{experience.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {experience.startDate} - {experience.endDate || 'Present'}
                  </div>
                </div>

                {/* Location */}
                {experience.location && (
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    {experience.location}
                  </div>
                )}

                {/* Description */}
                {experience.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                )}

                {/* Achievements */}
                {experience.achievements &&
                  experience.achievements.length > 0 && (
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-relaxed"
                        >
                          <span className="text-blue-600 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                {/* Skills */}
                {experience.skills && experience.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
