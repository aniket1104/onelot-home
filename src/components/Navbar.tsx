"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4">
      <div className="mx-auto flex flex-wrap items-center">
        <a className="flex items-center" href="/">
          <img
            alt="OneLot Logo"
            loading="lazy"
            width="150"
            height="50"
            decoding="async"
            className="mr-5"
            src="https://www.onelot.ph/_next/image?url=%2Flogo.png&w=128&q=75"
          />
        </a>
        <div className="flex md:order-2 ml-auto">
          <a
            href="/app/login"
            className="group relative items-stretch justify-center p-0.5 text-center font-medium hidden sm:inline text-gray-700 hover:text-[#57009C]"
          >
            <span className="flex items-stretch px-4 py-2 text-sm">Login</span>
          </a>
          <button
            type="button"
            className="group relative items-stretch justify-center p-0.5 text-center font-medium text-white bg-primaryPurple border hidden sm:inline hover:bg-[#57009C] rounded-lg"
          >
            <span className="flex items-stretch px-4 py-2 text-sm">
              <a href="/app/signup/dealer">Inquire Now</a>
            </span>
          </button>
          {/* Hamburger button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              aria-hidden="true"
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } ml-2`}
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-base md:font-medium">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 md:p-0 text-[#3600D1] font-medium"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/product"
                className="block py-2 pl-3 pr-4 md:p-0 font-medium text-gray-700 hover:text-[#57009C]"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 md:p-0 font-medium text-gray-700 hover:text-[#57009C]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 pl-3 pr-4 md:p-0 font-medium text-gray-700 hover:text-[#57009C]"
              >
                Contact
              </a>
            </li>
            <li className="sm:hidden">
              <button
                type="button"
                className="group relative flex items-stretch justify-center p-0.5 text-center font-medium text-white bg-[#3600D1] border w-full my-4 hover:bg-[#57009C] rounded-lg"
              >
                <span className="flex items-stretch px-4 py-2 text-sm">
                  <a href="/contact">Inquire Now</a>
                </span>
              </button>
              <a
                href="/app/login"
                className="group relative flex items-stretch justify-center p-0.5 text-center font-medium w-full text-gray-700"
              >
                <span className="flex items-stretch px-4 py-2 text-sm">
                  Login
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
