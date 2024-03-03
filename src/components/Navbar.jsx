import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import myCV from "../assets/myCV.pdf";

function Navbar() {
  return (
    <header>
        <div className='ml-20 flex justify-between'>
          <div>
            <ul className='flex'>
              <li>
                <a href="https://github.com/tosin1691" target="_blank"><FaLinkedin size="2.5rem"/></a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/tosin-orekoya/" target="_blank"><FaGithub size="2.5rem"/></a>
              </li>
              <li>
              <a href="mailto:olaseni.orekoya@yahoo.co.uk" target="_blank"><AiOutlineMail size="2.5rem"/></a>
              </li>
            </ul>
          </div>
            <div>
                <button onClick={() => window.open(myCV)}>My CV</button>
            </div>
        </div>
    </header>
  );
}

export default Navbar;