import React from 'react'
import { Link } from 'react-scroll'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='w-14 bg-gray-900 fixed h-full'>
        <div className='logo mb-31 flex items-center justify-center'>
            <h1 className='text-lg'>T.O</h1>
        </div>
        <ul className='rotate-90 flex'>
            <li className='ml-10'>
                <Link to="home" smooth={false} offset={50} duration={500}>
                <a className='menu-option text-white no-underline p-2'>
                    Home
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <Link to='about' smooth={false} offset={50} duration={500}>
                <a className='menu-option text-white no-underline p-2'>
                    About
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <Link to='skills' smooth={false} offset={50} duration={500}>
                <a className='menu-option text-white no-underline p-2'>
                    Skills
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <Link to='projects' smooth={false} offset={50} duration={500}>
                <a className='menu-option text-white no-underline p-2'>
                    Projects
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <Link to='contact' smooth={false} offset={50} duration={500}>
                <a className='menu-option text-white no-underline p-2'>
                    Contact
                </a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar