function Language({ src, text }) {
  return (
    <figure className="modal__language">
      <img
        className="modal__language--img"
        src={src}
        alt=""
      />
      <span className="language__name">{text}</span>
    </figure>
  );
}

export default Language;
