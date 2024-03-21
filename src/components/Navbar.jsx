import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import myCV from "../assets/myCV.pdf";
import "./Navbar.css"

function Navbar() {
  return (
    <header className='fixed w-full backdrop-blur-md ml-14'>
        <div className='ml-20 flex justify-between items-center '>
          <div>
            <ul className='platform-container flex'>
              <li>
                <a className='platform' href="https://github.com/tosin1691" target="_blank"><FaLinkedin size="1.5rem"/></a>
              </li>
              <li>
              <a className='platform' href="https://www.linkedin.com/in/tosin-orekoya/" target="_blank"><FaGithub size="1.5rem"/></a>
              </li>
              <li>
              <a className='platform' href="mailto:olaseni.orekoya@yahoo.co.uk" target="_blank"><AiOutlineMail size="1.5rem"/></a>
              </li>
            </ul>
          </div>
            <div>
                <button id='cv-button' onClick={() => window.open(myCV)}>My CV</button>
            </div>
        </div>
    </header>
  );
}

export default Navbar;