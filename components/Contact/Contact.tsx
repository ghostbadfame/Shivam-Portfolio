import { FunctionComponent } from "react";
import ContactButton from "./ContactButton";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className="row-start-3 col-start-3 lg:row-start-5 lg:col-start-5 lg:row-span-2 w-full lg:w-60 justify-self-end content-end xl:text-2xl md:text-xl grid text-right z-10">
      <h3>
        <strong>
          <u>CONTACT</u>
        </strong>
      </h3>
      <br />
      <ul>
        <ContactButton link="https://github.com/ghostbadfame">
          Github
        </ContactButton>
        <br />
        <ContactButton link="https://www.linkedin.com/in/shivamkapo/">
          Linkedin
        </ContactButton>
        <br />
        <ContactButton link="https://www.codechef.com/users/ghost2002">
          Codechef
        </ContactButton>
        <br />
        <ContactButton link="https://drive.google.com/file/d/1pdNPEjuuSa8Tkk9c3KhUI2tgJrPf2MIy/view?usp=sharing">
          Resume
        </ContactButton>
      </ul>
    </div>
  );
};

export default Contact;
