import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Post = ({ data }) => {
  let formattedDate = new Date(data.published_at).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Link
      className='
        my-3 
        md:my-0 
        rounded-[20px] 
        bg-th-bg-30
        shadow-lg 
        flex 
        flex-col 
        gap-5
        h-[500px]
        transition-transform 
        duration-500 
        transform 
        hover:-translate-y-2
        '
      href={data.url} target='_blank'
    >
      <Image
        src={data.cover_image}
        alt={data.title}
        width={500}
        height={500}
        className='rounded-t-lg w-full h-full'
      />
      <div className='pb-4 px-6 h-2/3'>
        <div className='font-bold text-xs uppercase tracking-wide text-th-short-description'>
          {formattedDate}
        </div>
        <h3
          className="font-['Baloo_2'] text-base py-5 font-bold uppercase text-left leading-tight text-th-title-10">
          {data.title}
        </h3>
        <div className='mt-1 text-sm text-th-description'>
          <span>{data.description}</span>
        </div>
        <div className='text-xs mt-4 flex flex-col gap-3 text-th-short-description text-center'>
          <span className='italic'>
            <b>Tags:</b> {data.tags}
          </span>
          <span className="font-['Baloo_2'] text-center font-bold text-sh">
            {data.reading_time_minutes} min. of reading
          </span>
        </div>
      </div>
    </Link>
  )
}
export default Post
