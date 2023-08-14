"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const Member = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div id="members" className="slider mx-auto">
      <h2
        className="w-full bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent text-4xl xl:text-5xl 
      2xl:text-6xl  3xl:text-7xl  font-bold from-orange-700 to-cyan-400 text-center pt-2 mb-8"
      >
        স্বস্তির ছায়ার অফিসিয়াল সদস্যগন
      </h2>
      <div className="slider-tracker ">
        {data.map((member, index) => (
          <div
            key={index}
            className="slide  outline-dotted pt-7 px-4  relative rounded-2xl  min-w-[300px]"
          >
            <div className="px-4 py-2">
              <Image
                className="rounded-full pointer-events-none  w-full ring-2 ring-blue-500 ring-offset-2"
                alt="member image"
                src={`/${member.image}`}
                width={2000}
                height={2000}
              />
            </div>
            <div className="w-full text-center h-[116px] py-2">
              <h2 className="font-semibold mb-1">{member.name}</h2>
              <h2 className="font-medium mb-1">{member.position}</h2>
              <h2 className="font-medium text-sm">{member.institution}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
