import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

function Project({ title, tools, para, img, github, link, even }) {
  return (
    <>
      {even ? (
        <li className="project">
          <div className="project__left">
            <h1 className="project__title">{title}</h1>
            <p className="project__para">{para}</p>
            <h2 className="project__tools">{tools}</h2>
            <div className="project__links">
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
          <div className="project__right">
            <figure className="project__img--wrapper">
              <img src={img} alt="" className="project__img" />
            </figure>
          </div>
        </li>
      ) : (
        <li className="project">
          <div className="project__left">
            <figure className="project__img--wrapper">
              <img src={img} alt="" className="project__img" />
            </figure>
          </div>
          <div className="project__right">
            <h1 className="project__title">{title}</h1>
            <p className="project__para">{para}</p>
            <h2 className="project__tools">{tools}</h2>
            <div className="project__links">
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
        </li>
      )}
    </>
  );
}

export default Project;
