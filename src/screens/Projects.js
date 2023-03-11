import React from "react";
import Div from "../components/DivProjects";
import { SectionWrapper } from "../styles/Projects";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <SectionWrapper>
      <Div
        title="Updates Covid-19"
        quote="Hi... This is a project, which i have used an API 
        who shows the current cases of covid-19. You, also, can
        see the current situation of every state of Brazil."
        icon={<BsGithub size={20} />}
        github="https://github.com/fabriciofsn/Projeto_covid19_api"
        href="https://projeto-covid19-api.vercel.app/"
        name={<HiOutlineExternalLink size={22} />}
      />
      <Div
        title="Local Weather Forecast"
        quote="Hi... this is a project, where i'm developing a 
        Forecast Weather system. On this system you may be able to
        see your local and everywhere tempeture.
        "
        icon={<BsGithub size={20} />}
        github="https://github.com/fabriciofsn/weather"
        href="https://previsaodotempo-iota.vercel.app/"
        name={<HiOutlineExternalLink />}
      />
    </SectionWrapper>
  );
};

export default Projects;
