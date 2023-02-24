import React from "react";
import { SocialMedias } from "../styles/Social";
import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Social = () => {
  const handleTitle = ({ target }) => {
    console.log(target);
  };

  return (
    <SocialMedias>
      <a
        onMouseEnter={handleTitle}
        title="github"
        target="_blank"
        href="https://github.com/fabriciofsn"
      >
        <BsGithub className="icon" />
      </a>
      <a
        title="linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/fabr%C3%ADcio-souza-fullstack/"
      >
        <BsLinkedin className="icon" />
      </a>
      <a
        title="instagram"
        target="_blank"
        href="https://www.instagram.com/fabricio_is_not_available/"
      >
        <BsInstagram className="icon" />
      </a>
      <a title="whatsapp" target="_blank" href="https://wa.me/5579996557845">
        <BsWhatsapp className="icon" />
      </a>
    </SocialMedias>
  );
};

export default Social;
