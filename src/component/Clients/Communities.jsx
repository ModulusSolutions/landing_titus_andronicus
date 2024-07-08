// Communities.js
import React from "react";

const Communities = ({ images, title, desc }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img src={images} alt="pic" className="" />
      <p className="md:text-2xl text-lg font-semibold text-gray-500 text-center drop-shadow-md p-4">
        {title}
      </p>
      <p className="md:text-lg text-xs text-gray-500 text-center p-4">{desc}</p>
    </div>
  );
};

export default Communities;
