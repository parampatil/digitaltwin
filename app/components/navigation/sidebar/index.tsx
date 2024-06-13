import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white text-black grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5 group" onClick={toggle}>
          {/* Close icon */}
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
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

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/" onClick={toggle}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggle}>
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={toggle}>
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}>
              <p>Contacts</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
