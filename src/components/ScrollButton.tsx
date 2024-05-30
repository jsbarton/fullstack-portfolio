import "/src/styles/ScrollButton.css";
import { useRef } from "react";

const ScrollButton = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);
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
      <div className="projects-frame" id="projects" ref={projectsRef}>
        Projects
      </div>
    </>
  );
};

export default ScrollButton;
