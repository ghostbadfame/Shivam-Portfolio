import Link from "next/link";

export default function Button({ children }: any) {
  return (
    <Link
      href={"/" + children.toLowerCase()}
      className="text-black border-t-[1px] border-black group relative hover:text-white hover:border-white text-end md:w-25 xl:w-36 xl:text-2xl md:text-xl select-none h-min"
    >
      <span className="z-20">{children}</span>
      <div className="absolute -z-10 top-0 left-0 w-full h-0 bg-black group-hover:h-full origin-top duration-300 ease-out transition-all"></div>
    </Link>
  );
}
