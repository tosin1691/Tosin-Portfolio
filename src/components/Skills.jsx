import React from "react";
import html from "../assets/Program-lang/HTML.png";
import css from "../assets/Program-lang/CSS.png";
import javascript from "../assets/Program-lang/JSicon.png";
import react from "../assets/Program-lang/React.png";
import jquery from "../assets/Program-lang/jquery.png";
import node from "../assets/Program-lang/NodeJs.png";
import bootstrap from "../assets/Program-lang/BootStrap.png";
import tailwind from "../assets/Program-lang/tailwind.png";

const Skills = () => {
  return (
    <div name='skills' className="pl-40 pr-6">
      <div>
        <p className="text-6xl font-bold pb-4 mb-10 max-w-[1100px] sectionHeader">Skills<span>.</span></p>
        <p className="text-2xl font-bold pb-10">Technologies I have worked with include<span>:</span></p>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-40">
        <div>
          <img className="w-20 mx-auto" src={html} alt="html icon" />
          <p>HTML</p>
        </div>
        <div>
          <img className="w-20 mx-auto" src={css} alt="css icon" />
          <p>CSS</p>
        </div>
        <div>
          <img className="w-20 mx-auto" src={javascript} alt="javascript icon"/>
          <p>JavaScript</p>
        </div>
        <div>
          <img className="w-20 mx-auto" src={react} alt="react icon" />
          <p>React</p>
        </div>
        <div>
          <img className="w-20 mx-auto" src={jquery} alt="jQuery icon" />
          <p>JQuery</p>
        </div>
        <div>
          <img className="w-20 mx-auto" src={node} alt="node.js icon" />
          <p>Node</p>
        </div>
        <div>
          <img className="w-20 mx-auto" src={bootstrap} alt="bootstrap icon" />
          <p>Bootstrap</p>
        </div>
        <div>
          <img className="w-20 mx-auto" src={tailwind} alt="tailwind icon" />
          <p>Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
