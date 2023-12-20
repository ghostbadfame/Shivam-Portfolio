"use client";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import PageWrapper from "@/components/PageWrapper";
import ProjectDesc from "@/components/ProjectDesc";
import { animate, delay, motion, stagger } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const PROJECTS_LIST = [
  {
    name: "College-Exposed",
    desc: `A open college reviewing platform that provides unbiased reviews about the college using NextJS, Typescript, TailwindCSS.`,
    image: "/1n.jpg",
    link: "https://colleges-exposed-production.vercel.app/",
  },
  {
    name: "Search Alien",
    desc: "A simple website, when we enter name of any Ben10 alien it will give a give information about that alien. Used ReactJS, TailwindCSS.",
    image: "/2nd.jpg",
    link: "https://main--vocal-sawine-935397.netlify.app/",
  },
  {
    name: "CSVHandler",
    desc: "Made a API using FastApi, MongoDB for Database and ReactJS for frontend that fetch data from CSV files and show in a Table format ",
    image: "/3nd.jpg",
    github: "https://github.com/ghostbadfame/CSVHandler/tree/main",
  },
  {
    name: "Webscraper-Wikipedia",
    desc: "• Developed a web scraping application using Node.js, Express.js, and Cheerio to scrape and extract desired information.",
    image: "/4nd.jpg",
    github: "https://github.com/ghostbadfame/CSVHandler/tree/main",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleActiveProject = (i: number) => {
    setCurrentProject(i);
  };

  useEffect(() => {
    animate(
      ".project-link",
      { opacity: 1, y: 0 },
      {
        delay: stagger(0.5, { from: "first", startDelay: 0.5, ease: "easeIn" }),
      }
    );
  }, []);

  return (
    <PageWrapper>
      <ProjectDesc
        desc={PROJECTS_LIST[currentProject].desc}
        image={PROJECTS_LIST[currentProject].image}
      />
      <div className="lg:row-start-5 row-start-4 flex flex-col justify-end bg-white col-span-3 z-10">
        {PROJECTS_LIST.map((project, index) => {
          return (
            <motion.div
              className="project-link cursor-pointer flex items-center gap-4 w-fit opacity-0 select-none"
              initial={{ y: 3 }}
              key={index}
            >
              <h1
                className={`text-2xl whitespace-nowrap lg:text-3xl uppercase cursor-pointer ${
                  index === currentProject ? "font-bold" : ""
                }`}
                key={project.name}
                onClick={() => handleActiveProject(index)}
              >
                {project.name}
              </h1>
              {project.link && (
                <Link href={project.link} target="_blank">
                  <motion.span
                    whileHover={{ x: "3px", y: "-2px" }}
                    whileTap={{ scale: 0.8 }}
                    className="grid place-content-center text-2xl lg:text-3xl"
                  >
                    <HiArrowUpRight />
                  </motion.span>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    className="grid place-content-center text-2xl lg:text-3xl"
                  >
                    <AiFillGithub />
                  </motion.span>
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
      <PageTitle classes={"row-start-5"}>PROJECTS</PageTitle>
    </PageWrapper>
  );
}
