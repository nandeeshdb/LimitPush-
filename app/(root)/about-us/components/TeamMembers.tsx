import { TeamMembersData } from "@/data"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { PiDribbbleLogoFill } from "react-icons/pi"


function TeamMembers() {
  return (
    <div className='flex flex-col gap-16 my-14 md:my-18 lg:my-20'>
    <h1 className='text-3xl font-medium text-center uppercase md:text-3xl lg:text-6xl'>Our Lovely Team</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
                TeamMembersData.map((data)=>(
                    <div key={data.id} className=" border border-black rounded-2xl">
                        <div className="flex flex-col gap-4 p-4 ">

                        <Image
                        src={data.image}
                        alt="no"
                        height={200}
                        width={150}
                        className=" w-full rounded-2xl"
                         />

                         <div className="flex flex-col gap-1 p-8">
                         <p className="text-3xl font-medium">{data.name}</p>
                         <p className="text-xl font-normal text-slate-600">{data.designation}</p>
                         <div className="flex gap-4 items-center mt-4">
              <Link href={data.facebook} className="border border-black rounded-full">
                <FaFacebookF className="w-9 h-9 p-2" />

              </Link >
              <Link href={data.linkedin} className="border border-black rounded-full">
                <FaLinkedinIn className="w-9 h-9 p-2" />

              </Link >
              <Link href={data.twitter} className="border border-black rounded-full">
                <FaTwitter className="w-9 h-9 p-2" />

              </Link >
              <Link href={data.dribble} className="border border-black rounded-full">
                <PiDribbbleLogoFill className="w-9 h-9 p-2" />

              </Link>

            </div>
                         </div>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TeamMembers