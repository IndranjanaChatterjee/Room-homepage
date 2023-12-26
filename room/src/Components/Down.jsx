import React from "react";
import left from "../assets/images/image-about-dark.jpg";
import right from "../assets/images/image-about-light.jpg";

export default function Down() {
  return (
    <section className="down flex flex-wrap md:flex-nowrap ">
      <div className="right md:w-[30rem]  bg-blue-500 w-[100%] xl:h-[20rem]">
        <img src={left} alt="left" className="w-[100%] h-[23rem] xl:h-[100%]"/>
      </div>
      <div className="text w-[35rem] p-[2rem] xl:px-[4rem]  flex flex-col justify-center items-start w-[120rem] font-['League_Spartan'] xl:h-[20rem]">
        <h1 className="font-bold tracking-[0.6rem] text-[1.2rem] mb-[1.5rem] uppercase">About our furniture</h1>
        <p className="text-[#a1a1a1] mb-[1.2rem]">Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.</p>
      </div>
      <div className="right right md:w-[30rem]   w-[100%] xl:h-[20rem] ">
        <img src={right} alt="right" className="w-[100%] h-[23rem] xl:h-[100%]"/>
      </div>
    </section>
  );
}
