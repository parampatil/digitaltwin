import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ToggleTheme from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import ProfileDrop from "./ProfileDrop";

const Navbar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`w-full h-20 dark:bg-gradient-to-r from-blue-900 via-purple-900 to-black shadow-lg sticky top-0`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="text-white text-2xl font-bold rounded-lg shadow p-2">
              <Link href="/">Digital Twin</Link>
            </div>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li
                className={`${
                  pathname === "/"
                    ? "text-yellow-300"
                    : "hover:text-gray-400 transition-colors duration-300"
                }`}
              >
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/about"
                    ? "text-yellow-300"
                    : "hover:text-gray-400 transition-colors duration-300"
                }`}
              >
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/projects"
                    ? "text-yellow-300"
                    : "hover:text-gray-400 transition-colors duration-300"
                }`}
              >
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/contacts"
                    ? "text-yellow-300"
                    : "hover:text-gray-400 transition-colors duration-300"
                }`}
              >
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/login"
                    ? "text-yellow-300"
                    : "hover:text-gray-400 transition-colors duration-300"
                }`}
              >
                <Link href="/login">
                  <p>Login</p>
                </Link>
              </li>
            </ul>
            <div className="flex items-center">
              <SocialLinks />
              <ToggleTheme />
              <ProfileDrop />
              <button
                type="button"
                className="mx-2 inline-flex items-center md:hidden relative group"
                onClick={toggle}
              >
                {/* Menu icon */}
                <div data-modal-target="default-modal" data-modal-toggle="default-modal" className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                    <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                    <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                      <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                      <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                    </div>
                  </div>
                </div>
              </button>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
