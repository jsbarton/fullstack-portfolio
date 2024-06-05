import { useRef } from "react";
import NavBar from "./NavBar";
import ProjectsCarousel from "./ProjectsCarousel";
import ScrollButton from "./ScrollButton";
import "/src/styles/Container.css";

const Container = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <NavBar aboutRef={aboutRef} homeRef={homeRef} projectsRef={projectsRef} />
      <div className="welcome" ref={homeRef}>
        <img className="self" src="/self.jpg" height="75" width="75" />
        <div className="intro">Hi, I'm Jordan.</div>
        <div>Welcome to my Fullstack Portfolio.</div>
        <ScrollButton projectsRef={projectsRef} />
      </div>
      <div className="about" id="about">
        <div className="title" ref={aboutRef}>
          About
        </div>
        <div className="about-description">
          Hey, I'm Jordan, and I'm a fullstack developer from Prince George's
          County, Maryland. I attended the University of Maryland where I got my
          Bachelor's Degree in Computer Science and a Minor in Statistics. In my
          free time, I love exploring my love of fashion, trying new restaurants
          with my friends, and spending time in nature. Thank you for visiting
          my portfolio site - let's connect!
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/jordan-barton-88350b159/">
            <img src={"/linkedin.svg"} height={30} width={30} />
          </a>
          <a href="https://github.com/jsbarton">
            <img src={"/github.svg"} height={30} width={30} />
          </a>
          <a href="">
            <img src={"/gmail.svg"} height={30} width={30} />
          </a>
        </div>
      </div>
      <div className="projects-frame" id="projects">
        <div className="title" ref={projectsRef}>
          Projects
        </div>
        <ProjectsCarousel />
      </div>
    </>
  );
};
export default Container;
