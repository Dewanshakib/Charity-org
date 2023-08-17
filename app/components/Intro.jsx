"use client"
import Image from "next/image";
import Link from "next/link";
import {motion as m} from "framer-motion"



const Intro = () => {
  return (
    <div>
      <div className="w-full duration-500 transform transition-all h-auto items-center gap-3 md:gap-6 flex flex-col justify-between md:flex-row-reverse md:items-center  mb-9">
        <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className=" w-full">
          <Image
            className="rounded-xl"
            src={"/intro.png"}
            alt="Two heart shape earth in between two hands"
            width={1200}
            height={1200}
            quality={100}
            layout="responsive"
          />
        </m.div>
        <div className="w-full p-3 lg:px-6 3xl:pt-24 lg:pt-7 xl:pt-12 2xl:pt-16 2xl:px-8 mb-auto 3xl:px-16">
          <p className="bg-gradient-to-tl bg-clip-text text-transparent from-purple-500 to-blue-500 mb-3 text-[24px] lg:text-[28px] sm:text-[27px] md:text-[28px] font-semibold xl:text-[34px]  2xl:text-[40px] 3xl:text-[50px]">
            স্বস্তির ছায়া
          </p>
          <h2 className="text-[16px] mb-4 font-medium lg:text-[19px] sm:text-[19px] md:text-[17px] text-gray-800 leading-[32px] md:leading-[28px] lg:leading-[32px] xl:text-[23px] xl:leading-[40px] 2xl:text-[24px] 2xl:leading-[48px] 3xl:text-[30px] 3xl:leading-[60px]">
            আলোকিত জীবনের জন্য নিবেদিত, স্বস্তির ছায়া একটি আশার বাতিঘর, শিক্ষা,
            স্বাস্থ্যসেবা, এবং সুবিধাবঞ্চিত সম্প্রদায়ের জন্য জীবিকা বাড়াতে
            প্রতিশ্রুতিবদ্ধ। একটি উজ্জ্বল, আরও ন্যায়সঙ্গত ভবিষ্যতের জন্য আমাদের
            মিশনে আমাদের সাথে যোগ দিন।
          </h2>
          <button>
            <Link href="/register" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-4 py-2 2xl:px-5 2xl:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-4 py-2 2xl:px-5 2xl:py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-1 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-10 2xl:tranlate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative text-[15px] 2xl:text-lg">যোগ দিন</span>
              </span>
              <span
                className="absolute bottom-0  right-0 w-full h-11 2xl:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              ></span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
