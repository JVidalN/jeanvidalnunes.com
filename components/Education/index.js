import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Postgraduate Degree',
    subject: 'MBA People Management and Leadership',
    institution: 'UNIJORGE - Centro Universitário Jorge Amado'
  },
  {
    degree: 'Bachelor´s Degree',
    subject: 'Information Systems',
    institution: 'UNEB - Universidade do Estado da Bahia'
  }
]

const Education = () => {
  return (
    <div>

      <h3 className="font-['Baloo_2'] text-2xl font-bold text-center mt-10 mb-5 text-th-title-10">
        My Education
      </h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 leading-none gap-1'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree} />
        ))}
      </div>
    </div>
  )
}
export default Education
