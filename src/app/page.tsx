import Contract from '@/components/home/Contract'
import Education from '@/components/home/Education'
// import MyImage from '@/components/home/MyImage'
import Navbar from '@/components/Nav'
import WorkExperienceTimeline from '@/components/WorkExperienceStepper'
import { Card, CardContent } from '@/components/ui/card'
import workExperiences from '@/data/workEXP'
import PaginatedProjectList from '@/components/home/Project'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Left Side (40%) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Normal-sized text (Hidden on XL screens) */}
            <div className="lg:hidden text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-gray-900 dark:text-gray-100">
                NATTHAPHONG
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-gray-900 dark:text-gray-100">
                THEPPHITHAK
              </h1>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col gap-4">
              {/* <MyImage /> */}
              <Contract />
            </div>
            <PaginatedProjectList />
          </div>

          {/* Right Side (60%) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {/* Larger text (Hidden on small screens) */}
            <div className="hidden lg:block text-left mb-3">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase text-gray-900 dark:text-gray-100">
                NATTHAPHONG
              </h1>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase text-gray-900 dark:text-gray-100">
                THEPPHITHAK
              </h1>
            </div>

            {/* Education */}
            <Education />

            {/* Experience */}
            <Card>
              <CardContent>
                <WorkExperienceTimeline
                  experiences={workExperiences}
                  currentPosition={0}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
