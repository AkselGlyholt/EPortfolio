import FeaturedProject from "./UI/FeaturedProject.jsx";
import ecommerceImage from "../assets/ecommerceWebsite.webp";
import netflixImage from "../assets/NetflixClone.webp";
import ExtraProject from "./UI/ExtraProject.jsx";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="orange">projects</span>
          </h1>
          <ul className="project__list">
            <FeaturedProject
              title="E-Commerce Website"
              tools="HTML CSS JavaScript React"
              para="Library is a online ecommerce website with a big set of
                    books in every genre."
              img={ecommerceImage}
              github="https://github.com/AkselGlyholt/library-react-build"
              link="https://akselglyholt.github.io/library-react-build/"
              even={false}
            />
            <FeaturedProject
              title="Netflix Clone"
              tools="HTML CSS TypeScript NextJS TailwindCSS"
              para="A 1:1 copy of Netflix with genre listing, accounts, payments and watchable trailers"
              img={netflixImage}
              github="https://github.com/AkselGlyholt/netflix-clone"
              link="https://netflix-clone-5mft.vercel.app/"
              even={true}
            />
          </ul>
        </div>
      </div>
      <div className="other__projects">
        <h1 className="other__projects--title">
          Other Interesting <span className="orange">Projects</span>
        </h1>
        <div className="other__projects--container">
          <ExtraProject
            title="Portfolio V2"
            para="My second portfolio, I made after learning JavaScript. This website is actually build on this project"
            tools="HTML, CSS, JavaScript"
            github="https://github.com/AkselGlyholt/Portfolio-v2"
            link="https://akselglyholt.github.io/Portfolio-v2"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
