import React from 'react'

const EducationItem = ({ degree }) => {
  return (
    <div
      className='
        px-6 
        mx-6 
        md:mx-0 
        md:px-12 
        py-6 
        bg-th-bg-30 
        rounded-lg 
        border 
        border-dashed 
        border-th-title-10 
        flex 
        flex-col 
        justify-between
        '
    >
      <h4 className="font-['Baloo_2'] text-base uppercase font-bold mb-2 text-th-title-10">
        {degree.degree}
      </h4>
      <div className='text-xl uppercase mb-1 text-th-description'>
        {degree.subject}
      </div>
      <span className="font-['Baloo_2'] text-base normal-case font-bold text-th-short-description">
        {degree.institution}
      </span>
    </div>
  )
}
export default EducationItem
