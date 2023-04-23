import React from 'react'
import ContactMe from './ContactMe'
import Photo from './Photo'

const Hero = () => {
  return (
    <div className='w-full leading-none flex md:flex-row flex-col lg:pt-7 md:justify-around items-center'>
      <div className='pt-16 lg:pt-16'>
        <h1 className="font-['Baloo_2'] text-4xl font-bold uppercase pl-16 text-th-text">
          Hi!
          <br />
          I´m Jean Vidal
        </h1>
        <h2 className="font-['Baloo_2'] text-4xl font-bold lg:text-4xl uppercase pl-16 text-th-text">
          Full Stack Developer
        </h2>
        <ContactMe />
      </div>
      <Photo />
    </div>
  )
}
export default Hero
