import "/src/styles/NavBar.css";

type Props = {
  homeRef: React.MutableRefObject<HTMLDivElement | null>;
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
};
const NavBar = ({ homeRef, aboutRef, projectsRef }: Props) => {
  return (
    <div className="container">
      <div
        onClick={() => {
          console.log("home button clicked");
          homeRef?.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Home
      </div>
      <div
        onClick={() => {
          console.log("about button clicked");
          aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        About
      </div>
      <div
        onClick={() => {
          console.log("project button clicked");
          projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Projects
      </div>
    </div>
  );
};

export default NavBar;
