import Link from 'next/link';
import React, { useState } from 'react';
import ThemeChanger from '../components/ThemeChanger';

import { FaBars } from 'react-icons/fa'

const menus = ['Home', 'About', 'Portfolio', 'Blog'];

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex flex-row items-center justify-evenly pt-7 font-['Baloo_2'] font-bold text-th-text">
      <Link className='text-3xl' href='/'>Jean Vidal</Link>
      <ul
        className={`
          text-xl 
          md:flex 
          md:flex-row 
          md:justify-between 
          md:gap-5 
          md:items-center 
          max-md:flex-column
          max-md:absolute
          max-md:right-0
          max-md:top-16
          max-md:w-[240px]
          max-md:bg-th-title-10
          max-md:border
          max-md:border-th-bg-60
          max-md:backdrop-blur-lg
          max-md:rounded-[10px]
          max-md:py-2
          ${!toggleMenu && 'max-md:hidden'}
        `}
      >
        {
          menus.map(
            (menu) => <li key={menu} className='max-md:flex max-md:items-center max-md:justify-center'>
              <Link
                href={menu === 'Home' ? '/' : `#${menu.toLowerCase()}`}
                scroll={false}
                className='menu-items'
              >
                {menu}
              </Link>
            </li>
          )
        }
        <div className='lg:ml-24 max-md:flex max-md:items-center max-md:justify-center'>
          <ThemeChanger />
        </div>
      </ul>
      <div onClick={() => { setToggleMenu((current) => !current) }} className='cursor-pointer md:hidden block'>
        <FaBars className='' />
      </div>
    </nav>
  )
}
export default Nav
