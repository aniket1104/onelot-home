import { WHY_FEATURES } from "@/utils/constants";
import React from "react";

interface Feature {
  title: string;
  description: string;
  image: string;
}

const WhyOnelot = () => {
  return (
    <div className="bg-white text-center px-16 sm:py-24 py-8">
      <p className="text-4xl font-extrabold mb-8">Why Onelot?</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
        {WHY_FEATURES.map((feature: Feature, index: number) => (
          <div
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800 flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-60 shadow-md"
          >
            <div className="flex h-full flex-col justify-center p-3">
              <div className=" flex items-center justify-center mb-0">
                <img
                  alt={feature.title}
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  src={feature.image}
                />
              </div>
              <div className="flex flex-col gap-3 justify-center items-center p-0 w-full">
                <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
                  {feature.title}
                </p>
                <p className="text-sm md:text-base text-gray-500 text-center h-1/3 px-4">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyOnelot;
