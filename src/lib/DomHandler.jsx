import whiteLogo from "../assets/favi-white.ico";
import blackLogo from "../assets/favi-black.ico";

let contrast = false;

const toggleContrast = () => {
  contrast = !contrast
  if (contrast) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
};

function setFavicon(contrast) {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  if (contrast === "dark") {
    link.href = blackLogo;
  } else {
    link.href = whiteLogo;
  }

  document.getElementsByTagName("head")[0].appendChild(link);
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "light" : "dark";
    setFavicon(newColorScheme);
  });

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  setFavicon("light");
}

function handeLoad() {
  setTimeout(() => {
    document.querySelector(".title").classList.add("show");
    setTimeout(() => {
      document.querySelector(".title2").classList.add("show");
      setTimeout(() => {
        document.querySelector(".header__para").classList.add("show");
        setTimeout(() => {
          document.querySelector(".social__list").classList.add("show");
          setTimeout(() => {
            document.querySelector("nav").classList.add("show");
          }, 10);
        }, 130);
      }, 130);
    }, 130);
  }, 300)
}

export { setFavicon, toggleContrast, handeLoad };
