import { FunctionComponent } from "react";
import Button from "./Button";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:gap-6 lg:gap-x-16 col-start-2 lg:col-start-4 col-span-2 justify-self-end z-10">
      <Button>ABOUT</Button>
      <Button>PROJECTS</Button>
      <Button>SKILLS</Button>
      {/* <Button>RANDOM</Button> */}
    </div>
  );
};

export default Menu;
