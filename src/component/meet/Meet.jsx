import React from "react";
import { clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6, flowerLogo, rightArrow, tLogo } from "../../Utils/images";

const Meet = () => {
  return (
    <div className="md:flex justify-between mt-12 p-6 bg-olive-100 2xl:p-44">
      <div className="p-12 md: ml-20 px-4 md:w-2/5">
        <img src={tLogo} alt="logo" className="md:size-80" />
      </div>
      <div className="p-2 md:w-3/4">
        <p className="text-gray-500 text-base">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <br />
        <p className="text-green font-semibold text-xl drop-shadow-md">Tim Smith</p>
        <br />
        <p className="text-gray-500 text-base">
          British Dragon Boat Racing Association
        </p>
        <br />
        <div className="flex items-center sm:space-x-2 space-x-2 lg:space-x-4">
          <img src={flowerLogo} alt=""  className="size-7 md:size-10 2xl:size-20"/>
          <img src={clientLogo2} alt="" className="size-7 md:size-10 2xl:size-20"/>
          <img src={clientLogo3} alt="" className="size-7 md:size-10 2xl:size-20"/>
          <img src={clientLogo4} alt="" className="size-7 md:size-10 2xl:size-20"/>
          <img src={clientLogo5} alt="" className="size-7 md:size-10 2xl:size-20"/>
          <img src={clientLogo6} alt="" className="size-7 md:size-10 2xl:size-20"/>
         <a href="#"><p className="text-green cursor-pointer hover:text-emerald-500 font-semibold md:text-xl text-sm drop-shadow-mdl ">Meet all customer</p> </a> 
         <img src={rightArrow} alt="" className=" mt-1"/>
        </div>
      </div>
    </div>
  );
};

export default Meet;
