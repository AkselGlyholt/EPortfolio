import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import "./App.css";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import Footer from "./components/Footer.jsx";

function App() {
  const [ModelOpen, setModelOpen] = useState(false);

  function toggleModal() {
    if (ModelOpen) {
      setModelOpen(false);
      return document.body.classList.remove("modal--open");
    }
    setModelOpen(true);
    document.body.classList += " modal--open";
  }

  return (
    <Router>
      <div className="App">
        <Nav toggleModal={toggleModal} />
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
