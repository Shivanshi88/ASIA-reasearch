import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Vision from "../components/Vision";
import OurClients from "../components/client";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Vision />
      <OurClients />
      <Contact />
    </>
  );
};

export default Home;