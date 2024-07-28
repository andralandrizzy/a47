import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TaskStats from "@/components/TaskStats";
import Work from "@/components/Work";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <TaskStats />
      <Skills />
      <Education />
      <Experiences />
      <Work />
      <Blogs />
      <Contact />
    </>
  )
}

export default HomePage