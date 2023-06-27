import React, { useCallback, useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { FaAdjust } from "react-icons/fa";
import HeadLink from "./UI/HeadLink";
import whiteLogo from "../assets/favi-white.ico";
import blackLogo from "../assets/favi-black.ico";

function Nav({ toggleModal }) {
  const [contrast, setContrast] = useState(true);

  const toggleContrast = useCallback(() => {
    setContrast(!contrast);
    if (contrast) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [contrast])

  function setFavicon(contrast) {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    if (contrast === "dark") {
      link.href = blackLogo;
    } else {
      link.href = whiteLogo;
    }

    document.getElementsByTagName("head")[0].appendChild(link);
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "light" : "dark";
      setFavicon(newColorScheme);
    });

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setFavicon("light");
    };
  }, []);

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
        <a href="/#">
          <img id="personal-logo" src={Logo} alt="Logo" />
        </a>
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
