import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-8">
      <h2
        className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent text-4xl xl:text-5xl 
      2xl:text-6xl  3xl:text-7xl  font-bold from-orange-700 to-cyan-400 text-center pt-2 mb-8"
      >
        কন্টাক্ট ফর্ম
      </h2>
      <form
        method="POST"
        action="https://formspree.io/f/xzblekjo"
        className="w-full mx-auto max-w-4xl"
      >
        <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between">
          <input
            className="w-full py-2  md:py-4 md:pl-6 pl-4 rounded-md"
            type="text"
            placeholder="আপনার নাম লিখুন"
            name="name"
            required
          />
          <input
            className="w-full py-2 md:py-4 md:pl-6 pl-4 rounded-md"
            type="text"
            placeholder="আপনার ইমেইল লিখুন"
            name="email"
            required
          />
        </div>
        <textarea
          name="message"
          required
          placeholder="আপনার তথ্য লিখুন"
          className="resize-none rounded-md mt-4 w-full p-3 md:p-6 min-h-[150px]"
        ></textarea>

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
            বার্তা পাঠান
          </span>
          <span className="relative invisible">বার্তা পাঠান</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
