import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AIPrototypeWork from "./components/AIPrototypeWork"; 
import ResearchAndBlogs from "./components/ResearchAndBlogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A192F] text-[#CCD6F6] font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <AIPrototypeWork /> 
      <ResearchAndBlogs />
      <Contact />
      <Footer />
    </main>
  );
}


