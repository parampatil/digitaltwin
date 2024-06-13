import React from "react";

const Contacts = () => {
  return (
    <div className="flex flex-grow w-full justify-center items-center">
      <div className="z-[-1] before:absolute before:h-[300px] before:w-full  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-500 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex justify-between max-w-md p-1 bg-white shadow-lg rounded-full overflow-hidden mx-auto">
          <input
            type="text"
            className="outline-none w-96 p-2 pl-4 "
            placeholder="johndoe@mail.com"
          />
          <button className="flex-end bg-green-600 w-64 text-white font-bold text-2xl px-8 py-3 outline-none rounded-full text-center uppercase">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
