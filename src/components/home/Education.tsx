import React from 'react'
import { Card, CardContent } from '../ui/card'
import { GraduationCap, Award, Code } from 'lucide-react'

export default function Education() {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col md:flex-row justify-between gap-6">
        {/* Left Side: Education & Certifications */}
        <div className="md:w-1/2 space-y-6 card-content">
          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              Education
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Chiang Mai University, Chiang Mai, Thailand
            </p>
            <p className="inline-block px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
              🎓 GPA: 3.85 (First-Class Honors)
            </p>
          </div>

          {/* Certifications Section */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <Award className="w-5 h-5 text-blue-600" />
              Certifications
            </h2>
            <ul className="space-y-2">
              {[
                'TOEIC Listening And Reading Score – 680',
                'Huawei Cloud HCCDA – Tech Essentials Certificate',
              ].map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-blue-600 mt-1">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Technical Skills */}
        <div className="md:w-1/2 space-y-4 card-content">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-blue-700 dark:text-blue-400">
            <Code className="w-5 h-5 text-blue-600" />
            Technical Skills
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Programming Languages',
                content:
                  'Python, Java, JavaScript, TypeScript, PHP, Golang, Haskell',
              },
              {
                title: 'Databases',
                content: 'MySQL, PostgreSQL, MongoDB',
              },
              {
                title: 'Web Development',
                content: 'React.js, Next.js, Vue.js, Tailwind CSS',
              },
              {
                title: 'DevOps & Cloud',
                content:
                  'Docker, Kubernetes, Jenkins, ArgoCD, Azure, AWS, Terraform',
              },
            ].map((skill, index) => (
              <div key={index} className="space-y-1">
                <h3 className="font-medium text-gray-700 dark:text-gray-300">
                  {skill.title}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.content.split(', ').map((item, i) => (
                    <span key={i} className="badge-tech">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
