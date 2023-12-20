"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export default function ContactButton({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) {
  return (
    <motion.li
      whileHover={{
        x: -5,
        transition: { duration: 0.3, ease: "backInOut" },
      }}
      whileTap={{ scale: 0.99 }}
    >
      <Link href={link} target="_blank" className="select-none">
        {children}
      </Link>
    </motion.li>
  );
}
