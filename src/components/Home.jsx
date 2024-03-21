import React from 'react';
import heroImage from "../assets/images/rocket.png"
import "./Home.css"
import '../index.css'

function Home() {
  return (
    <section className='md:flex home-container text-white'>
        <div name='home' className='pl-24 md:pl-40 pr-6 pt-36 md:py-44'>
            <h1 id='intro' className='text-4xl sm:text-6xl md:text-6xl'>Hello<span>!</span> I'm Tosin<span>.</span></h1>
            <h2 id='title' className='pb-2.5 text-xl sm:text-2xl md:text-3xl'>I'm a FrontEnd Developer</h2>
            <p className='w-11/12 md:w-10/12 intro-para mb-1.5 text-sm md:text-base'>
               To adapt to the current time and contribute to using technologies to improve our everyday lives, I have spent the past few years learning how to code and I have acquired new skills and built some interesting projects in the process. Currently I am focused on sharpening and expanding my skillset as a FrontEnd Developer and I am excited at the prospect of starting a career in the field. 
            </p>
            <span>Let's connect!</span>
        </div>
        <div className='pr-10 md:mt-52 w-full h-auto'>
            <img id='heroImg' src={heroImage} className='mx-auto'/>
        </div>
    </section>
  );
}

export default Home;