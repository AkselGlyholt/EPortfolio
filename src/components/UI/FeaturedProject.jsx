import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Skeleton from "./Skeleton";

function Project({ title, tools, para, img, github, link, even }) {
  const [imag, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      if (mountedRef.current) {
        setImg(image);
      }
    };
    return () => {
      mountedRef.current = false;
    };
  }, [imag]);

  return (
    <>
      {even ? (
        <>
          {!imag ? (
            <li className="project">
              <div className="project__left">
                <Skeleton
                  borderRadius={4}
                  height={48}
                  width={300}
                  classN="project__title"
                />
                <Skeleton
                  classN="project__para"
                  borderRadius={4}
                  height={88}
                  width={538}
                ></Skeleton>
                <Skeleton
                  height={17}
                  width={180}
                  classN="project__tools"
                ></Skeleton>
                <div className="project__links">
                  <Skeleton
                    borderRadius={100}
                    width={36}
                    height={36}
                    classN="project__description--link--skeli"
                  ></Skeleton>
                  <Skeleton
                    borderRadius={100}
                    width={36}
                    height={36}
                    classN="project__description--link--skeli"
                  ></Skeleton>
                </div>
              </div>
              <div className="project__right">
                <figure className="project__img--wrapper">
                  {!imag ? (
                    <>
                      <Skeleton img={true} classN="project__img" />
                    </>
                  ) : (
                    <>
                      <img src={img} alt="" className="project__img" />
                    </>
                  )}
                </figure>
              </div>
            </li>
          ) : (
            <li className="project">
              <div className="project__left">
                <h1 className="project__title">{title}</h1>
                <p className="project__para">{para}</p>
                <h2 className="project__tools">{tools}</h2>
                <div className="project__links">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="project__description--link"
                  >
                    <FaGithub className="fas fa-github" />
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="project__description--link"
                  >
                    <FaLink className="fas fa-link" />
                  </a>
                </div>
              </div>
              <div className="project__right">
                <figure className="project__img--wrapper">
                  <img src={img} alt="" className="project__img" />
                </figure>
              </div>
            </li>
          )}
        </>
      ) : (
        <>
          {!imag ? (
            <li className="project">
              <div className="project__left">
                <figure className="project__img--wrapper">
                  <Skeleton img={true} classN="project__img" />
                </figure>
              </div>
              <div className="project__right">
                <Skeleton
                  borderRadius={4}
                  height={48}
                  width={300}
                  classN="project__title"
                />
                <Skeleton
                  classN="project__para"
                  borderRadius={4}
                  height={88}
                  width={538}
                ></Skeleton>
                <Skeleton
                  height={17}
                  width={180}
                  classN="project__tools"
                ></Skeleton>
                <div className="project__links">
                  <Skeleton
                    borderRadius={100}
                    width={36}
                    height={36}
                    classN="project__description--link--skeli"
                  ></Skeleton>
                  <Skeleton
                    borderRadius={100}
                    width={36}
                    height={36}
                    classN="project__description--link--skeli"
                  ></Skeleton>
                </div>
              </div>
            </li>
          ) : (
            <li className="project">
              <div className="project__left">
                <figure className="project__img--wrapper">
                  <img src={img} alt="" className="project__img" />
                </figure>
              </div>
              <div className="project__right">
                <h1 className="project__title">{title}</h1>
                <p className="project__para">{para}</p>
                <h2 className="project__tools">{tools}</h2>
                <div className="project__links">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="project__description--link"
                  >
                    <FaGithub className="fas fa-github" />
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="project__description--link"
                  >
                    <FaLink className="fas fa-link" />
                  </a>
                </div>
              </div>
            </li>
          )}
        </>
      )}
    </>
  );
}

export default Project;
