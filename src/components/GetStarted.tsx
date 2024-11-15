import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-white">
      <div className="text-center px-8 py-20 flex flex-col justify-center items-center">
        <p className="text-3xl sm:text-4xl font-black mb-8 mt-4">
          Get Started Today
        </p>
        <p className="text-xl font-normal text-gray-500 sm:w-1/2 mx-auto">
          We look forward to serving the needs of used car dealers across the
          Philippines and helping them thrive in this dynamic market.
        </p>
        <button
          type="button"
          className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none text-white bg-primaryPurple border border-transparent focus:ring-0 focus:ring-transparent rounded-lg mx-auto mt-6 mb-5"
        >
          <span className="flex items-stretch transition-all duration-200 rounded-md px-5 py-3 text-base">
            <a href="#">Inquire Now</a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
