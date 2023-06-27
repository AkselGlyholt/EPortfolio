import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { FaAdjust } from "react-icons/fa";
import HeadLink from "./UI/HeadLink";
import { Link } from "react-router-dom";

function Nav({ toggleModal }) {
  const [contrast, setContrast] = useState(true);

  function toggleContrast() {
    setContrast(!contrast);
    if (contrast) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      document.querySelector("nav").classList.add("nav--hidden");
    } else {
      document.querySelector("nav").classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;

    if (window.scrollY !== 0) {
      document.querySelector("nav").classList.add("scrolled");
    } else {
      document.querySelector("nav").classList.remove("scrolled");
    }
  });

  useEffect(() => {
    if (window.scrollY !== 0) {
      document.querySelector("nav").classList.add("scrolled");
    } else {
      document.querySelector("nav").classList.remove("scrolled");
    }
  }, []);

  return (
    <nav>
      <div className="nav--container">
        <Link to="/#">
          <img id="personal-logo" src={Logo} alt="Logo" />
        </Link>
        <ul className="nav__link--list">
          <HeadLink href="/#" text="About" onClick={null} />
          <HeadLink href="/#projects" text="Projects" onClick={null} />
          <HeadLink href="/#" text="Contact" onClick={toggleModal} />
          <li className="nav__link click" onClick={toggleContrast}>
            <button
              className="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
            "
            >
              <FaAdjust className="fas fa-adjust" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
