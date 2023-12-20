"use client";

import PageTitle from "@/components/PageTitle";
import { useState } from "react";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";

export default function About() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((p) => !p);
  };
  return (
    <PageWrapper>
      <p className="uppercase md:text-2xl xl:text-3xl row-start-3 selection:bg-black col-span-3 col-start-1">
        HEY I&apos;M SHIVAM KAPOOR,
        <br />A FULL STACK WEB DEVELOPER
        <br />
        FROM INDIA. I LOVE <strong>MUSIC, DANCE, GAMING</strong> <br />
        AND  <u><strong>CODING</strong></u>.
      </p>
      <PageTitle>ABOUT</PageTitle>
      <div className="row-start-3 col-span-2 row-span-2 max-h-[80vh] col-start-2 p-2 place-self-end  lg:col-start-4 lg:col-span-2 lg:row-span-5 lg:row-start-3 grid w-full h-full content-end justify-items-center overflow-hidden relative max-w-[500px] justify-self-end uppercase z-10">
        <p
          className={`w-full top-0 overflow-y-auto scroll duration-500 transition-all absolute p-2 z-10 bg-white ${
            !active ? "top-full" : ""
          }`}
        >
          I am an enthusiastic <b>learner</b> and a computer science student, I
          love to try new things. I like to do <b>Coding</b> and I also like to make fascinating projects.
          <br />
          Apart from computer science I also like <b>gaming</b>. I also
          like <b>photography</b> my photographs are about nature and prospectives.
          <br />
          <br />
          Thanks for reading.
        </p>
        <span
          onClick={handleClick}
          className="bg-white w-full text-center z-10 select-none cursor-pointer font-medium absolute bottom-0"
        >
          {active ? (
            <span className="grid place-items-center">
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={15}
                height={15}
                className="rotate-180"
              />
              <i>close</i>
            </span>
          ) : (
            <span className="grid place-items-center">
              <Image src="/arrow.svg" alt="arrow" width={15} height={15} />
              <i>Know more</i>
            </span>
          )}
        </span>
      </div>
    </PageWrapper>
  );
}
