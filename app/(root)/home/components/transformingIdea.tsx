import Image from "next/image"
import Link from "next/link"
import { BsArrowUpRightCircle } from "react-icons/bs"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa6"
import { PiDribbbleLogoFill } from "react-icons/pi"

function TransformingIdea() {
  return (
    <div className="border border-black rounded-2xl">
      <div className="hidden p-12 md:grid md:gap-6 lg:gap-1 md:grid-cols-2 lg:grid lg:grid-cols-2 md:items-center lg:items-center">
        
          <Image
          src='/transformImage.png'
          height={400}
          width={400}
          alt="no"
          className="border border-black rounded-full md:mt-8"
           />

           <div className="flex flex-col md:gap-6 lg:gap-8 mt-10">
            <div className="flex gap-8">
              <Link href="/" className="border border-black rounded-full">
                <FaFacebookF className="w-10 h-10 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <FaLinkedinIn className="w-10 h-10 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <FaTwitter className="w-10 h-10 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <PiDribbbleLogoFill className="w-10 h-10 p-2" />

              </Link>

            </div>

            <div className= " md:text-xl md:font-medium lg:text-3xl lg:font-medium ">
              TRANSFORMING IDEAS INTO PRODUCTS OF FUTURE.
            </div>

            <div className="md:text-base lg:text-xl text-gray-500 ">
              We are committed to pushing boundaries, embracing innovation to build future and create new jobs. We strive to create impactful digital experiences that empower businesses to thrive in the ever-evolving online landscape.
            </div>

            <Link 
            href="/"
            className=" flex items-center gap-3 text-gray-600 uppercase font-semibold">learn more
            <BsArrowUpRightCircle className="w-4 h-4" />
            </Link>

           </div>
        

      </div>

      <div className="flex flex-col p-6 gap-6 md:hidden lg:hidden">
      <div className="flex itmes-center justify-center">
        <Image
        src="/transformImage.png"
        alt="no"
        height={200}
        width={200}
         />
      </div>

      <div className="flex gap-4 items-center justify-center">
              <Link href="/" className="border border-black rounded-full">
                <FaFacebookF className="w-8 h-8 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <FaLinkedinIn className="w-8 h-8 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <FaTwitter className="w-8 h-8 p-2" />

              </Link >
              <Link href="/" className="border border-black rounded-full">
                <PiDribbbleLogoFill className="w-8 h-8 p-2" />

              </Link>

            </div>

            <div className="flex flex-col mx-4 gap-4 mt-4">
 
            <div className= "  text-2xl font-medium ">
              TRANSFORMING IDEAS INTO PRODUCTS OF FUTURE.
            </div>

            <div className="text-base  text-gray-500 ">
              We are committed to pushing boundaries, embracing innovation to build future and create new jobs. We strive to create impactful digital experiences that empower businesses to thrive in the ever-evolving online landscape.
            </div>

            <Link 
            href="/"
            className=" flex items-center gap-3 text-gray-600 uppercase font-medium">learn more
            <BsArrowUpRightCircle className="w-4 h-4" />
            </Link>
        </div>

      


      </div>
    </div>
  )
}

export default TransformingIdea