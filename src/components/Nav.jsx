import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { FaAdjust } from "react-icons/fa";
import HeadLink from "./UI/HeadLink";

function Nav({ toggleModal }) {
  const [contrast, setContrast] = useState(true)

  function toggleContrast() {
    setContrast(!contrast);
    if (contrast) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  return (
    <nav>
      <figure>
        <img id="personal-logo" src={Logo} alt="Logo" />
      </figure>
      <ul className="nav__link--list">
        <HeadLink href="/#" text="About" onClick={null} />
        <HeadLink href="/#projects" text="Projects" onClick={null} />
        <HeadLink href="/#" text="Contact" onClick={toggleModal} />
        <li className="nav__link click" onClick={toggleContrast}>
          <a
            href="/#"
            className="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          "
          >
            <FaAdjust className="fas fa-adjust" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
