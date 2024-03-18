import React from 'react'
import { Link } from 'react-scroll'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='w-14 bg-gray-900 fixed h-full text-white'>
        <div className='logo mb-31 flex items-center justify-center'>
            <h1 className='text-lg'>T.O</h1>
        </div>
        <ul className='rotate-90 flex'>
            <li className='ml-10'>
                <Link to="home" smooth={false} offset={50} duration={500}>
                <a>
                    Home
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <Link to='about' smooth={false} offset={50} duration={500}>
                <a>
                    About
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <Link to='skills' smooth={false} offset={50} duration={500}>
                <a>
                    Skills
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <Link to='projects' smooth={false} offset={50} duration={500}>
                <a>
                    Projects
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <Link to='contact' smooth={false} offset={50} duration={500}>
                <a>
                    Contact
                </a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar