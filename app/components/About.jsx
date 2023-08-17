"use client"
import Image from "next/image";
import React from "react";
import {motion as m} from "framer-motion"

const About = () => {
  return (
    <div className="mb-4"  id="about">
      <h2 className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent text-4xl xl:text-5xl 
      2xl:text-6xl  3xl:text-7xl  font-bold from-orange-700 to-cyan-400 text-center pt-2 mb-8">
        স্বস্তির ছায়ার পরিচয়
      </h2>

      <div className="w-full h-auto  md:py-6 flex flex-col items-start justify-between md:flex-row">
        <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full">
          <Image
            className="w-full rounded-lg"
            quality={100}
            layout="responsive"
            alt="showing two heart shaped earth in between two hands"
            src={"/about.png"}
            width={2000}
            height={2000}

          />
        </m.div>
        <div className="md:ml-10 mt-6 md:mt-0 md:px-6 w-full">
          <h1 className="w-full  text-base leading-[34px] mb-4 font-medium lg:text-[19px] sm:text-[19px] md:text-[17px] text-gray-800 sm:leading-[38px] md:leading-[28px] lg:leading-[32px] xl:text-[23px] xl:leading-[40px] 2xl:text-[24px] 2xl:leading-[48px] 3xl:text-[30px] 3xl:leading-[60px]">
            স্বস্তির ছায়া এখানে, আমরা একটি গুণমুদ্রিত কলেজ ছাত্র-ছাত্রীদের
            গোষ্ঠী, একটি যোগকৃত লক্ষ্যে উন্মুক্ত এবং স্থায়ী পরিবর্তন উত্তেজনা
            করা সকলের জন্য একটি উজ্জ্বল ভবিষ্যৎ তৈরি করার। সহানুভূতি এবং শিক্ষার
            জন্য একটি আগ্রহে প্রেরিত, আমরা সম্পর্কটির ফাব্রিকে আশার কোপাল
            বুঁকানোর মাধ্যমে সমাজে আশা বুকে সেপেটাই। শিক্ষান, সম্প্রদায়
            প্রবর্তন, পরিবেশ উদ্যোগ, এবং স্বাস্থ্য প্রোগ্রামের মাধ্যমে আমরা
            আমাদের সমাজের ফাব্রিকে আশার সুতা মাকান করতে চেষ্টা করি। যুব-শক্তি ও
            দৃশ্যতা, আমরা ছোট কাজগুলি বড় প্রভাবে পরিণত করার প্রমাণ দিতে এখানে
            আছি।
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
