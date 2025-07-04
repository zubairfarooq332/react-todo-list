import React, { useState } from "react";
import logo from "../assets/images/image.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div>
      <nav className="bg-regal-blue flex justify-between items-center px-40 py-5 relative">
        <div className="logo">
          <img src={logo} alt="" className="w-50 " />
        </div>
        <ul className="flex gap-13 items-center ">
          <li>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className=" flex items-center gap-1"
            >
              Our Services
            </button>

            {openDropdown && (
              <ul className="absolute top-full left-0 bg-white shadow-md  mt-2 w-full text-black z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Resume Writing
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Professional Writers
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <div className="btn flex gap-10">
            <button className="text-primary-color font-bold">Login In</button>
            <button className="bg-primary-color px-8 py-2 rounded-sm text-white shadow-md">
              Signup
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
