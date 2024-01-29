import Footer from "@/components/Footer"
import NavBar from "@/components/navbar"

interface BlogLayoutProps{
    children:React.ReactNode
}
function BlogLayout({children}:BlogLayoutProps) {
  return (
    <div className='m-8 md:m-10 lg:m-10'>
    <NavBar />
    {children}
    <Footer />

    </div>
  )
}

export default BlogLayout