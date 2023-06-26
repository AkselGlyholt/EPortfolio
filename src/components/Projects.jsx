import React from "react";
import Project from "./UI/Project.jsx";
import ecommerceImage from "../assets/ecommerceWebsite.png";
import netflixImage from "../assets/NetflixClone.png";
import movieDataBaseImg from "../assets/moviedatabase.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="orange">projects</span>
          </h1>
          <ul className="project__list">
            <Project
              title="E-Commerce Website"
              tools="HTML, CSS, JavaScript, React"
              para="Library is a online ecommerce website with a big set of
                    books in every genre."
              img={ecommerceImage}
              github="https://github.com/AkselGlyholt/library-react-build"
              link="https://akselglyholt.github.io/library-react-build/"
            />
            <Project
              title="Netflix Clone"
              tools="HTML, CSS, JavaScript, TypeScript, NextJS, TailwindCSS"
              para="A 1:1 copy of netflix with working accounts, server sided rendering and payments."
              img={netflixImage}
              github="https://github.com/AkselGlyholt/netflix-clone"
              link="https://netflix-clone-5mft.vercel.app/"
            />
            <Project
              title="Movie Database"
              tools="HTML, CSS, JavaScript, React"
              para="Lists movies by search prompt and lists them and some info about them using the TMDB API"
              img={movieDataBaseImg}
              github="https://github.com/AkselGlyholt/MoviesDatabase"
              link="https://movies-database-beige.vercel.app"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
