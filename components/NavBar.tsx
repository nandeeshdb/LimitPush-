"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { Separator } from "@/components/ui/separator"
import Link from 'next/link';
import { AnimatePresence,motion } from 'framer-motion';

function NavBar() {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className='flex flex-col '>
    <nav className='flex items-center justify-between relative'>
        {/*Company Logo */}
        <Link href='/' className='flex flex-col items-start '>
            <p className='text-2xl font-bold uppercase'>Limit Push</p>
            <p className='italic text-xl font-semibold'>Learn.  Innovate. Inspire.</p>
        </Link>

        {/*Company Logo */}
        <Link href='/' className='hidden md:flex md:items-center lg:flex lg:items-center'>
            <Image
            src='/logo.png'
            alt="no"
            width={60}
            height={60} 
            />
 
        </Link>

        {/*Menu Icon */}

        <div className='transparent border  border-black rounded-2xl' >
         <button className=' flex px-4 py-2 items-center gap-2'
         onClick={()=>setMenuOpen(prev=>!prev)}
         >
         <CgMenuLeft className='h-6 w-6'/>
         <span className='text-base font-semibold'>Menu</span>
         </button>
        </div>
    </nav>
        {menuOpen &&

        <AnimatePresence>
    <motion.div 
    className='z-1 h-screen w-full bg-gray-100 mt-4'
    initial={{opacity:0, y:-70}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0, y:-70}}
    transition={{duration:0.5,delay:0.25}}

    >
        <div className="flex flex-col item-center gap-1 justify-center px-20 md:px-40 lg:px-60">
        <div className='flex flex-col items-center justify-center gap-1'>
        <Link href="/"
        className='py-6  hover:bg-black hover:text-white text-2xl rounded-2xl  md:text-3xl lg:text-4xl  px-10 md:px-20 lg:px-60'
        >
            Home
        </Link>
        <Separator className=" bg-black  "/>
        </div>

        <div className='flex flex-col items-center justify-center gap-1'>
        <Link href="/about-us"
        className='py-6  hover:bg-black hover:text-white text-2xl rounded-2xl  md:text-3xl lg:text-4xl px-10 md:px-20 lg:px-60'
        >
            About Us
        </Link>
        <Separator className=" bg-black  " />
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
        <Link href="/projects"
        className='py-6  hover:bg-black hover:text-white text-2xl rounded-2xl  md:text-3xl lg:text-4xl px-10 md:px-20 lg:px-60'
        >
            Projects
        </Link>
        <Separator className=" bg-black  "/>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
        <Link href="/blogs"
        className='py-6  hover:bg-black hover:text-white text-2xl rounded-2xl  md:text-3xl lg:text-4xl px-10 md:px-20 lg:px-60'
        >
            Blogs
        </Link>
        <Separator className=" bg-black  " />
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
        <Link href="/contact-us"
        className='py-6  hover:bg-black hover:text-white text-2xl rounded-2xl  md:text-3xl lg:text-4xl px-10 md:px-20 lg:px-60'
        >
            Contact Us
        </Link>
        <Separator className=" bg-black  "/>
        </div>


        </div>

    </motion.div>
    </AnimatePresence>
        }
    </div>
  )
}

export default NavBar