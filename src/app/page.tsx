import Hero from "../components/Hero";
import About from "../components/About";
import ExperienceProjects from "../components/ExperienceProjects";
import SkillsHobbies from "../components/SkillsHobbies";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full relative">
      <Hero />
      <About />
      <ExperienceProjects />
      <SkillsHobbies />
      <Contact />
    </main>
  );
}
