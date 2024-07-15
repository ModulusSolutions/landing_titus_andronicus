import React from "react";

const State = ({ images, title, desc }) => {
  return (
    <div className="flex items-center text-center px-14 ">
      <img src={images} alt={desc} className="" />
      <div className="">
        <p className="text-lg md:text-2xl font-bold text-gray-500">{title}</p>
        <p className="text-xs md:text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default State;
