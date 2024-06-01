import ProjectsCarousel from "./ProjectsCarousel";
import "/src/styles/ScrollButton.css";
import { useRef } from "react";

const ScrollButton = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className="button-container">
        <div className="button bounce">
          <button
            onClick={() => {
              console.log("button clicked");
              projectsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          ></button>
        </div>
      </div>
      <div className="about" id="about" ref={aboutRef}>
        <div className="title">About</div>
        <div className="about-description">
          Hey, I'm Jordan, and I'm a fullstack developer from Prince George's
          County, Maryland. I attended the University of Maryland where I got my
          Bachelor's Degree in Computer Science and a Minor in Statistics. In my
          free time, I love exploring my love of fashion, trying new restaurants
          with my friends, and spending time in nature. Thank you for visiting
          my portfolio site - let's connect!
        </div>
        <div className="links">
          <img src={"/linkedin.svg"} height={30} width={30} />
          <img src={"/github.svg"} height={30} width={30} />
          <img src={"/gmail.svg"} height={30} width={30} />
        </div>
      </div>
      <div className="projects-frame" id="projects" ref={projectsRef}>
        <div className="title">Projects</div>
        <ProjectsCarousel />
      </div>
    </>
  );
};

export default ScrollButton;
