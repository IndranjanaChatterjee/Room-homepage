import React from "react";
import first from "../assets/images/desktop-image-hero-1.jpg";
import arrow from "../assets/images/icon-arrow.svg";
export default function Top() {
  return (
    <section className="flex flex-row justify-center items-center flex-wrap md:flex-nowrap">
      <div className="img w-[150rem]">
        <img src={first} alt="first" className="w-[100rem]"/>
      </div>
      <div className="text p-[4rem] flex flex-col justify-start w-[120rem] font-['League_Spartan']">
        <h1 className="font-bold text-4xl">Discover innovative ways to decorate</h1>
        <p className="text-[#a1a1a1]">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button className="show flex flex-row  items-center gap-[0.5rem] cursor-pointer">Shop now <img src={arrow} alt="" /></button>
      </div>
    </section>
  );
}
