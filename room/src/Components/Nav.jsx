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
    <header className="absolute top-0 left-0 w-full bg-transparent p-[1.5rem] w-full flex flex-row justify-start gap-[1.5rem]">
      <button className="bars block md:hidden z-1000" onClick={mob}>
        {mobile?<FontAwesomeIcon icon={faX} />:<FontAwesomeIcon icon={faBars}/>}
      </button>
      <nav
        className={`bg-transparent flex flex-row md:flex justify-start gap-[1.5rem]  w-full ${
          mobile ? "hidden" : "block"
        } md:block`}
      >
        <span className={`home bg-sky-500 w-[100%] flex justify-center items-center md:w-[5rem]  `}>
          room
        </span>
        
        <span className="list hidden md:block ">
          <ul className="flex flex-row justify-start gap-[0.75rem] ">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </span>
      </nav>
      <nav className={`bg-transparent flex flex-row justify-center items-center gap-[1.5rem]  w-full md:hidden anidown ${
          mobile ? "block" : "hidden"
        } `}>
        <span className="flex flex-row justify-center w-full px-[2rem]"
          
        >
          
          <ul className="flex flex-row justify-start gap-[1.2rem] ">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </span>
      </nav>
    </header>
  );
}
