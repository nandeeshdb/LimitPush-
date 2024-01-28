import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

function WhereItStarted() {
  return (
    <div className='flex flex-col gap-16 my-14 md:my-18 lg:my-20'>
    <h1 className='text-3xl font-medium text-center uppercase md:text-3xl lg:text-6xl'>Where It Started.</h1>
    <div className=" flex flex-col border border-black rounded-2xl ">
        <div className='flex flex-wrap items-center gap-4 justify-between p-16'>
            <button className='bg-white border text-xl border-black rounded-3xl py-2 px-8'>2018</button>
            <button className='bg-white border text-xl border-black rounded-3xl py-2 px-8'>2019</button>
            <button className='bg-white border text-xl border-black rounded-3xl py-2 px-8'>2020</button>
            <button className='bg-white border text-xl border-black rounded-3xl py-2 px-8'>2021</button>
            <button className='bg-white border text-xl border-black rounded-3xl py-2 px-8'>2022</button>
            <button className='bg-white border text-xl border-black rounded-3xl py-2 px-8'>2023</button>
        </div>
        <Separator className="bg-black"/>
         <div className='grid grid-cols-1 gap-12 md:grid-cols-1 lg:grid-cols-2 p-10 md:p-12 lg:p-16'>
            <Image 
            src="/aboutus/wherewestarted.png"
            alt="no"
            height={200}
            width={260}
            className='w-full h-fit rounded-2xl'
            />

            <div className="flex flex-col items-start gap-6">
                <p className="text-2xl font-medium md:text-3xl lg:text-4xl">BE A TRUSTED PARTNER IN YOUR GROWTH JOURNEY.</p>
                <p className="text-xl font-normal text-slate-600 md:text-xl lg:text-xl">LimitPush is technically started in 2023 but we are associated with startups and businesses for more than a decade. We are regularly watching the directions of market and think this is the best time to build sustainable and profitable tech driven businesses. We are passionate about what we do and we are gearing up to go above and beyond to deliver exceptional results.</p>
                <button className="bg-black flex gap-3 text-xl items-center rounded-3xl uppercase py-1 pl-6 pr-1 text-white">
                    Learn More
                    <span className="bg-white p-2 rounded-full">
                    <MdOutlineArrowOutward className="text-black w-6 h-6"/>
                    </span>

                </button>
            </div>
         </div>
    </div>
         <Separator className="bg-black mt-16 " />
    </div>
  )
}

export default WhereItStarted