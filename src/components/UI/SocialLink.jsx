function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="social__link click"
    >
      {icon}
    </a>
  );
}

export default SocialLink;
