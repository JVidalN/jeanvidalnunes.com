import Link from 'next/link';
import React from 'react';

const startDateWork = 2011;
const experienceYears = (new Date().getFullYear()) - startDateWork;

const Summary = () => {
  return (
    <div className='py-12 px-8 mx-8 md:mx-0 md:px-16' id='about'>
      <h3 className='text-base text-center text-th-short-description'>Who Am I?</h3>
      <h2 className="font-['Baloo_2'] text-2xl text-center font-bold text-th-title-10 mt-2 mb-7">About me</h2>
      <p className='text-xl text-th-description'>
        Software Engineer working for at least the last {experienceYears} years on IT projects in all layers of an application (a.k.a. Full Stack Developer). During these years I acquired consolidated knowledge of the software development cycle and applying best practices.

        I am passionate about technology and I constantly seek to improve my knowledge with courses, projects and following the main names in technology.
      </p>
      <div className='pt-5'>
        <Link
          className='
              rounded-[50px]
              py-[5px]
              px-[18px]
              border
              border-th-bg-button
              bg-th-bg-button
              text-th-text
              transition-colors 
              duration-500 
              hover:bg-th-text 
              hover:text-th-bg-button
              hover:border
              hover:border-th-bg-button
            '
          href='/assets/Jean_Vidal_Resume.pdf'
          target='_blank'
        >
          Download CV
        </Link>
      </div>
    </div>
  )
}
export default Summary
