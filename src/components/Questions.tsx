import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questionsData = [
  {
    id: "item-1",
    question: "How do I apply for the loan?",
    answer: (
      <>
        OneLot onboarding is easy and straightforward onboarding process. We
        only require few documents and after few days you can get your first
        loan.
        <br />
        <br />
        Check here for exact requirements{" "}
        <span className="text-primaryPurple">See full requirements</span>.
      </>
    ),
  },
  {
    id: "item-2",
    question: "What are the interest rates offered?",
    answer: (
      <>
        OneLot onboarding is easy and straightforward onboarding process. We
        only require few documents and after few days you can get your first
        loan.
        <br />
        <br />
        Check here for exact requirements{" "}
        <span className="text-primaryPurple">See full requirements</span>.
      </>
    ),
  },
  {
    id: "item-3",
    question: "What kinds of vehicles can I upload?",
    answer: (
      <>
        OneLot onboarding is easy and straightforward onboarding process. We
        only require few documents and after few days you can get your first
        loan.
        <br />
        <br />
        Check here for exact requirements{" "}
        <span className="text-primaryPurple">See full requirements</span>.
      </>
    ),
  },
  {
    id: "item-4",
    question: "How can I keep track of potential buyers?",
    answer: (
      <>
        OneLot onboarding is easy and straightforward onboarding process. We
        only require few documents and after few days you can get your first
        loan.
        <br />
        <br />
        Check here for exact requirements{" "}
        <span className="text-primaryPurple">See full requirements</span>.
      </>
    ),
  },
];

const Questions = () => {
  return (
    <div className="bg-secondaryBackground px-8 py-20">
      <p className="text-4xl font-black mb-8 text-center text-black">
        Frequently Asked Questions
      </p>
      <div className="mx-auto sm:w-1/2 w-full">
        <Accordion type="single" collapsible className="w-full">
          {questionsData.map(({ id, question, answer }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger className="text-base md:text-xl hover:no-underline">
                <div className="flex">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-2 mt-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                  </svg>
                  <p>{question}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-base font-normal text-gray-500">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none text-white bg-primaryPurple border border-transparent focus:ring-0 focus:ring-transparent rounded-lg mt-6 mb-4 sm:mb-0"
        >
          <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
            <a href="/products/dealer-management-system">See All -&gt;</a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Questions;
