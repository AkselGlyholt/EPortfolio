import React from "react";

function FooterLink({ href, target, onClick, text }) {
  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      onClick={onClick}
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
