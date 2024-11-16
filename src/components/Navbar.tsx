"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NAVIGATION_LINKS } from "@/utils/constants";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4">
      <div className="mx-auto flex flex-wrap items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            alt="OneLot Logo"
            loading="lazy"
            width="150"
            height="50"
            decoding="async"
            className="mr-5"
            src="https://www.onelot.ph/_next/image?url=%2Flogo.png&w=128&q=75"
          />
        </Link>

        {/* Right-side Buttons */}
        <div className="flex ml-auto md:order-2">
          {/* Login Button */}
          <Link
            href="/app/login"
            className="hidden sm:inline text-black hover:text-[#57009C] sm:mt-1 font-medium"
          >
            <span className="px-4 py-2 text-sm">Login</span>
          </Link>

          {/* Inquire Now Button */}
          <Link
            href="/app/signup/dealer"
            className="hidden sm:inline text-white bg-primaryPurple hover:bg-[#57009C] font-medium px-4 py-2 text-sm rounded-lg ml-2"
          >
            Inquire Now
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } ml-2`}
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-base md:font-medium">
            {NAVIGATION_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-[#57009C] font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile-specific Buttons */}
            <li className="sm:hidden">
              <Link
                href="/app/signup/dealer"
                className="flex items-center justify-center w-full py-2 my-2 text-white bg-primaryPurple hover:bg-[#57009C] rounded-lg"
              >
                Inquire Now
              </Link>
              <Link
                href="/app/login"
                className="flex items-center justify-center w-full py-2 text-gray-700 hover:text-[#57009C]"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
