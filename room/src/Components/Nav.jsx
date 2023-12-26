import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";


export default function Nav() {
  const [mobile, setMobile] = useState(false);
  const mob = () => {
    setMobile(!mobile);
  };
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent p-[1.5rem] font-['League_Spartan'] w-full flex flex-row justify-start gap-[1.5rem]">
      <button className="bars block md:hidden z-1000 text-[#454545] text-[#ffffff] text-2xl" onClick={mob}>
        {mobile?<FontAwesomeIcon icon={faX} />:<FontAwesomeIcon icon={faBars}/>}
      </button>
      <nav
        className={`bg-transparent flex flex-row md:flex justify-start gap-[1.5rem] text-[#ffffff] w-full ${
          mobile ? "hidden" : "block"
        } md:block`}
      >
        <span className={`home  w-[100%] flex justify-center items-center md:w-[5rem] text-[#ffffff] font-bold text-2xl`}>
          room
        </span>
        
        <span className="list hidden md:block text-2xl">
          <ul className="flex flex-row justify-start items-center gap-[0.75rem] text-[#ffffff] text-2xl lowercase">
            <li className="hover:border-b-4 cursor-pointer transition-all durarion-500 ease-linear">Home</li>
            <li className="hover:border-b-4 cursor-pointer transition-all durarion-500 ease-linear">Shop</li>
            <li className="hover:border-b-4 cursor-pointer transition-all durarion-500 ease-linear">About</li>
            <li className="hover:border-b-4 cursor-pointer transition-all durarion-500 ease-linear">Contact</li>
          </ul>
        </span>
      </nav>
      <nav className={`bg-transparent flex flex-row justify-center items-center gap-[1.5rem] text-[#ffffff] w-full md:hidden anidown ${
          mobile ? "block" : "hidden"
        } `}>
        <span className="flex flex-row justify-center w-full px-[2rem]"
          
        >
          
          <ul className="flex flex-row justify-start gap-[1.2rem] lowercase">
          <li className="hover:border-b-4 cursor-pointer transition-all durarion-500 ease-linear">Home</li>
            <li className="hover:border-b-4 cursor-pointer transition-all durarion-500 ease-linear">Shop</li>
            <li className="hover:border-b-4 cursor-pointer transition-all durarion-500 ease-linear">About</li>
            <li className="hover:border-b-4 cursor-pointer transition-all durarion-500 ease-linear">Contact</li>
          </ul>
        </span>
      </nav>
    </header>
  );
}
