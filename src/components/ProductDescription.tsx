import React from "react";

const carFinancingFeatures = [
  {
    id: 1,
    message:
      "Interest as low as 1.5% per month with daily calculation of interest",
  },
  {
    id: 2,
    message: "Financing up to 70% of the vehicle purchase",
  },
  {
    id: 3,
    message:
      "Financing period up to 90 days with a flexible repayment schedule at any point",
  },
];

const dealershipManagementData = [
  {
    id: 1,
    header: "Inventory Management",
    message:
      "Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.",
  },
  {
    id: 2,
    header: "Marketing Tools",
    message:
      "Promote your cars across all platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click of a button",
  },
  {
    id: 3,
    header: "Marketing Insights (Coming Soon)",
    message:
      "Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining information from various sources with a single click.",
  },
];

const ProductDescription = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row bg-gray-50 sm:pt-8 py-5 pb-4 px-4 sm:px-0">
        <div className="flex-none order-2 sm:order-1 mb-4 sm:mb-0 md:pt-16">
          <img
            alt="Left Image"
            fetchPriority="high"
            width="750"
            height="580"
            decoding="async"
            data-nimg="1"
            className="mx-auto"
            style={{ color: "transparent" }}
            src="https://www.onelot.ph/_next/image?url=%2Fcar-financing-pic.png&w=828&q=75"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <div className="w-full md:w-3/4 md:ml-20 md:pt-6">
            <div className="py-3 sm:py-0">
              <p className="text-black text-2xl sm:text-3xl md:text-4xl font-black">
                Car Financing
              </p>
              <p className="text-black text-base sm:text-lg md:text-xl font-semibold my-4">
                Dealer Loans
              </p>
              <p className="text-gray-500 font-normal text-sm sm:text-base md:text-xl xl:leading-normal">
                OneLot’s working capital loans allow car dealers to buy more
                cars and capitalize on car purchase opportunities you would
                otherwise have missed. We transfer the money to your account
                within 6 hours.
              </p>
              <hr className="my-8" />
              <div className="font-medium text-black">
                {carFinancingFeatures?.map((item) => (
                  <div className="flex items-center mb-4" key={item.id}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="mr-2 flex-shrink-0"
                      style={{ color: "#c3b6d1" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                    </svg>
                    <p className="text-sm sm:text-base">{item.message}</p>
                  </div>
                ))}
              </div>
              <hr className="my-8" />
              <p className="text-gray-500 font-normal text-sm sm:text-base md:text-xl xl:leading-normal">
                Use OneLot's financing solution today, grow the number of cars
                in your lot, and increase your profits.
              </p>
            </div>
            <button
              type="button"
              className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none text-white bg-primaryPurple border border-transparent focus:ring-0 focus:ring-transparent rounded-lg mt-8 mb-4 sm:mb-0"
            >
              <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
                <a href="/products/dealer-inventory-loans">View Loans -&gt;</a>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-gray-50 sm:pt-16 sm:pb-8 py-5 pb-4 px-4 sm:px-0">
        <div className="flex-1 order-1 md:order-2">
          <div className="w-full md:w-3/4 md:ml-20">
            <div>
              <p className="text-black text-2xl sm:text-3xl md:text-4xl font-extrabold sm:w-5/6 mb-4">
                Dealership Management System
              </p>
              <p className="text-gray-500 font-normal text-sm sm:text-base md:text-xl xl:leading-normal">
                OneLot’s digital platform is built with a single goal: to help
                used car dealers operate their business more efficiently.
              </p>
              <hr className="my-8" />
              <div className="font-medium">
                {dealershipManagementData?.map((item) => (
                  <div className="flex items-center mb-4" key={item.id}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="mr-2 flex-shrink-0"
                      style={{ color: "#c3b6d1" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    <p className="text-sm sm:text-base">
                      <span className="font-bold">{item.header}:</span>{" "}
                      {item.message}
                    </p>
                  </div>
                ))}
              </div>
              <hr className="my-8" />
              <p className="text-gray-500 font-normal text-sm sm:text-base md:text-xl xl:leading-normal">
                Sign up for OneLot's dealer platform today, and make managing
                your cars easier.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none text-white bg-primaryPurple border border-transparent focus:ring-0 focus:ring-transparent rounded-lg mt-6 mb-4 sm:mb-0 md:ml-20"
          >
            <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
              <a href="/products/dealer-management-system">Explore Now -&gt;</a>
            </span>
          </button>
        </div>
        <div className="flex-none order-3 md:order-3 md:pt-8">
          <img
            alt="Right Image"
            fetchPriority="high"
            width="800"
            height="580"
            decoding="async"
            data-nimg="1"
            className="mx-auto"
            style={{ color: "transparent" }}
            src="https://www.onelot.ph/dealership-management-system-pic.svg"
          />
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
