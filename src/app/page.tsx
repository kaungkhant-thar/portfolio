import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";
import { Experiences } from "./components/sections/experiences";
import { Hero } from "./components/sections/hero";
import { Projects } from "./components/sections/projects";

import { Services } from "./components/sections/services";

import { client } from "../sanity/client";
import { defineQuery } from "next-sanity";

const PROJECTS_QUERY = defineQuery(
  `*[_type == 'project'] | order(_createdAt desc)`
);
export default async function Home() {
  const projects = await client.fetch(PROJECTS_QUERY, {});

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Experiences />
      <Projects projects={projects} />
      <Services />

      <Contact />
    </main>
  );
}
