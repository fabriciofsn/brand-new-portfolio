import React from "react";
import { DivSkills } from "../styles/Skills";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { ImCheckboxChecked } from "react-icons/im";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { StyledH2 } from "../styles/Header";
import { Divicons, DivList } from "../styles/Skills";

const Skills = () => {
  return (
    <div>
      <DivSkills>
        <div>
          <StyledH2>Hard Skills</StyledH2>
          <Divicons>
            <AiFillHtml5 title="html5" className="icon" />
            <DiCss3 title="css3" className="icon" />
            <DiJavascript1 title="javascript" className="icon" />
            <SiTypescript title="typescript" className="icon" />
          </Divicons>
          <Divicons>
            <FaReact title="react.js" className="icon" />
            <FaNodeJs title="node.js" className="icon" />
            <FaGit title="git" className="icon" />
            <AiFillGithub title="github" className="icon" />
          </Divicons>
          <StyledH2>Soft Skills</StyledH2>
        </div>
      </DivSkills>

      <DivSkills>
        <DivList>
          <Divicons>
            <ul>
              <li>
                <ImCheckboxChecked className="list" /> Clean Code
              </li>
              <li>
                <ImCheckboxChecked className="list" /> Good Communication
              </li>
            </ul>
            <ul>
              <li>
                <ImCheckboxChecked className="list" /> Organized
              </li>
              <li>
                <ImCheckboxChecked className="list" /> Team Work
              </li>
            </ul>
          </Divicons>
        </DivList>
      </DivSkills>
    </div>
  );
};

export default Skills;
