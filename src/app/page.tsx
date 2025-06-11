import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";
import { Experiences } from "./components/sections/experiences";
import { Hero } from "./components/sections/hero";
import { Projects } from "./components/sections/projects";
import { Services } from "./components/sections/services";

import BgBlur from "./components/ui/bg-blur";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      {/* <BgBlur /> */}
    </main>
  );
}
