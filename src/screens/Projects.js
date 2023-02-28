import React from "react";
import Div from "../components/DivProjects";
import { SectionWrapper } from "../styles/Projects";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

const Projects = () => {
  return (
    <SectionWrapper>
      <Div
        title="Atualizações Covid-19"
        quote="Hi... This is a project, which i have used an API 
        who shows the current cases of covid-19. You, also, can
        see the current situation of every state of Brazil."
        icon={<BsGithub size={20} />}
        github="https://github.com/fabriciofsn/Projeto_covid19_api"
        href="https://projeto-covid19-api.vercel.app/"
        name={<HiOutlineExternalLink size={22} />}
      />
      <Div
        title="Atualizações Covid-19"
        quote="olá pessoal"
        icon={<BsGithub size={20} />}
        href="https://projeto-covid19-api.vercel.app/"
        name={<HiOutlineExternalLink />}
      />
    </SectionWrapper>
  );
};

export default Projects;
