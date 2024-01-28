import { WhatToExpectData } from "@/data"
import { MdBolt } from "react-icons/md"

function WhatToExpect() {
  return (
    <div className='flex flex-col gap-16 my-14 md:my-18 lg:my-20'>
    <h1 className='text-3xl font-medium text-center uppercase md:text-3xl lg:text-6xl'>How It's Works.</h1>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 ">
        {
            WhatToExpectData.map(data=>(
                <div key={data.id} className="flex flex-col  border border-black px-4 py-8 gap-6 rounded-2xl">
                    <div className="flex  gap-4 items-center">
                        <div className="bg-slate-200 border border-black rounded-xl p-2">
                            <MdBolt className="w-6 h-6 md:w-6 md:h-6 lg:h-8 lg:w-8"/>
                        </div>
                        <p className="text-xl  font-medium md:text-xl lg:text-2xl">{data.name}</p>

                    </div>

                    <p className="text-lg font-normal text-slate-600 ml-4 md:text-lg lg:text-xl">{data.description}</p>
                </div>
            ))
        }

    </div>
    </div>
  )
}

export default WhatToExpect