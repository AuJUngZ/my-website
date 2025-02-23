import React from 'react'
import { Card, CardContent } from '../ui/card'
import { GraduationCap, Award, Code } from 'lucide-react'

export default function Education() {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col md:flex-row justify-between gap-6">
        {/* Left Side: Education & Certifications */}
        <div className="md:w-1/2 space-y-4">
          {/* Education Section */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-primary">
              <GraduationCap className="w-5 h-5 text-indigo-500" />
              Education
            </h2>
            <p className="text-lg">
              Chiang Mai University, Chiang Mai, Thailand
            </p>
            <p className="text-primary">🎓 GPA: 3.85 (First-Class Honors)</p>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-primary">
              <Award className="w-5 h-5 text-green-500" />
              Certifications
            </h2>
            <ul className="list-disc pl-5 text-primary">
              <li>TOEIC Listening And Reading Score – 680</li>
              <li>Huawei Cloud HCCDA – Tech Essentials Certificate</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Technical Skills */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-primary">
            <Code className="w-5 h-5 text-blue-500" />
            Technical Skills
          </h2>
          <ul className="list-disc pl-5 text-primary space-y-1">
            <li>
              <span className="font-semibold">Programming Languages:</span>{' '}
              Python, Java, JavaScript, TypeScript, PHP, Golang, Haskell
            </li>
            <li>
              <span className="font-semibold">Databases:</span> MySQL,
              PostgreSQL, MongoDB, SQL
            </li>
            <li>
              <span className="font-semibold">Web Development:</span> React.js,
              Next.js, Vue.js, Tailwind CSS
            </li>
            <li>
              <span className="font-semibold">DevOps & Cloud:</span> Docker,
              Kubernetes, Jenkins, ArgoCD, Azure, Terraform
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
