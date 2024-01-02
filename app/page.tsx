import Navbar from "../components/layout/navbar";
import Hero from "../components/layout/hero";
import AboutMe from "@/components/layout/about-me";
import Experience from "@/components/layout/experience";

export default function Home() {
  return (
    <div className="bg-primary-back w-full scroll-smooth">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
    </div>
  );
}
