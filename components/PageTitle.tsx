import React from "react";

export default function PageTitle({ children, classes }: any) {
  return (
    <>
      <div
        className={
          "row-start-4 lg:row-start-6 text-3xl md:text-8xl xl:text-9xl font-black lg:col-span-full whitespace-nowrap select-none " +
          classes
        }
      >
        {children}
      </div>
    </>
  );
}
