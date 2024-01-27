import Link from "next/link"

import { Separator } from "./ui/separator"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { PiDribbbleLogoFill } from "react-icons/pi"

function Footer() {
  return (
    <div className='flex flex-col gap-16 my-8 md:my-18 lg:my-10'>
        {/*Mobile view */}
        <div className=" flex flex-col gap-6 md:gap-6  lg:hidden" >
            <div className="uppercase ">
              <p className="font-extrabold  text-2xl text-slate-800">
              <span>Limit</span><br/>
              <span>push</span> 
              </p>

              <p className="font-medium text-sm text-slate-600 italic">
                <span>Learn.</span><br />
                <span>Innovate.</span><br />
                <span>Inspire.</span>
              </p>
            </div>

            <div className="flex gap-8 items-center">
              <Link
              href='/'
              className="text-slate-700 text-base hover:text-black"
               >Home</Link>
              <Link
              href='/about-us'
              className="text-slate-700 text-base hover:text-black"
               >About us</Link>
              <Link
              href='/projects'
              className="text-slate-700 text-base hover:text-black"
               >Projects</Link>
              <Link
              href='/blogs'
              className="text-slate-700 text-base hover:text-black"
               >Blogs</Link>

            </div>

            <div className="flex gap-4 items-center ">
              <Link href="/" className="border border-black rounded-full">
                <FaFacebookF className="w-9 h-9 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <FaLinkedinIn className="w-9 h-9 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <FaTwitter className="w-9 h-9 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <PiDribbbleLogoFill className="w-9 h-9 p-2" />
              </Link>

            </div>

            <Separator className="bg-black" />

            <div className="flex flex-col gap-8 items-center justify-center">
              <p className="text-slate-600">© 2023 CoderDNA Technologies Private Limited</p>
              <div className="flex items-center gap-4 text-base text-slate-600 ">
                  <Link href="/" 
                  className="hover:text-black"
                  >
                    Privarcy
                  </Link>
                  <Link href="/" 
                  className="hover:text-black">
                    Terms of use
                  </Link>
              </div>
            </div>
        </div>

        {/*desktop view */}
        <div className="hidden md:hidden lg:flex lg:flex-col lg:gap-10   ">

          <div className="flex items-center justify-between">

        <div className="uppercase ">
              <p className="font-extrabold  text-2xl text-slate-800">
              Limit Push 
              </p>

              <p className="font-medium text-lg text-slate-600 italic">
                Learn.
                Innovate.
                Inspire.
              </p>
            </div>

            <div className="flex gap-8 items-center">
              <Link
              href='/'
              className="text-slate-700 text-lg hover:text-black"
               >Home</Link>
              <Link
              href='/about-us'
              className="text-slate-700 text-lg hover:text-black"
               >About us</Link>
              <Link
              href='/projects'
              className="text-slate-700 text-lg hover:text-black"
               >Projects</Link>
              <Link
              href='/blogs'
              className="text-slate-700 text-lg hover:text-black"
               >Blogs</Link>

            </div>
            <div className="flex gap-6 items-center ">
              <Link href="/" className="border border-black rounded-full">
                <FaFacebookF className="w-9 h-9 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <FaLinkedinIn className="w-9 h-9 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <FaTwitter className="w-9 h-9 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <PiDribbbleLogoFill className="w-9 h-9 p-2" />
              </Link>

            </div>
          </div>

          <Separator className="bg-black"/>

          <div className="flex  gap-8 items-center justify-between">
              <p className="text-slate-600 text-lg">© 2023 CoderDNA Technologies Private Limited</p>
              <div className="flex items-center gap-8 text-lg text-slate-600 ">
                  <Link href="/" 
                  className="hover:text-black"
                  >
                    Privarcy
                  </Link>
                  <Link href="/" 
                  className="hover:text-black">
                    Terms of use
                  </Link>
              </div>
            </div>


        </div>
    </div>

    
  )
}

export default Footer