import React from "react";
import first from "../assets/images/desktop-image-hero-1.jpg";
import arrow from "../assets/images/icon-arrow.svg";
export default function Top() {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="img w-[60rem]">
        <img src={first} alt="first" />
      </div>
      <div className="text">
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button className="show flex flex-row justify-center items-center gap-[0.5rem]">Shop now <img src={arrow} alt="" /></button>
      </div>
    </section>
  );
}
