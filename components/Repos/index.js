import React from 'react'
import Carousel from '../Carousel'
import Repo from './Repo'

const Repos = ({ repos }) => {
  return (
    <div className='py-12 px-8 mx-8 md:mx-0 md:px-16' id='portfolio'>
      <h3 className='text-base text-center text-th-short-description'>What I Did?</h3>
      <h2 className="font-['Baloo_2'] text-2xl text-center font-bold text-th-title-10 mt-2 mb-7">
        Portfolio
      </h2>
      <Carousel columns={3} data={repos} ElementType={Repo} />
      {/* <div className='md:grid md:grid-cols-3 md:gap-5 md:my-6'>
        {repos.map(repo => {
          return (
            <Repo key={repo.id} data={repo} />
          )
        })}
      </div> */}
    </div>
  )
}
export default Repos
