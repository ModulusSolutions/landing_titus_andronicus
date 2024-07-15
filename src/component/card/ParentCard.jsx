import React from "react";
import { rightArrow } from "../../Utils/images";

const ParentCard = ({ images, title }) => {
  return (
    <div className="relative mb-10 p-2 md:p-4 flex flex-col items-center">
      <img src={images} alt="Card image" className=" rounded-xl" />
      <div className="absolute bg-gray-50 w-56 sm:w-60 md:w-80 md:h-44 p-4 rounded-xl -bottom-14 mb-4 transform shadow-lg">
        <p className="text-sm md:text-xl text-gray-500 font-semibold mb-2">{title}</p>
       <a href="#"><div className="flex items-center w-fit cursor-pointer">
          <p className="text-green hover:text-emerald-500 text-xs md:text-xl font-semibold mr-2 mb-1">Read more</p>
          <img src={rightArrow} alt="Right arrow" />
        </div></a> 
      </div>
    </div>
  );
};

export default ParentCard;
