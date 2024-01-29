import { Separator } from "@/components/ui/separator"
import { Blogs } from "@/data"
import Image from "next/image"
import { MdOutlineArrowOutward } from "react-icons/md"
import JoinUs from "../../about-us/components/JoinUs"


function ArticleYouMay() {
  return (
    <div className='flex flex-col gap-16 my-14 md:my-18 lg:my-20'>
    <h1 className='text-3xl font-medium text-center uppercase md:text-6xl lg:text-7xl'>Article You May Read.</h1>
    <div className="grid gird-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        {
            Blogs.map(data=>(
                <div key={data.id} className="flex flex-col border border-black rounded-2xl">
                    <Image
                    src={data.image}
                    height={180}
                    width={100}
                    alt="no"
                    className="w-full rounded-2xl border border-b-black" 
                    />

                    <div className="flex flex-col p-6 gap-8">
                        <div className="flex items-center">
                        <p className="bg-slate-200 border border-black rounded-2xl px-4">{data.date}</p>
                        </div>
                        <p className="text-2xl font-normal uppercase">{data.name}</p>
                        <button className="flex items-center gap-2 text-slate-700 text-lg font-medium uppercase">
                            <span>Learn More</span>
                            <span className="border border-slate-600 rounded-full p-1"><MdOutlineArrowOutward className="w-3 h-3"/></span>
                        </button>
                    </div>
                </div>
            ))
        }

    </div>

    <Separator className="bg-black"/>
    <div className="mt-[-40px] mb-[-120px]">
    <JoinUs  />
    </div>
    </div>
  )
}

export default ArticleYouMay