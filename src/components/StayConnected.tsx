"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import CarouselImage from "@/assets/carouselImage.png";

const StayConnected = () => {
  const mapArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div className="bg-white pt-10">
        <div className="text-center px-8 py-14">
          <p className="text-4xl font-black mb-8">Stay Connected</p>
          <p className="text-gray-500 font-normal sm:w-1/2 mx-auto md:text-xl text-base">
            Follow OneLot on Facebook and Instagram to stay up to date with our
            most recent latest offers, updates, and new product features.
          </p>
          <div className="flex flex-col sm:flex-row justify-center px-6 my-8">
            {/* Facebook Button */}
            <button
              type="button"
              className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none focus:ring-0 focus:ring-transparent rounded-lg border border-black mb-4 sm:mb-0 sm:mr-3"
            >
              <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
                <a
                  href="https://www.facebook.com/OneLotPH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="w-4 h-6 hover:text-[#57009C]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                  <p className="font-medium ml-2">Follow us on Facebook</p>
                </a>
              </span>
            </button>

            {/* Instagram Button */}
            <button
              type="button"
              className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none focus:ring-0 focus:ring-transparent rounded-lg border border-black"
            >
              <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
                <a
                  href="https://www.instagram.com/onelot.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 hover:text-[#57009C]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <p className="font-medium ml-2">Follow us on Instagram</p>
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <Carousel
          opts={{
            align: "start", // Aligns items to the start
            loop: true, // Enables infinite looping
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="md:gap-8">
            {mapArray.map((item, index) => (
              <CarouselItem
                className="xl:basis-1/5 md:basis-1/3 sm:basis-1 pl-20 md:pl-0"
                key={index}
              >
                <Image
                  src={CarouselImage}
                  height={200}
                  width={300}
                  alt="carousel-image"
                  className="shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation buttons are intentionally commented out */}
        </Carousel>
      </div>
    </>
  );
};

export default StayConnected;
