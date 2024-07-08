import React, { useState } from "react";
import { icon } from "../../Utils/images";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const header = [
    { name: "Home", link: "home" },
    { name: "Service", link: "service" },
    { name: "Feature", link: "feature" },
    { name: "Product", link: "product" },
    { name: "Testimonial", link: "testimonial" },
    { name: "FAQ", link: "faq" },
  ];

  return (
    <div className="bg-olive-100 py-4 px-10  flex justify-between items-center">
      <div className="flex items-center">
        <img src={icon} alt="Icon" className="h-6 px-2 drop-shadow-2xl" />
        <h2 className="text-lg md:text-3xl text-blubery-100 drop-shadow-xl font-extrabold stroke-bck stroke-2">
          Nexcent
        </h2>
      </div>
      <div>
        <div
          onClick={() => setOpen(!open)}
          className="text-black-D absolute right-10 top-6 md:hidden"
        >
          {open ? <FaXmark /> : <FiMenu />}
        </div>
        <ul
          className={`md:flex md:px-8 absolute md:static md:space-x-5 space-y-4 md:space-y-0 pl-10 py-3 left-0 w-full md:w-auto transition-all ${
            open ? "top-16 bg-olive-100" : "top-[-420px]"
          }`}
        >
          {header.map((nav, index) => (
            <li key={index} className="text-md hover:text-gray-500 font-semibold cursor-pointer">
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex px-10 space-x-3 items-center ">
        <p className="text-green md:text-xl font-semibold">Login</p>
        <button className="bg-green md:text-xl sm:p-2 px-2 font-semibold text-white rounded-xl">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Nav;
