import PageTitle from "@/components/PageTitle";
import PageWrapper from "@/components/PageWrapper";

export default function Skills() {
  return (
    <PageWrapper>
      <div className="lg:row-start-2 col-start-1 col-span-2 whitespace-nowrap uppercase xl:text-3xl lg:text-2xl text-xl flex flex-col lg:gap-6 gap-2 lg:mt-20">
      <h3 className="font-bold">Programming Languages</h3>
        <p className="">C++, Javascript, Python</p>
        
      </div>
      <div className="lg:col-start-3 col-start-1 col-span-2 lg:row-start-2 whitespace-nowrap uppercase xl:text-3xl lg:text-2xl text-xl flex flex-col lg:gap-6 gap-2 lg:ml-5 xl:ml-0 lg:mt-20">
        <h3 className="font-bold">Framework and Libraries</h3>
        <p className="">• HTML, CSS, Bootstrap, Material UI, Tailwind CSS.
        <br />
        • NodeJS, ExpressJS, Flask, FastAPI , ReactJS, NextJS.
        <br />
      • MongoDB, Firebase , MySQL, Vercel, Docker.
        </p>
      </div>
      {/* <div className="lg:col-start-2 col-start-1 col-span-2 lg:row-start-4 whitespace-nowrap uppercase xl:text-3xl lg:text-2xl text-xl flex flex-col lg:gap-6 gap-2">
      <h3 className="font-bold">languages</h3>
        <p className="">Hindi, English</p>
      </div> */}
      {/* <div className="lg:col-start-4 col-start-1 col-span-2 lg:row-start-4 whitespace-nowrap uppercase xl:text-3xl lg:text-2xl text-xl flex flex-col lg:gap-6 gap-2 lg:ml-14 xl:ml-0">
       
        <h3 className="font-bold">Databases</h3>
        <p className="">SQL ,No-SQL</p>
      </div> */}
      <PageTitle classes={"row-start-6"}>SKILLS</PageTitle>
    </PageWrapper>
  );
}
