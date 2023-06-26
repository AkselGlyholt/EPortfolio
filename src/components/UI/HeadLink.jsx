import React from "react";

function HeadLink({ href, text, onClick }) {
  return (
    <li className="nav__link">
      <a
        onClick={onClick}
        href={href}
        className="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          "
      >
        {text}
      </a>
    </li>
  );
}

export default HeadLink;
