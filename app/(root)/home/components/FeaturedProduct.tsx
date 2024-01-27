import FeaturedCard from '@/components/FeaturedCard';
import { FeaturedProductsData } from '@/data';
import Image from 'next/image';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { MdArrowOutward } from 'react-icons/md';

function FeaturedProduct() {
  return (
    <div className='flex flex-col gap-16 my-14 md:my-18 lg:my-20'>
      <h1 className='text-3xl font-medium text-center uppercase md:text-4xl lg:text-7xl'>Featured Product</h1>
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-2  lg:gap-20'>
      {
        FeaturedProductsData.map(data=>(
          <div key={data.id} className='flex flex-col border border-black rounded-2xl '>
              <Image
              src={data.image}
              alt="no"
              height={300}
              width={400}
              className='w-full rounded-2xl border  border-b-black'
               />

               <div className='flex  gap-8 p-10 items-center justify-between md:gap-2 md:px-4 md:py-4 lg:gap-8 lg:p-10'>
                <div className="flex flex-col gap-7">

                <div className="flex gap-4 ">
                  <p className='bg-gray-100 border border-black px-4  text-gray-600 rounded-2xl '>DESIGN</p>
                  <p className='bg-gray-100 border border-black px-4  text-gray-600 rounded-2xl '>DEVELOPMENT</p>
                </div>
                
                <div className="flex gap-2 items-center">
                  <GoDotFill className='w-8 h-8' />

                  <div className='text-2xl font-medium uppercase '>{data.name}</div>
                </div>
                </div>


                <button className='hidden md:hidden lg:inline md:border md:border-black md:p-4 md:rounded-full md:bg-gray-200 lg:border lg:border-black lg:p-4 lg:rounded-full lg:bg-gray-200'>
                  <MdArrowOutward className='w-6 h-6 text-gray-800' />
                </button>



               </div>
          </div>
        ))
      }

    </div>
    </div>
  );
}

export default FeaturedProduct;
