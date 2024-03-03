import React from 'react'
import { Link } from 'react-scroll'

const Sidebar = () => {
  return (
    <div className='w-20 bg-gray-900 fixed h-full text-white'>
        <div className='mb-31'>
            <h1>T.O</h1>
        </div>
        <ul className='rotate-90 flex'>
            <li className='ml-10'>
                <Link className='to="home" smooth={true} offset={50} duration={500}'>
                <a>
                    Home
                </a>
                </Link>
            </li>
            <li className='ml-4'>
                <a>
                    About
                </a>
            </li>
            <li className='ml-4'>
                <a>
                    Skills
                </a>
            </li>
            <li className='ml-4'>
                <a>
                    Projects
                </a>
            </li>
            <li className='ml-4'>
                <a>
                    Contact
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar