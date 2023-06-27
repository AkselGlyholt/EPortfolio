import React from "react";
import Logo from "../assets/logo.svg";
import Resume from "../assets/resume.pdf";
import FooterLink from "./UI/FooterLink";

function Footer({ toggleModal }) {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <a href="/#" className="footer__anchor">
            <figure className="footer__logo">
              <img src={Logo} className="footer__logo--img" alt="" />
            </figure>
            <span className="footer__logo--popper">
              Top
              <i className="fas fa-arrow-up"></i>
            </span>
          </a>
          <div className="footer__social--list">
            <FooterLink
              href="https://github.com/AkselGlyholt"
              target="_blank"
              onClick={null}
              text="Github"
            />
            <FooterLink
              href="https://twitter.com/AkselGlyholt"
              target="_blank"
              onClick={null}
              text="Twitter"
            />
            <FooterLink
              href="/#"
              target="_self"
              onClick={toggleModal}
              text="Contact"
            />
            <FooterLink
              href={Resume}
              target="_blank"
              onClick={null}
              text="Resume"
            />
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2023 Aksel Glyholt
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
