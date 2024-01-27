import { Separator } from "@/components/ui/separator"
import { MdOutlineArrowOutward } from "react-icons/md"

function LetsColabrate() {
  return (

    <div className="flex flex-col gap-10 ">
        <Separator className="bg-black "/>   
    <div className='flex flex-col items-center gap-8 my-14 md:my-18 lg:my-20'>
        <p className="text-4xl text-center  text-stone-800 font-medium uppercase md:text-6xl lg:text-8xl">
            <span>Be Part of</span> <br />
            <span>Building Future</span>
        </p>

        <div className="bg-indigo-500 text-2xl flex gap-3 items-center font-normal uppercase py-1 pl-6 pr-1 border border-black rounded-3xl md:py-1 md:pl-8 md:pr-1 md:text-3xl lg:py-1 lg:pl-10 lg:pr-1 lg:text-4xl">
            <p>Lets collabrate</p>
            <p className="bg-white  rounded-full p-2">
            <MdOutlineArrowOutward />

            </p>
        </div>
    </div>
    <Separator className="bg-black "/>   

    </div>
  )
}

export default LetsColabrate