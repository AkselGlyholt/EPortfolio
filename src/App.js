import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import "./App.css";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import Footer from "./components/Footer.jsx";
import semiCircle from "./assets/semi circle.svg";
import circle from "./assets/circle.svg";
import squiggly from "./assets/squiggly.svg";
import triangly from "./assets/triangle.svg";
import Modal from "./components/UI/Modal.jsx";
import { handeLoad } from "./lib/DomHandler.jsx";

function App() {
  const [ModelOpen, setModelOpen] = useState(false);

  function toggleModal() {
    if (ModelOpen) {
      setModelOpen(false);
      return document.body.classList.remove("modal--open");
    }
    setModelOpen(true);
    document.body.classList += " modal--open";
    document.documentElement.scrollTop = 0;
  }

  const scaleFactor = 1 / 20;

  function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px) rotate(${x * boolInt * 10}deg)`;
    }
  }

  return (
    <Router>
      <div
        onLoad={handeLoad}
        className="App"
        onMouseMove={(event) => moveBackground(event)}
      >
        <img alt="" src={semiCircle} className="shape shape--0" />
        <img alt="" src={circle} className="shape shape--1" />
        <img alt="" src={squiggly} className="shape shape--2" />
        <img alt="" src={circle} className="shape shape--3" />
        <img alt="" src={triangly} className="shape shape--4" />
        <img alt="" src={circle} className="shape shape--5" />
        <img alt="" src={squiggly} className="shape shape--6" />
        <img alt="" src={circle} className="shape shape--7" />
        <img alt="" src={semiCircle} className="shape shape--8" />
        <Nav toggleModal={toggleModal} />
        <Modal toggleModal={toggleModal} />
        <Routes>
          <Route
            path="/"
            exact
            toggleModal={toggleModal}
            element={<Landing toggleModal={toggleModal} />}
          />
        </Routes>
        <Footer toggleModal={toggleModal} />
      </div>
    </Router>
  );
}

export default App;
