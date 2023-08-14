import React from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Menu = ({ handleBtn }) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 150,
  };

  const linkStyle = "duration-300 text-xl hover:text-orange-400 ";

  return (
    <m.div
      initial={{ opacity: 0, top: -0 }}
      transition={spring}
      animate={{ top: 20, left: "4%", opacity: 1 }}
      className={` w-[92%]    rounded-xl  absolute shadow-2xl bg-gradient-to-r from-rose-100 to-teal-100 h-auto z-10 p-4 `}
    >
      <div className="flex w-full justify-between items-center">
        <Link
          className="flex   items-center gap-2.5 font-medium text-2xl"
          href={"/"}
        >
          <Image width={50} height={50} alt="logo" src={"/logo.png"} />
          <h2 className="bg-gradient-to-br from-amber-800 to-lime-400 font-medium bg-clip-text text-transparent">
            স্বস্তির ছায়া
          </h2>
        </Link>
        <button onClick={handleBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-y-6 mt-4 py-2 justify-between w-full h-auto flex-col items-center ">
        <Link className={linkStyle} href={"/"}>
          হোম
        </Link>
        <Link className={linkStyle} href={"#about"}>
          আবাউট
        </Link>
        <Link className={linkStyle} href={"#members"}>
          মেম্বারস
        </Link>
        <Link className={linkStyle} href={"#contact"}>
          কন্টাক্ট
        </Link>
      </div>
    </m.div>
  );
};

export default Menu;
