import Hero from "../Components/Hero.jsx";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Hero />
      <Projects showSection={true} />
    </>
  );
}

export default Home;
