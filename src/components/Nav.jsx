import Logo from "../assets/logo.svg";
import { FaAdjust } from "react-icons/fa";
import HeadLink from "./UI/HeadLink";
import { toggleContrast } from "../lib/DomHandler";

function Nav({ toggleModal }) {
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
