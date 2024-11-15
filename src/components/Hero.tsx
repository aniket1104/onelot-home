import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-white text-center mt-12 sm:mt-24">
        <p className="sm:text-5xl text-3xl sm:mb-8 mb-4 font-black xl:leading-tight px-4 sm:px-20 xl:px-20 text-black">
          Grow your dealership with working capital loans and <br /> digital
          tools from OneLot.
        </p>
        <p className="text-gray-500 font-normal xl:leading-normal px-4 sm:px-20 2xl:px-20 sm:w-2/3 2xl:w-2/3 mx-auto sm:text-xl">
          We enable dealers to buy more cars through our working capital loan
          solutions and sell cars more efficiently through our Dealership
          Management System with its inventory management, marketing solutions
          and market insights
        </p>
        <button
          type="button"
          className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none text-white bg-primaryPurple border border-transparent focus:ring-0 focus:ring-transparent rounded-lg mx-auto mt-6 mb-5"
        >
          <span className="flex items-stretch transition-all duration-200 rounded-md px-5 py-3 text-base">
            <a href="/app/signup/dealer">Inquire Now</a>
          </span>
        </button>
        <div className="relative bg-secondaryBackground">
          {/* White Background for Top Half */}
          <div className="absolute inset-0 bg-white h-1/2 w-full z-10"></div>

          {/* Image */}
          <img
            alt="home hero"
            fetchPriority="high"
            width="1300"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="mx-auto relative z-20"
            src="https://www.onelot.ph/_next/image?url=%2Fhero.png&w=1920&q=75"
          />
        </div>
        <div className="py-8 bg-secondaryBackground">
          <p className="text-gray-500 text-lg">Regulated by</p>
          <img
            alt="sec"
            fetchPriority="high"
            width="180"
            height="100"
            decoding="async"
            data-nimg="1"
            className="mx-auto"
            src="https://www.onelot.ph/sec.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
