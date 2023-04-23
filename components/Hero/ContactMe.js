import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaMedium, FaDev } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='w-max mx-2 px-2 relative border border-th-text rounded-[10px] md:mx-0 md:px-16 pb-8 pt-10 mt-6'>
      <h3 className='absolute py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase rounded-md bg-th-bg-button text-th-text border border-th-text'>Contact me</h3>
      <div className='text-center md:text-left text-th-text flex flex-col gap-1'>
        <div className='flex flex-row gap-2 flex-wrap'>
          <Link href='https://linkedin.com/in/jvidalnunes' target='_blank' title='LinkedIn Profile'>
            <FaLinkedin
              className='fa-icons'
            />
          </Link>
          <Link href='https://github.com/jvidaln' target='_blank' title='GitHub Profile'>
            <FaGithub
              className='fa-icons'
            />
          </Link>
          <Link href='https://youtube.com/jvidalnunes' target='_blank' title='Youtube Channel'>
            <FaYoutube
              className='fa-icons'
            />
          </Link>
          <Link href='https://twitter.com/JVidalN' target='_blank' title='Twitter'>
            <FaTwitter
              className='fa-icons'
            />
          </Link>
          <Link href='https://dev.to/jvidaln' target='_blank' title='Dev.To'>
            <FaDev
              className='fa-icons'
            />
          </Link>
        </div>
        <span className='inline-block mt-4 text-center'>or drop a line: j.vidalnunes@gmail.com</span>
      </div>
    </div>
  )
}
export default ContactMe
