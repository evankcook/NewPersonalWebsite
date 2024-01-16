import { Navbar } from "@/containers/navbar";
import {
  Hero,
  AboutMe,
  Experience,
  Projects,
  Interests,
} from "@/containers/home-page";
import { Footer } from "@/containers/footer";

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
