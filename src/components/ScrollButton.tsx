import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import "/src/styles/ScrollButton.css";
import { useRef } from "react";

type Props = {
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
};
const ScrollButton = ({ projectsRef }: Props) => {
  return (
    <>
      <div className="button-container">
        <div className="button bounce">
          <button
            onClick={() => {
              projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          ></button>
        </div>
      </div>
    </>
  );
};

export default ScrollButton;
