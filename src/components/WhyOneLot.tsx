import React from "react";

const WhyOnelot = () => {
  const features = [
    {
      title: "Trust",
      description:
        "Regulated by Securities and Exchange Commission (SEC) Philippines",
      image: "https://www.onelot.ph/trust.svg",
    },
    {
      title: "High Amount",
      description:
        "Get the highest loan amounts compared to other banks and lenders",
      image: "https://www.onelot.ph/high_amount.svg",
    },
    {
      title: "Fast",
      description: "Get the money within a few hours on the same day",
      image: "https://www.onelot.ph/fast.svg",
    },
    {
      title: "Flexible",
      description: "Loans are tailored to your needs",
      image: "https://www.onelot.ph/flexible.svg",
    },
    {
      title: "Easy",
      description:
        "Run through an easy process and get your first loans within days",
      image: "https://www.onelot.ph/easy.svg",
    },
  ];

  return (
    <div className="bg-white text-center px-16 sm:py-24 py-8">
      <p className="text-4xl font-extrabold mb-8">Why Onelot?</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
        {features.map((feature, index) => (
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
