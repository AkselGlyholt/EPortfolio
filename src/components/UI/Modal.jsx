import React from "react";
import Language from "./Language";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import { FaEnvelope, FaSpinner, FaTimes } from "react-icons/fa";

function Modal({ toggleModal }) {
  function contact(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1b4w8fi",
        "template_78r51bl",
        e.target,
        "_eq0jCVCj_ouc5Hp5"
      )
      .then(
        (result) => {
          document.querySelector(".modal__overlay--loading").style.display =
            "none";
          document.querySelector(".modal__overlay--success").style.display =
            "flex";
        },
        (error) => {
          document.querySelector(".modal__overlay--loading").style.display =
            "none";
          document.querySelector(".contact__error").style.display = "flex";
        }
      );
  }

  return (
    <>
      <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's a little about me.
          </h3>
          <h4 className="modal__sub-title modal__sub-title--about">
            Frontend Software Engineer.
          </h4>
          <p className="modal__para">
            {" "}
            I'm a 14 year-old Danish{" "}
            <b className="orange">frontend software engineer</b> with experience
            developing websites for the tech company{" "}
            <b className="orange">StrailX</b> and freelancing websites for small
            and independent businesses <br /> <br /> I currently solve difficult
            engineering problems every day with the{" "}
            <b className="orange">StrailX team</b> using{" "}
            <b className="orange">JavaScript ES6+, HTML</b> and{" "}
            <b className="orange">CSS</b>
          </p>
          <div className="modal__languages">
            <Language
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              text="HTML"
            />
            <Language
              src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
              text="CSS"
            />
            <Language
              src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
              text="JavaScript"
            />
            <Language
              src="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"
              text="TypeScript"
            />
            <Language
              src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
              text="React"
            />
            <Language
              src="https://cdn.iconscout.com/icon/free/png-512/nuxt-dot-js-3521615-2945059.png"
              text="NextJS"
            />
          </div>
        </div>
        <div className="modal__half modal__contact">
          <i className="fas fa-times modal__exit click" onClick={toggleModal}>
            <FaTimes />
          </i>
          <h3 className="modal__title modal__title--contact">
            Let's have a chat!
          </h3>
          <h3 className="modal__sub-title modal__sub-title--contact">
            I'm currently open to new opportunities.
          </h3>
          <ContactForm contact={(event) => contact(event)} />
          <div className="modal__overlay modal__overlay--loading">
            <FaSpinner />
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to speaking to you.
          </div>
        </div>
      </div>
      <button className="mail__btn click" onClick={toggleModal}>
        <FaEnvelope />
      </button>
    </>
  );
}

export default Modal;
