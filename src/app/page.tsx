import Contract from '@/components/home/Contract'
import Education from '@/components/home/Education'
import MyImage from '@/components/home/MyImage'

export default function Home() {
  return (
    <div className="container mx-auto my-5 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Left Side (40%) */}
        <div className="lg:col-span-2 flex flex-col justify-center gap-4">
          {/* Normal-sized text (Hidden on XL screens) */}
          <div className="lg:hidden text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              NATTHAPHONG
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              THEPPHITHAK
            </h1>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col gap-4">
            <MyImage />
            <Contract />
          </div>
        </div>

        {/* Right Side (60%) */}
        <div className="lg:col-span-3 flex flex-col">
          {/* Larger text (Hidden on small screens) */}
          <div className="hidden lg:block text-left mb-3">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold">
              NATTHAPHONG
            </h1>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold">
              THEPPHITHAK
            </h1>
          </div>

          {/* Education */}
          <Education />

          {/* Experience */}
          <div className="mt-6 space-y-4 text-lg lg:text-xl">
            <p>💼 Experience: 3+ years in full-stack web development</p>
          </div>
        </div>
      </div>
    </div>
  )
}
