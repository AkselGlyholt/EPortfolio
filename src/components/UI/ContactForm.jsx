import React from "react";

function ContactForm({ contact, form }) {
  return (
    <form id="contact__form" rel={form} onSubmit={contact}>
      <div className="form__item">
        <label className="form__item--label">Name</label>
        <input className="input" name="user_name" type="text" required></input>
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
  );
}

export default ContactForm;
