import React from "react";

const Board = ({ images, title, desc }) => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img src={images} alt="" className="" />
        <div className="">
          <p className="text-xl md:text-4xl text-gray-500 drop-shadow-md font-semibold">
            {title}
          </p>
          <p className="md:text-lg text-xs text-gray-500 py-6 mr-4">{desc}</p>
          <a href="#">
            <button className="bg-green text-base text-white md:w-32 md:h-14 w-24 h-8 hover:bg-emerald-500 items-center rounded-md">
              Learn more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Board;
