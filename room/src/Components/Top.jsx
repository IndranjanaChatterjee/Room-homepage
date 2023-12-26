import React, { useState } from "react";
import first from "../assets/images/desktop-image-hero-1.jpg";
import arrow from "../assets/images/icon-arrow.svg";
import left from "../assets/images/icon-angle-left.svg";
import right from "../assets/images/icon-angle-right.svg";
import second from "../assets/images/desktop-image-hero-2.jpg";
import third from "../assets/images/desktop-image-hero-3.jpg";
import { motion } from "framer-motion";
export default function Top() {
  const [count, setCount] = useState(1);
  const moveLeft = () => {
    if (count == 1) {
      setCount(3);
    } else {
      let i = count;
      i = i - 1;

      setCount(i);
    }
  };
  const moveRight = () => {
    if (count == 3) {
      setCount(1);
    } else {
      let i = count;
      i = i + 1;

      setCount(i);
    }
  };
  return (
    <section className="flex flex-row justify-center items-center flex-wrap md:flex-nowrap gap-[2rem] ">
      <motion.div
        className="img w-[240rem] xl:h-[27rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        {count == 1 ? (
          <motion.img
            src={first}
            alt="first"
            className="w-[100rem] h-[30rem] xl:h-[100%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          />
        ) : count == 2 ? (
          <motion.img
            src={second}
            alt="first"
            className="w-[100rem] h-[30rem] xl:h-[100%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          />
        ) : (
          <motion.img
            src={third}
            alt="first"
            className="w-[100rem] h-[30rem] xl:h-[100%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          />
        )}
      </motion.div>
      <div className="text p-[2rem] xl:px-[5rem]  flex flex-col justify-center items-start w-[120rem] font-['League_Spartan'] md:h-[27rem] S">
        {count == 1 ? (
          <>
            <motion.h1
              className="font-bold text-4xl pb-[1rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              Discover innovative ways to decorate
            </motion.h1>
            <motion.p
              className="text-[#a1a1a1] pb-[1rem] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </motion.p>
          </>
        ) : count == 2 ? (
          <>
            <motion.h1
              className="font-bold text-4xl pb-[1rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              We are available all across the globe
            </motion.h1>
            <motion.p
              className="text-[#a1a1a1] pb-[1rem] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we’re in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
            </motion.p>
          </>
        ) : (
          <>
            <motion.h1
              className="font-bold text-4xl pb-[1rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              Manufactured with the best materials
            </motion.h1>
            <motion.p
              className="text-[#a1a1a1] pb-[1rem] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </motion.p>
          </>
        )}

        <button className="show flex flex-row font-bold items-center gap-[0.5rem] cursor-pointer md:tracking-[1rem] uppercase tracking-[0.5rem] mb-[1.5rem] hover:text-[#a1a1a1]  transition-all durarion-500 ease-linear">
          Shop now <img src={arrow} alt="" />
        </button>
      </div>
      <span className="button flex absolute flex-row gap-[0.2rem] right-0 top-[68.3%] xl:top-[40%] xl:right-[31.5%]">
        <button className="left_btn bg-[#000000] w-[4rem] h-[4rem] text-2xl p-[0.5rem] flex justify-center items-center cursor-pointer hover:bg-[#454545] transition-all duration-200 ease-linear">
          <img
            src={left}
            alt="left"
            className="w-[1.5rem]"
            onClick={moveLeft}
          />
        </button>
        <button className="right_btn bg-[#000000] left_btn  w-[4rem] h-[4rem] text-2xl p-[0.5rem] flex justify-center items-center cursor-pointer hover:bg-[#454545] transition-all duration-200 ease-linear">
          <img
            src={right}
            alt="right"
            className="w-[1.5rem]"
            onClick={moveRight}
          />
        </button>
      </span>
    </section>
  );
}
