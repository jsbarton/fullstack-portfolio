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
      </div>
      <div className="projects-frame" id="projects" ref={projectsRef}>
        <div className="title">Projects</div>
        <ProjectsCarousel />
      </div>
    </>
  );
};

export default ScrollButton;
