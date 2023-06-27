import React from "react";
import { FaGithub, FaLink, FaRegFolder } from "react-icons/fa";

function ExtraProject({ title, para, tools, github, link }) {
  return (
    <div className="extraproject">
      <div className="extra--top">
        <FaRegFolder className="extra--icon" />
        <div className="extra__links">
          <a href={github} target="_blank" rel="noreferrer" className="extra__link">
            <FaGithub className="extra__link--icon" />
          </a>
          <a href={link} target="_blank" rel="noreferrer" className="extra__link">
            <FaLink className="extra__link--icon" />
          </a>
        </div>
      </div>
      <h2 className="extra--title">{title}</h2>
      <p className="extra__para">{para}</p>
      <p className="extra__tools">{tools}</p>
    </div>
  );
}

export default ExtraProject;
