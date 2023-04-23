import Image from 'next/image';
import React from 'react';

const Photo = () => {
  return (
    <div
      className='
      w-[410px] 
      h-[410px] 
      animate-[floatImage_4s_ease-in-out_infinite]
      md:block
      hidden
    '
    >
      <div
        className='
        w-full 
        h-full 
        rounded-[50%]
        relative
        flex
        justify-center
        items-center
        after:content-[""]
        after:absolute
        after:w-[380px]
        after:h-[380px]
        after:bg-th-bg-60
        after:rounded-[50%]
      '
      >
        <span className='span-image-color' />
        <span className='span-image-color' />
        <div
          className='
          relative 
          w-[380px] 
          h-[380px] 
          z-[1]
          rounded-[50%]
          overflow-hidden
        '
        >
          <Image
            src='/images/jean-vidal.png'
            alt='Jean Vidal'
            width={350}
            height={350}
            className='
              absolute 
              top-[30px]
              left-1/2 
              -translate-x-1/2
              max-w-[350px] 
              object-cover
            '
          />
        </div>
      </div>
    </div>
  );
};
export default Photo;
