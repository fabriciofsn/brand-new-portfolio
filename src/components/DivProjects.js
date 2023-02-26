import React from "react";

const Div = ({ title, quote, icon, ...props }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{quote}</p>
      <a title="Link github" target="_blank" href={props.github}>
        <span>{icon}</span>
      </a>
      <a title="Site online" target="_blank" href={props.href}>
        {props.name}
      </a>
    </div>
  );
};

export default Div;
