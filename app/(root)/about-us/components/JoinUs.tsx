import { Separator } from '@/components/ui/separator'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

function JoinUs() {
  return (
    <div className='my-14 md:my-18 lg:my-20'>
   <div className="flex flex-col items-center justify-center  gap-8 px-8 my-14 md:px-44 lg:px-64">
   <h1 className='text-3xl font-medium text-center uppercase md:text-3xl lg:text-6xl'>PARTNER WITH US IN OUR 0-1 JOURNEYS</h1>
    <p className='text-base md:text-lg lg:text-lg text-slate-600 text-center'>Watch out for our collaborative vision. Currently, we are building team of top talent. Together, we'll create experiences that leave a lasting impact.</p>
    <button className="bg-black flex gap-3 text-xl items-center rounded-3xl uppercase py-1 pl-6 pr-1 text-white">
                    Contact Us
                    <span className="bg-white p-2 rounded-full">
                    <MdOutlineArrowOutward className="text-black w-6 h-6"/>
                    </span>

                </button>
   </div>
   <Separator className="bg-black mt-20"/>
    </div>
  )
}

export default JoinUs