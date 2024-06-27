import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ToggleTheme from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import ProfileDrop from "./ProfileDrop";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 bg-white z-50">
      <div
        className={`w-full h-20 dark:bg-gradient-to-r from-blue-900 via-purple-900 to-black shadow-lg sticky top-0 dark:shadow-indigo-500/50`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="text-black dark:text-white text-2xl font-bold p-2">
              <Link href="/">Building A Mind</Link>
            </div>
            <ul className="hidden md:flex gap-x-6 text-black dark:text-white">
              <li
                className={`${
                  pathname === "/"
                    ? "text-amber-500"
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
                    ? "text-amber-500"
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
                    ? "text-amber-500"
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
                    ? "text-amber-500"
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
                    ? "text-amber-500"
                    : "hover:text-gray-400 transition-colors duration-300"
                }`}
              >
                <Link href="/login">
                  <p>Login</p>
                </Link>
              </li>
            </ul>
            <div className="w-1/4 flex justify-end">
              <div className="hidden md:flex w-full justify-around items-center">
                <SocialLinks />
                <ToggleTheme />
                <ProfileDrop />
              </div>

              <Sheet>
                <SheetTrigger>
                  <svg
                    className="md:hidden mx-2 my-auto hover:scale-90 transition-all duration-300 dark:invert"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                  >
                    <rect width="100" height="20" rx="10"></rect>
                    <rect y="30" width="100" height="20" rx="10"></rect>
                    <rect y="60" width="100" height="20" rx="10"></rect>
                  </svg>
                </SheetTrigger>
                <SheetContent className="w-9/12 flex flex-col justify-between" side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex justify-between pe-5">
                        <h1 className="text-center my-auto">Building A Mind</h1>
                        <ProfileDrop />
                      </div>
                    </SheetTitle>
                    <SheetDescription>
                      <ul className="text-lg">
                        <li
                          className={`${
                            pathname === "/"
                              ? "text-amber-500"
                              : "hover:text-slate-700 transition-colors duration-300"
                          }`}
                        >
                          <Link href="/">
                            <p>Home</p>
                          </Link>
                        </li>
                        <li
                          className={`${
                            pathname === "/about"
                              ? "text-amber-500"
                              : "hover:text-slate-700 transition-colors duration-300"
                          }`}
                        >
                          <Link href="/about">
                            <p>About Us</p>
                          </Link>
                        </li>
                        <li
                          className={`${
                            pathname === "/projects"
                              ? "text-amber-500"
                              : "hover:text-slate-700 transition-colors duration-300"
                          }`}
                        >
                          <Link href="/projects">
                            <p>Projects</p>
                          </Link>
                        </li>
                        <li
                          className={`${
                            pathname === "/contacts"
                              ? "text-amber-500"
                              : "hover:text-slate-700 transition-colors duration-300"
                          }`}
                        >
                          <Link href="/contacts">
                            <p>Contacts</p>
                          </Link>
                        </li>
                        <li
                          className={`${
                            pathname === "/login"
                              ? "text-amber-500"
                              : "hover:text-slate-700 transition-colors duration-300"
                          }`}
                        >
                          <Link href="/login">
                            <p>Login</p>
                          </Link>
                        </li>
                      </ul>
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex justify-between bottom-0">
                    <ToggleTheme />
                    <SocialLinks />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
