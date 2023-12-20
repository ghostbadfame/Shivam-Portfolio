"use client";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Image from "next/image";
import { usePathname } from "next/navigation";
import GridAnim from "./GridAnim";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) {
  const location = usePathname();
  const PATH_FOR_BOTTOM_SVG = ["/", "/about"];

  return (
    <>
      <motion.main
        className={
          "grid grid-cols-3 lg:grid-rows-6 lg:grid-cols-5 min-h-screen p-4 lg:p-16 h-screen w-screen max-w-[1920px] xl:m-auto relative overflow-hidden " +
          className
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        exit={{ opacity: 0, y: 20 }}
      >
        {/* <GridAnim /> */}
        <Image
          src={"/artifact01.svg"}
          alt="svg"
          width={150}
          height={150}
          className="absolute -top-2 -left-1 lg:w-[440px] select-none"
        />
        <Image
          src={"/artifact01.svg"}
          alt="svg"
          width={150}
          height={150}
          className={`absolute -bottom-2 -right-2 lg:w-[440px] select-none scale-x-[-1] scale-y-[-1] 
             ${PATH_FOR_BOTTOM_SVG.includes(location) ? "hidden" : ""}`}
        />
        <Logo />
        {children}
      </motion.main>
    </>
  );
}
