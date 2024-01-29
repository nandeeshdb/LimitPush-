import React from 'react'
import ReadOurBlog from '../home/components/ReadOurBlog'
import ArticleYouMay from './components/ArticleYouMay'

function BlogPage() {
  return (
   <div className='flex flex-col gap-10'>
   <ReadOurBlog />
   <ArticleYouMay />
   </div>
  )
}

export default BlogPage