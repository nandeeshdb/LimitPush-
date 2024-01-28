import Footer from "@/components/Footer"
import NavBar from "@/components/navbar"

interface AboutLayoutProps{
    children:React.ReactNode
}
function AboutUsLayout({children}:AboutLayoutProps) {
  return (
    <div className='m-8 md:m-10 lg:m-10'>
    <NavBar />
    {children}
    <Footer />
    </div>
  )
}

export default AboutUsLayout