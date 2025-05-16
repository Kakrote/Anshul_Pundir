import Image from "next/image";
import Hero_Section from "@/components/Hero_Section";
import Navbar from "@/components/Navbar";
import About_Section from "@/components/About_Section";
import ProjectSection from "@/components/Project_Section";
import ContactMe from "@/components/Contect_Me";

export default function Home() {
  return (
    <div className=" min-h-screen bg-white">
      <Navbar />
      <section id="home" className=" mt-7">
        <Hero_Section />
      </section>
      <About_Section/>
      <ProjectSection/>
      <ContactMe/>

    </div>
  );
}
