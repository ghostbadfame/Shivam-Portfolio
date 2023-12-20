"use client";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function GridAnim() {
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getGridSize();
    window.addEventListener("resize", getGridSize);
  }, []);

  const handleStagger = (i: any) => {
    // anime({
    //   targets: ".grid-item",
    //   background: ["black", "white"],
    //   delay: anime.stagger(50, { grid: [cols, rows], from: i }),
    // });
    console.log(i);
    anime({
      targets: ".grid-item",
      opacity: [".2", "0", ".4", "0"],
      easing: "easeInOutExpo",
      delay: anime.stagger(50, { grid: [cols, rows], from: i }),
    });
  };

  const getGridSize = () => {
    const columns = Math.floor(document.body.clientWidth / 50);
    const rows = Math.floor(document.body.clientHeight / 50);

    setCols(columns);
    setRows(rows);
    setTotal(columns * rows);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] absolute w-full h-full top-0 left-0">
      {[...Array(total)].map((x, i) => (
        <GridItem i={i} handleStagger={handleStagger} key={i} />
      ))}
    </div>
  );
}

function GridItem({ i, handleStagger }: any) {
  return (
    <div
      className="grid-item min-w-full min-h-full select-none border-black border-dashed border-[1px] opacity-0 transition-opacity duration-200 ease-in"
      id={i.toString()}
      onClick={() => handleStagger(i)}
      key={i}
    />
  );
}
