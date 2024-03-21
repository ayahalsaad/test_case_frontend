"use client";
import React, { useState } from "react";

export default function WebsiteNavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="top-0 z-30 w-full  sm:fixed backdrop-blur bh-zinc-900/50">
      <nav className="fixed w-full z-20 top-0 start-0 border-b  bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex">
            <a href="/">
              <div>
                <img src="pwc.svg" className="h-11" alt="PwC Logo" />
              </div>
            </a>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 bg-colorOne rounded font-SecondaryFont hover:text-colorNine md:bg-transparent md:text- md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="block py-2 bg-colorOne rounded font-SecondaryFont hover:text-colorNine md:bg-transparent md:p-0"
                >
                  Services
                </button>
                {dropdownOpen && (
                  <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="none">
                      <a
                        href="/uploadFile"
                        className="text-gray-700 block px-4 py-2 text-sm text-black font-SecondaryFont hover:text-colorNine"
                        role="menuitem"
                      >
                        Generate Test Cases
                      </a>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
