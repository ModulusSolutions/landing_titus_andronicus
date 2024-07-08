import React from "react";
import { Pic } from "../../Utils/images";
import Clients from "../Clients/Clients";

const Home = () => {
  return (
    <>
      <div className="bg-olive-100 mt-2">
        <div className="flex justify-between items-center px-20">
          <div className=" items-center">
            <h1 className="md:text-6xl text-xl text-black-D drop-shadow-lg font-semibold">
              Lessons and insights
            </h1>
            <p className="text-green md:text-5xl text-xl font-semibold drop-shadow-md">
              from 8 years
            </p>
            <p className="text-md py-5 text-xs md:text-lg text-gray-500">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <a href="">
              <button className="bg-green md:p-3 p-2 px-4 hover:bg-emerald-500 text-white rounded-md">
                Register
              </button>
            </a>
          </div>

          <div>
            <img src={Pic} alt="pic" className="p-10 relative" />
          </div>
        </div>
      </div>
      <Clients />
    </>
  );
};

export default Home;
