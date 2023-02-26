import React from "react";
import Div from "../components/DivProjects";
import { SectionWrapper } from "../styles/Projects";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <SectionWrapper>
      <Div
        title="Atualizações Covid-19"
        quote="Hi... This is a project, which i have used an API 
        who shows the current cases of covid-19. You, also, can
        see the current situation of every state of Brazil."
        icon={<BsGithub />}
        github="https://github.com/fabriciofsn/Projeto_covid19_api"
        href="https://projeto-covid19-api.vercel.app/"
        name="Link"
      />
      <Div
        title="Atualizações Covid-19"
        quote="olá pessoal"
        icon={<BsGithub />}
        href="https://projeto-covid19-api.vercel.app/"
        name="Link"
      />
    </SectionWrapper>
  );
};

export default Projects;
