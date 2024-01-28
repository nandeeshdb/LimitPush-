import { MdOutlineArrowOutward } from "react-icons/md"

function Review() {
  return (
    <div className='my-14 md:my-18 lg:my-20'>
        
        <div className=" grid grid-cols-1 border gap-3 border-black rounded-2xl md:grid-cols-1 lg:grid-cols-2 ">
            {/*Left div */}
            <div className="flex flex-col gap-8 p-8 lg:gap-14">
                <p className="text-2xl font-medium md:text-2xl lg:text-3xl">WE ARE A DYNAMIC AND RESULTS-DRIVEN COMPANY</p>
                <p className="text-lg font-medium text-slate-600 md:textlg lg:text-xl">Have an idea and not able to act on it? Partner with us today and let's discuss how LimitPush's team can help you achieve your goals with your minimal personal involvement. We look forward to partnering with you and creating remarkable experiences that make a lasting impact. With LimitPush, your success is our top priority. Hiring interns.</p>
                <div className="flex items-center">
                <button className="bg-black flex gap-3 text-xl items-center rounded-3xl uppercase py-1 pl-6 pr-1 text-white">
                    Contact Us
                    <span className="bg-white p-2 rounded-full">
                    <MdOutlineArrowOutward className="text-black w-6 h-6"/>
                    </span>

                </button>

                </div>
            </div>

            {/*Right div */}
            <div className="flex flex-col">
                <div className="grid grid-cols-2    ">
                    <div className=" flex flex-col items-center justify-center bg-indigo-500  text-black py-[100px] ">
                        <p className="text-4xl font-medium">5/5</p>
                        <p className="text-xl font-medium">Rated</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center bg-black  text-white py-[100px] lg:rounded-tr-2xl">
                        <p className="text-4xl font-medium ">2+</p>
                        <p className="text-xl font-medium ">Projects</p>
                    </div>
                </div>
                <div className="grid grid-cols-2  ">
                <div className=" flex flex-col items-center justify-center bg-black rounded-bl-2xl  text-white py-[100px] lg:rounded-none ">
                        <p className="text-4xl font-medium">5K</p>
                        <p className="text-xl font-medium">Total App Users</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center bg-indigo-500 rounded-br-2xl  text-black py-[100px] ">
                        <p className="text-4xl font-medium">10+</p>
                        <p className="text-xl font-medium">Team Members</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Review