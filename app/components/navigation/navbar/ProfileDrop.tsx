import React from "react";

import { CgProfile } from "react-icons/cg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfileDrop = () => {
  return (
    <div className="flex items-center">
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            <CgProfile className="w-full h-full p-1"></CgProfile>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>

    // <div className="ml-3 border rounded-full p-2 hover:border-yellow-300 hover:text-blue-600 dark:hover:text-blue-500">
    //   <button
    //     id="dropdownAvatarNameButton"
    //     data-dropdown-toggle="dropdownAvatarName"
    //     className="flex items-center text-sm pe-1 font-medium text-blac rounded-full md:me-0  0 dark:focus:ring-gray-700 dark:text-white"
    //     type="button"
    //   >
    //     <span className="sr-only">Open user menu</span>
    // <Avatar>
    //   <AvatarImage src="https://github.com/shadcn.png" />
    //   <AvatarFallback>
    //     <CgProfile className="w-full h-full p-1"></CgProfile>
    //   </AvatarFallback>
    // </Avatar>
    //     Param Patil
    //     <svg
    //       className="w-5 h-5 ms-3"
    //       aria-hidden="true"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 10 6"
    //     >
    //       <path
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="m1 1 4 4 4-4"
    //       />
    //     </svg>
    //   </button>

    //   {/* Dropdown Menu */}
    //   <div
    //     id="dropdownAvatarName"
    //     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    //   >
    //     <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
    //       <div className="font-medium ">Pro User</div>
    //       <div className="truncate">name@flowbite.com</div>
    //     </div>
    //     <ul
    //       className="py-2 text-sm text-gray-700 dark:text-gray-200"
    //       aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
    //     >
    //       <li>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //         >
    //           Dashboard
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //         >
    //           Settings
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //         >
    //           Earnings
    //         </a>
    //       </li>
    //     </ul>
    //     <div className="py-2">
    //       <a
    //         href="#"
    //         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //       >
    //         Sign out
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProfileDrop;
