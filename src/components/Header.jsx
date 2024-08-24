import Hamburger from "hamburger-react";
import { useState } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="absolute mt-5 flex h-[90px] w-[100%] items-center">
      <img
        className="ml-6 h-12 w-12"
        src="/starter-code/assets/shared/logo.svg"
        alt=""
      />
      <hr className="z-10 ml-auto hidden h-[1px] w-[48%] bg-white lg:mr-[-10%] lg:block" />
      <div className="ml-auto mr-0 hidden h-[90px] w-[50%] items-center text-white backdrop-brightness-150 sm:flex sm:gap-2 sm:pl-[5%] md:gap-7 md:pl-[10%]">
        <div className="flex cursor-pointer items-center gap-2">
          <h1 className="text-lg font-bold"> 00</h1>
          <span className="text-md"> Home</span>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <h1 className="text-lg font-bold"> 01</h1>
          <span className="text-md"> Destination </span>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <h1 className="text-lg font-bold"> 02</h1>
          <span className="text-md"> Crew</span>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <h1 className="text-lg font-bold"> 03 </h1>
          <span className="text-md"> technology</span>
        </div>
      </div>
      <div className="sm:hidden ml-auto mr-5">
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
};

export default Header;
