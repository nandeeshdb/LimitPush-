import Footer from "@/components/Footer"
import NavBar from "@/components/navbar"

interface ContactUsLayoutProps{
    children:React.ReactNode
}

function ContactUsLayout({children}:ContactUsLayoutProps) {
  return (
    <div className='m-8 md:m-10 lg:m-10'>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default ContactUsLayout