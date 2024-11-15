"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ProfilePic from "../assets/profilePic.jpg";

const Testimonials = () => {
  const mapArray = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="bg-secondaryBackground px-8 py-20">
      <p className="text-4xl font-black mb-8 text-center text-black">
        Testimonials
      </p>
      <div className="relative mb-8">
        <Carousel
          opts={{
            align: "start", // Aligns items to the start
            loop: true, // Enables infinite looping
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
        >
          <CarouselContent className="md:gap-8">
            {mapArray.map((item, index) => (
              <CarouselItem className="sm:pl-20 md:pl-0" key={index}>
                <div className="mx-auto flex flex-col items-center">
                  <Image
                    src={ProfilePic}
                    height={100}
                    width={100}
                    alt="carousel-image"
                    className="shadow-lg rounded-full"
                  />
                  <h4 className="md:w-2/3 text-black font-semibold md:text-2xl text-center my-6">
                    "The service of OneLot is top notch, they act fast and can
                    provide dealers with funds they need, when they need it."
                  </h4>
                  <p className="text-center sm:w-1/4 w-2/3 text-base md:text-base">
                    Mark Vergel de Dios{" "}
                  </p>
                  <p className="text-gray-500 md:pl-3">Owner, MVD Auto Works</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Centered Navigation Buttons */}
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4">
            <CarouselPrevious className="bg-secondaryBackground rounded-full hover:bg-opacity-90 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </CarouselPrevious>
            <CarouselNext className="bg-secondaryBackground rounded-full hover:bg-opacity-90 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
