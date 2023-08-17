"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [number, setNumber] = useState("");
  const [className, setClassName] = useState("");
  const [studying, setStudying] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        fatherName,
        motherName,
        birthDate,
        number,
        className,
        studying,
      }),
    });
    if (res.ok) {
      
      console.log("Submitted");
      // router.push("/");
      notify();
      setName("");
      setFatherName("");
      setMotherName("");
      setBirthDate("");
      setNumber("");
      setClassName("");
      setStudying("");
      setTimeout(gotoHome,5000)
    }
    return;
  };

  const gotoHome = () => {
    router.push("/");
  }

  const notify = () => toast("অভিনন্দন এখন আপনি স্বস্তির ছায়ার একজন সদস্য");

  return (
    <div className="w-full h-auto bg-gradient-to-r from-rose-100 to-teal-100  grid grid-rows-1 md:grid-cols-2">
      <div className="w-full h-auto md:hidden">
        <Image
          width={2000}
          height={2000}
          className="w-full h-full opacity-0 duration-[2s]"
          src={"/mobile-m.png"}
          alt="Register background mobile"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div className="w-full md:h-screen ">
        <Image
          width={2000}
          height={2000}
          className="w-full h-full hidden md:block opacity-0 duration-[2s]"
          src={"/register-d.png"}
          alt="Register background mobile"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div className="w-full px-5 pb-4 md:pt-10 md:px-8">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-orange-700 to-cyan-400 md:text-3xl xl:text-4xl text-center mt-6">
          রেজিস্ট্রেশন ফর্ম
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col font-medium gap-1"
        >
          <label htmlFor="name">নাম</label>
          <input
            required
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="নাম লিখুন"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">পিতার নাম</label>
          <input
            required
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="পিতার নাম লিখুন"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
          <label htmlFor="name">মাতার নাম</label>
          <input
            required
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="মাতার নাম লিখুন"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />
          <label htmlFor="name">জন্ম তারিখ</label>
          <input
            required
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <label htmlFor="name">ফোন নম্বর</label>
          <input
            required
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="number"
            placeholder="ফোন নম্বর দিন"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label htmlFor="name">কোন ক্লাস / কলেজ / ইউনিভার্সিটি</label>
          <input
            required
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="কোন ক্লাস / কলেজ / ইউনিভার্সিটি লিখুন"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <label htmlFor="name">প্রতিষ্ঠান</label>
          <input
            required
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="প্রতিষ্ঠানের নাম লিখুন"
            value={studying}
            onChange={(e) => setStudying(e.target.value)}
          />
          <button
            type="submit"
            className="relative inline-flex mt-4 items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              রেজিস্টার
            </span>
            <span className="relative invisible">রেজিস্টার</span>
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Register;
