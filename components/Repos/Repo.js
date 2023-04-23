import Link from 'next/link'
import React from 'react'

const Repo = ({ data }) => {
  return (
    <Link
      className='
        my-3 
        md:my-0
        rounded-[20px] 
        bg-th-bg-30
        px-4
        shadow-lg 
        flex 
        flex-col
        h-[250px]
        transition-transform 
        duration-500 
        transform 
        hover:-translate-y-2
      '
      href={data.url}
      target='_blank'
    >
      <div className='py-3 h-full flex flex-col justify-between'>
        <h3 className="font-['Baloo_2'] text-base h-fit font-bold uppercase text-center text-th-title-10">
          {data.name}
        </h3>
        <div className='text-sm sm:line-clamp-1 md:line-clamp-6 text-justify text-th-description'>
          <span>{data.description}</span>
        </div>
        <div className="font-['Baloo_2'] text-xs text-center font-bold text-th-short-description">
          <span>Languages: {data.languages.join()}</span>
        </div>
      </div>
    </Link>
  )
}
export default Repo
