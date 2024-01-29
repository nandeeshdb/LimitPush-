import Footer from "@/components/Footer"
import NavBar from "@/components/navbar"

interface ProjectLayoutProps{
    children:React.ReactNode
}
function ProjectLayout({children}:ProjectLayoutProps) {
  return (
    <div className='m-8 md:m-10 lg:m-10'>
    <NavBar />
    {children}
    <Footer />

    </div>
  )
}

export default ProjectLayout