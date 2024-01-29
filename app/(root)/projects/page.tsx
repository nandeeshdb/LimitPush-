import { ProjectsData } from "@/data"
import Image from "next/image"
import { GoDotFill } from "react-icons/go"
import FeaturedProduct from "../home/components/FeaturedProduct"
import JoinUs from "../about-us/components/JoinUs"
import { Separator } from "@/components/ui/separator"


function ProjectPage() {
  return (
    
        
    <div className='flex flex-col gap-12 md:gap-16  py-12  md:py-24 lg:gap-24 lg:py-24'>
        <p className='text-3xl md:text-4xl lg:text-7xl font-medium text-center 8 md:px-24 px-lg:px-24'>WEB DESIGN STUDIO FOR FUTURE - THINKING.</p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-20">
        {
            ProjectsData.map(data=>(
              <div key={data.id} className="flex flex-col border border-black rounded-xl">
                <Image
                  src={data.image}
                  alt="no"
                  height={250}
                  width={200}
                  className="w-full h-full rounded-2xl border border-b-black" 
                />

                <div className="flex gap-4 items-center  py-6 px-8">
                  <p className="uppercase px-2 bg-slate-300 border border-black rounded-2xl">Design</p>
                  <p className="uppercase px-2 bg-slate-300 border border-black rounded-2xl">Development</p>
                </div>

                <div className="flex items-center pb-6 px-8 gap-3">
                <GoDotFill className="w-4 h-4" />
                <p className="text-2xl font-medium uppercase">{data.name}</p>


                </div>

              </div>
            ))
          }
        </div>
        <FeaturedProduct />
        <Separator className="bg-black" />
        <div className="my-[-60px] md:mb-[-120px] ">
        <JoinUs />
        </div>
        </div>
  )
}

export default ProjectPage