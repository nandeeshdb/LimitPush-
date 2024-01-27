"use client"
import { OurCurrentFocusData } from '@/data';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { PiDiamondsFourFill } from 'react-icons/pi';

interface CurrentFocusData {
  id: number; 
  name: string;
  description: string;
}

function CurrentFocus() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    setOpenItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <div className='flex flex-col gap-16 my-14 md:my-18 lg:my-20'>
      <h1 className='text-3xl font-medium text-center uppercase md:text-6xl lg:text-7xl'>Our Current Focus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border border-black rounded-2xl">
        <Image
          src="/mouse.png"
          alt='no'
          width={400}
          height={500}
          className='w-full h-full rounded-2xl border border-b-black md:border-r-black lg:border-r-black'
        />
        <div className="flex flex-col">
          {OurCurrentFocusData.map((data: CurrentFocusData) => (
            <div key={data.id} className={`relative flex flex-col border border-b-black rounded-2xl ${openItemId === data.id ? 'bg-indigo-500': ''}`}>
              <div
                className='flex gap-4 p-12 items-center cursor-pointer'
                onClick={() => handleItemClick(data.id)}
              >
                <div className='bg-gray-200 p-4 border border-black rounded-2xl'>
                  <PiDiamondsFourFill className='w-8 h-8' />
                </div>
                <p className='text-2xl font-medium'>{data.name}</p>
              </div>
              {openItemId === data.id && (
                <div className='flex flex-col gap-4 px-12 pb-6 bg-indigo-500 rounded-2xl'>
                  <p className='text-xl font-medium'>{data.description}</p>
                  <button className='flex gap-3 text-xl font-medium items-center'>
                    <span>LEARN MORE</span>
                    <span className='border rounded-full p-1 border-black'>
                    <MdArrowOutward />
                    </span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentFocus;
