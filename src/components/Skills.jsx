import React from "react";
import html from "../assets/Program-lang/HTML.png";
import css from "../assets/Program-lang/CSS.png";
import javascript from "../assets/Program-lang/JSicon.png";
import react from "../assets/Program-lang/React.png";
import jquery from "../assets/Program-lang/jquery.png";
import node from "../assets/Program-lang/NodeJs.png";
import bootstrap from "../assets/Program-lang/BootStrap.png";
import tailwind from "../assets/Program-lang/tailwind.png";
import '../index.css'

const Skills = () => {
  return (
    <div name='skills' className="pl-24 md:pl-40 pr-6 md:py-10 bg-gray-800">
      <div>
        <p className="text-4xl sm:text-6xl md:text-6xl pb-4 mb-10 max-w-[1100px] sectionHeader text-slate-50">Skills<span>.</span></p>
        <p className="text-2xl text-slate-50">Technologies I have worked with include<span> :</span></p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-40 text-center">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto py-4" src={html} alt="html icon" />
          <p className="text-slate-50">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto py-4" src={css} alt="css icon" />
          <p className="text-slate-50">CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto py-4" src={javascript} alt="javascript icon"/>
          <p className="text-slate-50">JavaScript</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto py-4" src={react} alt="react icon" />
          <p className="text-slate-50">React</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto py-4" src={jquery} alt="jQuery icon" />
          <p className="text-slate-50">JQuery</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto py-4" src={node} alt="node.js icon" />
          <p className="text-slate-50">Node</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto py-4" src={bootstrap} alt="bootstrap icon" />
          <p className="text-slate-50">Bootstrap</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto py-4" src={tailwind} alt="tailwind icon" />
          <p className="text-slate-50">Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
