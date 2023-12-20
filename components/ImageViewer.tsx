"use client";
import Image from "next/image";
import { useState } from "react";

const FAV_IMAGES = [
  "https://i.pinimg.com/564x/54/5f/a1/545fa1d133d2fd0a48a6ec6330414435.jpg",
  "https://i.pinimg.com/564x/3c/25/ca/3c25ca18ce782d2bed9b603da6c4f535.jpg",
  "https://i.pinimg.com/564x/54/38/e5/5438e5c5776645d72090cb154bcc83d5.jpg",
];

export default function ImageViewer() {
  const [currentImg, setCurrentImg] = useState(0);

  const handleNext = () => {
    if (currentImg === FAV_IMAGES.length - 1) {
      setCurrentImg(0);
      return;
    }
    setCurrentImg((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentImg === 0) {
      setCurrentImg(FAV_IMAGES.length - 1);
      return;
    }
    setCurrentImg((prev) => prev - 1);
  };

  return (
    <div className="flex gap-2 lg:overflow-hidden z-10">
      <Image
        src={FAV_IMAGES[currentImg]}
        width={300}
        height={300}
        alt={"images"}
        className="aspect-square object-center object-cover"
      />
      <div className="flex flex-col justify-end gap-2">
        <span
          className="w-14 h-14 grid place-content-center rounded-full border-2 border-black cursor-pointer select-none hover:bg-gray-200 transition duration-100 active:bg-gray-300"
          onClick={handleNext}
        >
          {">"}
        </span>
        <span
          className="w-14 h-14 grid place-content-center rounded-full border-2 border-black cursor-pointer select-none hover:bg-gray-200 transition duration-100 active:bg-gray-300"
          onClick={handlePrev}
        >
          {"<"}
        </span>
      </div>
    </div>
  );
}
