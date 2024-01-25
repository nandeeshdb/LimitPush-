import Link from "next/link"
import SocialMedia from "./SocialMedia"
import { Separator } from "./ui/separator"

function Footer() {
  return (
    <>
    <div className="my-10 mx-20">
        <div className="flex flex-col  sm:flex-row sm:justify-between sm:items-center  gap-6">
            <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold flex flex-col sm:flex-row">
                    <p>LIMIT</p>
                    <p>PUSH</p>
                </div>
                <div className="text-slate-700 text-xl italic flex flex-col gap-2 sm:flex-row">
                    <p>Learn. </p>
                    <p>Innovate.</p> 
                    <p>Inspire.</p>    
                    </div>   
            </div>
            <div className="flex gap-4">
                <Link href="/" className="text-lg text-slate-600">
                    Home
                </Link>
                <Link href="/AboutUs" className="text-lg text-slate-600">
                    About Us
                </Link>
                <Link href="/project" className="text-lg text-slate-600">
                    Project
                </Link>
                <Link href="/blog" className="text-lg text-slate-600">
                    Blog
                </Link>

            </div>
            <SocialMedia />
            </div>

           

        </div>
        <Separator className="bg-black "/>
        <div className="flex  flex-col items-center gap-4  my-8 sm:flex-row sm:justify-between mx-20">
        
        <p className="text-xl text-center sm:text-left ">&#169; 2023, Limit Push</p>

        <div className="flex flex-col gap-2 items-center sm:flex-row text-lg">
            <p>Privary</p>
            <p>Terms of Use</p>
        </div>

        </div>
        
    </>

    
  )
}

export default Footer