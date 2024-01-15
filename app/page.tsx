import Navbar from "@/containers/navbar";
import Hero from "@/containers/home-page/hero";
import AboutMe from "@/containers/home-page/about-me";
import Experience from "@/containers/home-page/expereince";
import Projects from "@/containers/home-page/projects";
import Interests from "@/containers/home-page/interests";
import Footer from "@/containers/footer";

export default function Home() {
  return (
    <div className="bg-primary-back w-full scroll-smooth">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Interests />
      <Footer />
    </div>
  );
}
