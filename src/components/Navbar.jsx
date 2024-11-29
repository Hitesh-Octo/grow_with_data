import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Grow.</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 hover:text-[#00df9a]">Home</li>
        <li className="p-4 hover:text-[#00df9a]">Company</li>
        <li className="p-4 hover:text-[#00df9a]">Resources</li>
        <li className="p-4 hover:text-[#00df9a]">About</li>
        <li className="p-4 hover:text-[#00df9a]">contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Grow.</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">Home</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">Company</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">Resources</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">About</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
