import React from "react";

function FooterLink({ href, text, onclick, target }) {
  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      onClick={onclick}
      className="
          footer__social--link
          link__hover-effect
          link__hover-effect--white
          "
    >
      {text}
    </a>
  );
}

export default FooterLink;
