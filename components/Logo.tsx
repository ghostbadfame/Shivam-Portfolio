import Link from "next/link";
import { FunctionComponent } from "react";

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <Link
      href={"/"}
      className="text-2xl bg-black text-white h-min select-none w-min z-10"
    >
      SHIVAM
    </Link>
  );
};

export default Logo;
