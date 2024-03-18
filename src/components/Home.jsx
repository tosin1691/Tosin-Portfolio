import React from 'react';
import heroImage from "../assets/images/rocket.png"
import "./Home.css"

function Home() {
  return (
    <section className='flex'>
        <div name='home' className='pl-40 pr-6 py-44'>
            <h1 id='intro'>Hello<span>!</span> I'm Tosin<span>.</span></h1>
            <h2 id='title' className='pb-2.5'>I'm a FrontEnd Developer</h2>
            <p className='w-3/4 intro-para mb-1.5'>
               To adapt to the current time and contribute to using technologies to improve our everyday lives, I have spent the past few years learning how to code and I have acquired new skills and built some interesting projects in the process. Currently I am focused sharpening and expanding my skillset as a FrontEnd Developer and I am excited at the prospect of starting a career in the field. 
            </p>
            <span>Let's connect!</span>
        </div>
        <div className='pr-40 mt-52 w-9/12 h-auto'>
            <img id='heroImg' src={heroImage}/>
        </div>
    </section>
  );
}

export default Home;