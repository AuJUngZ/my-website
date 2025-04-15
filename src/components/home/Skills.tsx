'use client'

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BsCircleFill } from 'react-icons/bs'
import * as SiIcons from 'react-icons/si'
import { IconType } from 'react-icons'
import { SkillCategory } from '@/data/skillSet'

const getIconComponent = (
  icon?: string | React.FC<React.SVGProps<SVGSVGElement>> | React.ReactElement,
): React.ReactNode => {
  if (!icon) return <BsCircleFill />
  if (typeof icon === 'function') return React.createElement(icon)
  if (typeof icon !== 'string') return icon

  const formattedName = 'Si' + icon.charAt(0).toUpperCase() + icon.slice(1)
  const IconComponent =
    (SiIcons as Record<string, IconType>)[formattedName] || BsCircleFill
  return <IconComponent />
}

const renderSkillGroup = (category: SkillCategory) => (
  <div
    key={category.title}
    className="border border-border rounded-lg p-4 shadow-sm"
  >
    <h3 className="font-semibold text-xl text-primary border-b pb-2 border-border mb-4">
      {category.title}
    </h3>

    {category.skills && (
      <div className="flex flex-wrap gap-2 mb-4">
        {category.skills.map(skill => (
          <Badge
            key={skill.name}
            variant="outline"
            className="flex items-center gap-2 px-3 py-2 h-auto justify-start bg-muted hover:bg-accent/60 transition-colors rounded-xl shadow-sm"
          >
            <span className="text-primary text-lg">
              {getIconComponent(skill.icon)}
            </span>
            <span className="text-sm font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    )}

    {category.subcategories &&
      category.subcategories.map(sub => (
        <div key={sub.title} className="mb-4">
          <h4 className="text-md font-semibold text-muted-foreground mb-2">
            {sub.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {sub.skills?.map(skill => (
              <Badge
                key={skill.name}
                variant="outline"
                className="flex items-center gap-2 px-3 py-2 h-auto justify-start bg-muted hover:bg-accent/60 transition-colors rounded-xl shadow-sm"
              >
                <span className="text-primary text-lg">
                  {getIconComponent(skill.icon)}
                </span>
                <span className="text-sm font-medium">{skill.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      ))}
  </div>
)

const Skills = ({
  skillsData,
}: {
  skillsData: Record<string, SkillCategory>
}) => {
  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold flex items-center gap-2 text-blue-700 dark:text-blue-400">
          Skills & Libraries
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-1">
          Technologies and tools I frequently use
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.values(skillsData).map(category =>
            renderSkillGroup(category),
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default Skills
