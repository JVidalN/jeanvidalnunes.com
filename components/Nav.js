import Link from 'next/link';
import React from 'react';
import ThemeChanger from '../components/Themechanger';

const menus = ['Home', 'About', 'Portfolio', 'Blog'];

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between pt-7 font-['Baloo_2'] font-bold text-th-text">
      <Link className='text-3xl' href='/'>Jean Vidal</Link>
      <ul className='flex flex-row justify-between gap-5 text-xl'>
        {
          menus.map(
            (menu) => <li key={menu}>
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
      </ul>
      <ThemeChanger />
    </nav>
  )
}
export default Nav
