import React from 'react'
import Carousel from '../Carousel'
import Post from './Post'

const Blog = ({ posts }) => {
  return (
    <div className='py-12 px-8 mx-8 md:mx-0 md:px-16' id='blog'>
      <h3 className='text-base text-center text-th-short-description'>Recent Posts?</h3>
      <h2 className='text-2xl text-center font-bold text-th-title-10 mt-2 mb-7'>Blog</h2>
      <Carousel columns={3} data={posts} ElementType={Post} />
      {/* <div className='md:grid md:grid-cols-3 md:gap-5 md:my-6'>
        {posts.map(post => {
          return (
            <Post key={post.id} data={post} />
          )
        })}
      </div> */}
    </div>
  )
}
export default Blog
