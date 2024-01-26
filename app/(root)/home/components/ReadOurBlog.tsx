import { ReadOurBlogData } from "@/data"
import Image from "next/image"
import { MdOutlineArrowOutward } from "react-icons/md"

type BlogData = {
    id: number
    date: String
    name: String
    image: String
    
  };


function ReadOurBlog() {
    
  return (
    <div className='flex flex-col gap-16 my-14 md:my-18 lg:my-20'>
    <h1 className='text-3xl font-medium text-center uppercase md:text-6xl lg:text-7xl'>How It's Works.</h1>

    {/*Mobile view */}
    <div className="flex flex-col gap-8 md:inline-block  lg:hidden">
        {
            ReadOurBlogData.map(data=>(
                <div className="border border-black rounded-2xl md:mt-8" key={data.id}>
                    <div className="flex flex-col gap-8 p-10">
                        <div className="flex items-center ">
                            <p className="bg-gray-200 border uppercase border-black rounded-2xl py-1 px-4 text-xs ">{data.date}</p>
                        </div>
                        <p className="text-2xl font-medium uppercase">{data.name}</p>

                        <button className="flex items-center gap-2 text-slate-700 text-lg font-medium uppercase">
                            <span>Learn More</span>
                            <span className="border border-slate-600 rounded-full p-1"><MdOutlineArrowOutward className="w-3 h-3"/></span>
                        </button>



                    </div>
                        <img
                        src={data.image}
                        alt="no" 
                        className="w-full h-48 border border-t-black rounded-2xl md:h-64"
                        />

                </div>
            ))
        }

    </div>

    {/*Desktop view */}
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
        {
            ReadOurBlogData.map(data=>(
                <div className="border border-black rounded-2xl" key={data[0].id}>
                    <div className="flex flex-col py-6 px-10 ">
                        <div className="flex items-center">
                            <p>{data[0].date}</p>

                        </div>

                    </div>

                </div>
            ))
        }

    </div>
    </div>
  )
}

export default ReadOurBlog