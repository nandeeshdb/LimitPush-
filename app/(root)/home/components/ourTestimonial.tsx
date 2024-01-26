import Image from 'next/image'
import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiDoubleQuotesL } from 'react-icons/ri'

function OurTestimonial() {
  return (
    <div className=' my-14 md:my-18 lg:my-20'>
      {/*Mobile view */}
      <div className='border border-black rounded-2xl md:inline-block lg:hidden'>
        <div className="flex flex-col p-8 gap-12">
          <h1 className='text-3xl font-medium text-center md:text-5xl uppercase'>Our Testimonials.</h1>
          
          <div className="flex items-center justify-center">
          <Image
          src="/men.png"
          alt="no"
          height={380}
          width={270}
          className='border border-black rounded-2xl'
           />
          </div>
          <RiDoubleQuotesL className='w-10 h-10' />
          <p className='mt-[-20px] text-xl font-normal md:text-2xl '>"Team @ LimitPush is pushing hard to build next generation and profitable businesses. Their team's problem-solving skills and attention to detail are remarkable. Waiting for their public announcements."</p>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-medium'>Lorenzo Santos</p>
            <p className='text-lg font-normal text-slate-600'>Product Manager, Flash</p>   
          </div>

          <div className="flex gap-6">
            <p className='text-6xl font-semibold text-stone-800'>250%</p>
            <p className='text-xl font-medium text-stone-800'>Increased in revenue</p>
            
          </div>

        </div>

        



      </div>

      {/*DeskTop View */}
      <div className="hidden lg:block lg:border lg:border-black lg:rounded-2xl">
      <div className="flex flex-col py-28 px-24 gap-24">
      <h1 className='text-6xl font-medium text-center  uppercase'>Our Testimonials.</h1>
      <div className='relative'>
      <img
      src="https://assets-global.website-files.com/655cd451bb4a2dfe3353fad9/655cd452bb4a2dfe3353fbf3_Union.svg"
      alt="no"
      />

      <div className="absolute mt-[-488px]">
        <div className="flex flex-col gap-8">

        <div className='flex gap-12'>
        <Image
          src="/men.png"
          alt="no"
          height={380}
          width={270}
          className='border border-black rounded-2xl'
           />

           <div className='flex flex-col gap-8 mt-10'>
           <RiDoubleQuotesL className='w-14 h-14' />
          <p className=' text-2xl font-normal  '>"Team @ LimitPush is pushing hard to build next generation and profitable businesses. Their team's problem-solving skills and attention to detail are remarkable. Waiting for their public announcements."</p>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-medium'>Lorenzo Santos</p>
            <p className='text-lg font-normal text-slate-600'>Product Manager, Flash</p>   
          </div>

           </div>

          
          

        </div>
        <div className='flex items-center justify-between px-4 '>
            <div className='flex gap-3 items-center'>
              <p className='text-6xl font-semibold text-stone-800'>250%</p>
              <p className='flex flex-col  text-xl font-medium text-stone-800'>
                  <span>Increase in</span>
                  <span>revenue</span>
              </p>


            </div>

            <div className='flex gap-4 mt-6 '>
              <button className='border border-black rounded-xl p-5'>
              <RiArrowLeftSLine className='w-8 h-8'/>
              </button>
              <button className='border border-black rounded-xl p-5'>
              <RiArrowRightSLine className='w-8 h-8'/>
              </button>
              
            </div>

           </div>
        </div>


      </div>

      </div>
      </div>


      </div>
    </div>
  )
}

export default OurTestimonial