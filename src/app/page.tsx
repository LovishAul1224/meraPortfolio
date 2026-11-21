import Nav from "@/components/Nav";
import { Hero, Marquee } from "@/components/Hero";
import { About, Stats } from "@/components/About";
import { Credentials, Experience, Projects, Skills } from "@/components/Work";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
