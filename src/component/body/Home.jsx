import React from "react";

const Home = ({title,title2, desc, images,butonName}) => {

  return (
    <>
         <div className="bg-olive-100 flex justify-between items-center md:px-10 p-5 2xl:px-44 none">
          <div className=" items-center">
            <p className="md:text-6xl text-2xl text-black-D drop-shadow-lg font-semibold">
              {title}
              </p>
            <span className="text-green md:text-6xl text-2xl font-semibold drop-shadow-md">
              {title2}
            </span>
           
            <p className="md:text-base py-5 text-sm text-gray-500">
           {desc}
            </p>
            <a href="">
              <button className="bg-green text-base md:w-32 md:h-14 w-20 h-8 hover:bg-emerald-500 text-white rounded-md">
                {butonName}
              </button>
            </a>
          </div>
          <div>
            <img src={images} alt="pic" className="p-10 relative h-full" />
          </div>
        </div>
    </>
  );
};

export default Home;
