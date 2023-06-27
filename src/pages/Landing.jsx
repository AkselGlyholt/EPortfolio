import React from "react";
import SocialLink from "../components/UI/SocialLink";
import resume from "../assets/resume.pdf";
import { FaTwitter, FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa";
import Projects from "../components/Projects.jsx";
import Modal from "../components/Modal.jsx"

function Landing({ toggleModal }) {
  return (
    <>
      <section id="landing-page">
        <header className="header">
          <div className="header__content">
            <h1 className="title">Hey</h1>
            <h1 className="title orange">I'm Aksel</h1>
            <p className="header__para">
              I'm a <b className="orange">Frontend Software Engineer</b> with a
              strong passion for building web applications with great user
              experiences.
              <br />
              Here's a bit more{" "}
              <b className="orange click" onClick={toggleModal}>
                about me.
              </b>
            </p>
            <div className="social__list">
              <SocialLink
                href="https://twitter.com/AkselGlyholt"
                icon={<FaTwitter />}
              />
              <SocialLink
                href="https://github.com/AkselGlyholt"
                icon={<FaGithub />}
              />
              <SocialLink href={resume} icon={<FaFilePdf />} />
            </div>
          </div>
        </header>
        <button className="mail__btn click" onClick={toggleModal}>
          <FaEnvelope />
        </button>
        <a href="/#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>
        <Modal toggleModal={toggleModal} />
      </section>
      <Projects />
    </>
  );
}

export default Landing;
