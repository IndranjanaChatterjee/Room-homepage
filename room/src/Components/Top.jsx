import React from "react";
import first from "../assets/images/desktop-image-hero-1.jpg";
import arrow from "../assets/images/icon-arrow.svg";
export default function Top() {
  return (
    <section className="flex flex-row justify-center items-center flex-wrap md:flex-nowrap gap-[2rem] ">
      <div className="img w-[240rem] xl:h-[27rem]">
        <img src={first} alt="first" className="w-[100rem] h-[30rem] xl:h-[100%]"/>
      </div>
      <div className="text p-[2rem] xl:px-[5rem] flex flex-col justify-center items-start w-[120rem] font-['League_Spartan'] md:h-[27rem] S">
        <h1 className="font-bold text-4xl pb-[1rem]">Discover innovative ways to decorate</h1>
        <p className="text-[#a1a1a1] pb-[1rem]">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button className="show flex flex-row  items-center gap-[0.5rem] cursor-pointer md:tracking-[1rem] uppercase tracking-[0.5rem] mb-[1.5rem]">Shop now <img src={arrow} alt="" /></button>
      </div>
    </section>
  );
}
