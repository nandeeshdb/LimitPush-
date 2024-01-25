import NavBar from '@/components/navbar'
import React from 'react'
import PartOne from './components/heading'
import TransformingIdea from './components/transformingIdea'
import FeaturedProduct from './components/FeaturedProduct'

function LandingPage() {
  return (
    <div className='m-8 md:m-10 lg:m-10'>
      <NavBar />
      <PartOne /> 
      <TransformingIdea />
      <FeaturedProduct />
      <CurrentFocus />
    </div>
  )
}

export default LandingPage