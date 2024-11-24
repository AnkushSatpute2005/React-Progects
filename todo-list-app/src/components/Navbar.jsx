import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 bg-[#8621eb] text-white">
      <span><b>iTask</b></span>
      <ul className="flex gap-7">
        <li className="cursor-pointer hover:font-bold transition-all duration-50">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all duration-50">Your Tasks</li>
      </ul>
    </nav>
  );
};

export default Navbar;


