import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-9 w-full p-3 md:p-6 xl:p-8 bg-gradient-to-br from-yellow-200 via-green-200 to-green-300s h-auto shadow">
      <div className="flex flex-col items-center md:grid md:grid-cols-3 md:place-items-start">
        <div className="my-5">
          <Link
            className="flex items-center gap-2.5 md:gap-4 font-medium text-2xl"
            href={"/"}
          >
            <Image
              className="md:w-[60px] md:h-auto"
              width={30}
              height={30}
              alt="logo"
              src={"/logo.png"}
              quality={100}
            />
            <h2 className="bg-gradient-to-br from-amber-800 to-lime-400 font-medium md:text-3xl bg-clip-text text-transparent">
              স্বস্তির ছায়া
            </h2>
          </Link>
        </div>

        <div className="w-full">
          <h2 className="text-center  text-xl md:text-2xl xl:text-3xl font-semibold mb-3">কুইক লিংক</h2>
          <div className="w-full grid grid-cols-2 place-items-center gap-y-2 md:text-xl md:gap-y-4 grid-rows-2 font-medium">
            <Link className="duration-300 hover:text-orange-400" href={"/"}>
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
        <div className=" w-full h-auto grid place-items-center gap-y-1 mt-2 font-medium">
          <h2 className="text-center  text-xl md:text-2xl xl:text-3xl font-semibold mb-3">যোগাযোগ</h2>
            <div className="">
              <p className="">ইমেইল: shadowofalleviation0706@gmail.com</p>
            </div>
            <div className="">
              <p className="">পেইজ: Shadow of Alleviation (স্বস্তির ছায়া)</p>
            </div>
            
        </div>
        <span className="mt-6 text-sm font-semibold">কপিরাইট ©2023 স্বস্তির ছায়া। সর্বস্বত্ব সংরক্ষিত।</span>
      </div>
    </div>
  );
};

export default Footer;
// কুইক লিংক
// কপিরাইট ©2023 স্বস্তির ছায়া। সর্বস্বত্ব সংরক্ষিত।
