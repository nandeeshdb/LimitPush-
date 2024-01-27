import NavBar from '@/components/navbar'
import React from 'react'
import PartOne from './components/heading'
import TransformingIdea from './components/transformingIdea'
import FeaturedProduct from './components/FeaturedProduct'
import CurrentFocus from './components/currentFocus'
import OurTestimonial from './components/ourTestimonial'
import HowItWorks from './components/howItWorks'
import ReadOurBlog from './components/ReadOurBlog'
import LetsColabrate from './components/LetsColabrate'
import Footer from '../../../components/Footer'

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
      <LetsColabrate />
      <Footer /> 
    </div>
  )
}

export default LandingPage