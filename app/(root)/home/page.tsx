import NavBar from '@/components/navbar'
import React from 'react'
import PartOne from './components/heading'
import TransformingIdea from './components/transformingIdea'
import FeaturedProduct from './components/FeaturedProduct'
import CurrentFocus from './components/currentFocus'
import OurTestimonial from './components/ourTestimonial'
import HowItWorks from './components/howItWorks'
import Footer from '@/components/Footer'
import ReadOurBlog from './components/ReadOurBlog'

function LandingPage() {
  return (
    <div className='m-8 md:m-10 lg:m-10'>
      <NavBar />
      <PartOne /> 
      <TransformingIdea />
      <FeaturedProduct />
      <CurrentFocus />
      <OurTestimonial />
      <HowItWorks />
      <ReadOurBlog />
      
    </div>
  )
}

export default LandingPage