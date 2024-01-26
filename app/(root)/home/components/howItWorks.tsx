import { HowItWorksData } from '@/data'
import React from 'react'

function HowItWorks() {
  return (
    <div className='flex flex-col gap-16 my-14 md:my-18 lg:my-20'>
    <h1 className='text-3xl font-medium text-center uppercase md:text-6xl lg:text-7xl'>How It's Works.</h1>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

    {
            HowItWorksData.map(data=>(
               <div key={data.id} className='border border-black rounded-2xl p-6'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 items-center '>
                        <p className='bg-gray-200  p-3 text-2xl border border-black rounded-xl'>{data.id}</p>
                        <p className='text-2xl font-medium'>{data.name}</p>
                    </div>
                    <p className='text-slate-600 text-xl'>{data.description}</p>

                </div>


               </div> 
            ))
        }

    </div>
    </div>
  )
}

export default HowItWorks