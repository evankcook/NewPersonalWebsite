import Navbar from "../components/layout/navbar";
import Hero from "../components/layout/hero";
import AboutMe from "@/components/layout/about-me";
import Experience from "@/components/layout/experience";
import Projects from "@/components/layout/projects";
import Interests from "@/components/layout/interests";
import Footer from "@/components/layout/footer";

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
