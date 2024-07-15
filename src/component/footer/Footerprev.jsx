import React from "react";
import { rightWhitArow } from "../../Utils/images";

const Footerprev = () => {
  return (
    <>
      <div className="bg-olive-100 flex flex-col justify-center items-center mt-8 py-6 md:mt-24">
        <p className="md:text-6xl mt-2 text-2xl font-semibold drop-shadow-md text-center text-bck p-10">
          Pellentesque suscipit <br /> fringilla libero eu.
        </p>
        <a href="#">
          <div className="flex items-center p-4 justify-center bg-green hover:bg-emerald-500 cursor-pointer md:w-44 md:h-14 m-4 rounded">
            <p className="text-white ">Get a Demo</p>
            <img src={rightWhitArow} alt="arrow" className="ml-1 mt-1" />
          </div>
        </a>
      </div>
    </>
  );
};

export default Footerprev;
