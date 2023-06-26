import React, { useRef } from "react";
import SocialLink from "../components/UI/SocialLink";
import resume from "../assets/resume.pdf";
import { FaTwitter, FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Projects from "../components/Projects.jsx";

function Landing({ toggleModal }) {
  const form = useRef();

  function contact(e) {
    e.preventDefault();

    document.querySelector(".contact__sending--container").style.display =
      "flex";

    emailjs
      .sendForm(
        "service_1b4w8fi",
        "template_78r51bl",
        form.current,
        "_eq0jCVCj_ouc5Hp5"
      )
      .then(
        (result) => {
          document.querySelector(".contact__sending--container").style.display =
            "none";
          document.querySelector(".contact__succes").style.display = "flex";
          console.log(result);
        },
        (error) => {
          document.querySelector(".contact__sending--container").style.display =
            "none";
          document.querySelector(".contact__error").style.display = "flex";
          console.log(error.text);
        }
      );
  }

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
        <a href="#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>
        <div className="modal">
          <div className="modal__half modal__about">
            <h3 className="modal__title modal__title--about">
              Here's a little about me.
            </h3>
            <h4 className="modal__sub-title modal__sub-title--about">
              Frontend Software Engineer.
            </h4>
            <p className="modal__para">
              I'm a 14 year-old Danish{" "}
              <b className="orange">frontend software engineer</b> with
              experience developing websites for the tech companie{" "}
              <b className="orange">Adverseflow</b> and freelancing websites for
              small and independent businesses
              <br />
              <br />I currently solve difficult engineering problems every day
              with the <b className="orange">Adverseflow team</b>
              using <b className="orange">JavaScript ES6+, HTML</b> and{" "}
              <b className="orange">CSS</b>
            </p>
            <div className="modal__languages">
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                  alt=""
                />
                <span className="language__name">HTML</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  alt=""
                />
                <span className="language__name">CSS</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  alt=""
                />
                <span className="language__name">JavaScript</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"
                  alt=""
                />
                <span className="language__name">TypeScript</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                  alt=""
                />
                <span className="language__name">React</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://cdn.iconscout.com/icon/free/png-512/nuxt-dot-js-3521615-2945059.png"
                  alt=""
                />
                <span className="language__name">NextJS</span>
              </figure>
            </div>
          </div>
          <div className="modal__half modal__contact">
            <i
              className="fas fa-times modal__exit click"
              onClick={toggleModal}
            ></i>
            <h3 className="modal__title modal__title--contact">
              Let's have a chat!
            </h3>
            <h3 className="modal__sub-title modal__sub-title--contact">
              I'm currently open to new opportunities.
            </h3>
            <form id="contact__form" rel={form} onSubmit={contact}>
              <div className="form__item">
                <label className="form__item--label">Name</label>
                <input
                  className="input"
                  name="user_name"
                  type="text"
                  required
                ></input>
              </div>
              <div className="form__item">
                <label className="form__item--label">Email</label>
                <input
                  className="input"
                  name="user_email"
                  type="email"
                  required
                ></input>
              </div>
              <div className="form__item">
                <label className="form__item--label">Message</label>
                <textarea
                  className="input"
                  name="message"
                  type="text"
                  required
                ></textarea>
              </div>
              <button id="contact__submit" className="form__submit">
                Send it my way
              </button>
            </form>
            <div className="modal__overlay modal__overlay--loading">
              <i className="fas fa-spinner"></i>
            </div>
            <div className="modal__overlay modal__overlay--success">
              Thanks for the message! Looking forward to speaking to you.
            </div>
          </div>
        </div>
      </section>
      <Projects />
    </>
  );
}

export default Landing;
