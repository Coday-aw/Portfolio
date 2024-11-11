import About from "@/components/About";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact"; 


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
