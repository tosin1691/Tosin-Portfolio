import React from 'react';
import '../index.css'

function About() {
  return (
    <section>
        <div name='about' className='pl-40 pr-6'>
            <h1 className='text-6xl pb-4 mb-10 max-w-[1100px] sectionHeader'>About<span>.</span></h1>
            <div className='max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4 mb-48'>
                <p className='text-3xl font-bold'>
                Hi! I'm Tosin! I am a chartered accountant turned Frontend Developer from London, England. 
                </p> 
                <p>
                I am a passionate and motivated frontend developer with a comprehensive skillset in finance and working with technologies such as Node.js, ReactJS, JavaScript and responsive web designed.
                I am eager about leveraging my unique skillset to drive innovation and growth in a challenging but yet rewarding environment.
                </p>
            </div>
        </div>
    </section>
  );
}

export default About;