import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

function Project({ title, tools, para, img, github, link }) {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img alt="" src={img} className="project__img" />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{title}</h3>
          <h4 className="project__description--sub-title">{tools}</h4>
          <p className="project__description--para">{para}</p>
          <div className="project__description--links">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project__description--link"
            >
              <FaGithub className="fas fa-github" />
            </a>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="project__description--link"
            >
              <FaLink className="fas fa-link" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Project;
