"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="w-full flex justify-between  shadow relative px-6 py-5 bg-gradient-to-r from-rose-100 to-teal-100 md:hidden">
        <Link
          className="flex   items-center gap-2.5 font-medium text-2xl"
          href={"/"}
        >
          <Image width={50} height={50} alt="logo" src={"/logo.png"} />
          <h2 className="bg-gradient-to-br from-amber-800 to-lime-400 font-medium bg-clip-text text-transparent">স্বস্তির ছায়া</h2>
        </Link>

        <button
          className="text-gray-700 focus:outline-none focus:text-gray-600"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
        <AnimatePresence>
        {showMenu && <Menu handleBtn={toggleMenu}></Menu>}
        </AnimatePresence>
      </div>
      <div className="hidden  md:block">
        <div className="flex bg-gradient-to-r from-rose-100 to-teal-100 2xl:py-5 3xl:py-7  drop-shadow bg-gray-100 justify-between md:px-[50px] lg:px-[75px] py-4">
          <Link
            className="flex  items-center gap-3.5 font-medium text-2xl"
            href={"/"}
          >
            <Image
              className="2xl:w-[70px] 3xl:w-[80px]"
              width={56}
              height={56}
              alt="logo"
              src={"/logo.png"}
            />
            <h2 className="bg-gradient-to-br from-amber-800 to-lime-400 font-medium bg-clip-text text-transparent 2xl:text-[24px] 3xl:text-[28px]">
              স্বস্তির ছায়া
            </h2>
          </Link>

          <div className="flex items-center gap-6 text-lg 2xl:text-[22px] 3xl:text-[25px]">
            <Link  className="duration-300 hover:text-orange-400" href={"/"}>
              হোম
            </Link>
            <Link
              className="duration-300 hover:text-orange-400"
              href={"#about"}
            >
              আবাউট
            </Link>
            <Link
              className="duration-300 hover:text-orange-400"
              href={"#members"}
              
            >
              মেম্বারস
            </Link>
            <Link
              className="duration-300 hover:text-orange-400"
              href={"#contact"}
            >
              কন্টাক্ট
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
