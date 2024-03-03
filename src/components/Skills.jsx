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
    <div>
      <div>
        <p>Skills</p>
        <p>Technologies I have worked with include:</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
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
