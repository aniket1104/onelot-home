import React from "react";

const ProductInventory = () => {
  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 px-4 sm:px-8 md:px-16 py-8">
      <div className="sm:pr-8 md:pr-20 md:pl-8 sm:pt-16 sm:pb-8 mx-auto mb-8 pb-4 border-b border-gray-300 sm:border-none">
        <div className="md:pl-0">
          <p className="text-black text-2xl sm:text-3xl md:text-4xl font-black xl:leading-tight">
            Everything You Need to Grow Your Business
          </p>
          <p className="text-gray-500 text-sm sm:text-base md:text-xl mt-4 sm:mt-6 font-normal">
            OneLot is your trusted lending and financing partner, exclusively
            tailored for used car dealerships. We also offer digital tools for
            streamlined operations and growth of your dealership.
          </p>
          <button className="text-primaryPurple font-medium sm:text-base md:text-lg mt-4 mb-4 md:mb-0 md:mt-2 md:font-normal">
            Learn More &rarr;
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8 sm:gap-6 md:gap-4 sm:pt-16 sm:pb-8">
        <div>
          <div className="flex items-center">
            <img
              alt="Dealer Inventory Loans Icon"
              loading="lazy"
              width="35"
              height="60"
              decoding="async"
              className="mr-1"
              style={{ color: "transparent" }}
              src="https://www.onelot.ph/dealer-loans-icon.svg"
            />
            <p className="text-lg sm:text-xl font-bold">
              Dealer Inventory Loans
            </p>
          </div>
          <p className="text-[#7E3AF2] font-medium sm:ml-10 my-2 pr-4 sm:pr-0">
            Accelerate your growth with tailored loan solutions.
          </p>
          <p className="text-gray-500 sm:ml-10 mb-4 text-sm sm:text-base md:pr-20 pr-8">
            Get comprehensive car financing solutions, unlock the potential of
            your dealership, and take it to new heights.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <img
              alt="Dealership Management System Icon"
              loading="lazy"
              width="35"
              height="60"
              decoding="async"
              className="mr-1"
              style={{ color: "transparent" }}
              src="https://www.onelot.ph/dealer-loans-icon.svg"
            />
            <p className="text-lg sm:text-xl font-bold">
              Dealership Management System
            </p>
          </div>
          <p className="text-[#7E3AF2] font-medium sm:ml-10 my-2 sm:pr-0 pr-4">
            Enhance Efficiency and Sales with Free Digital Tools for Car
            Dealerships.
          </p>
          <p className="text-gray-500 sm:ml-10 mb-4 text-sm sm:text-base md:pr-20 pr-8">
            OneLot offers a suite of powerful digital tools designed to optimize
            your dealership&#39;s operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInventory;
