import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  const [mobile,setMobile]=useState(false);
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent">
      <nav className="bg-transparent flex flex-row justify-start gap-[1.5rem] p-[1.5rem] w-full">
        <span className="bars block md:hidden"><FontAwesomeIcon icon={faBars} /></span>
        <span className="home bg-sky-500 w-[100%] flex justify-center items-center md:w-[5rem]">room</span>
        <span className="list hidden md:block">
          <ul className="flex flex-row justify-start gap-[0.75rem] ">
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
