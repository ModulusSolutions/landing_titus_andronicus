import React from "react";
import {
  circliLogo,
  iconft,
  instagram,
  twterLogo,
  youtube,
} from "../../Utils/images";

const FooterAbout = () => {
  return (
    <div className="p-10 lg:ml-28">
      <div className="flex items-center">
        <img src={iconft} alt="Icon" className="h-6 px-4 drop-shadow-2xl" />
        <h2 className="text-lg md:text-3xl text-silver drop-shadow-xl font-semibold stroke-white stroke-2">
          Nexcent
        </h2>
      </div>
      <div className="p-4 text-silver">
        <p className="text-sm  ">Copyright © 2024 Nexcent ltd.</p>
        <br />
        <p className="text-sm ">All rights reserved</p>
      </div>
      <div className="flex lg:p-0 gap-2 md:gap-4">
        <a href="#">
          <img
            src={instagram}
            alt=""
            className="bg-black-D p-3 rounded-full cursor-pointer transition hover:-translate-x-1"
          />
        </a>
        <a href="#">
          <img
            src={circliLogo}
            alt=""
            className="bg-black-D p-3 rounded-full cursor-pointer transition hover:translate-x-1"
          />
        </a>
        <a href="#">
          <img
            src={twterLogo}
            alt=""
            className="bg-black-D p-3 rounded-full cursor-pointer transition hover:-translate-x-1"
          />
        </a>
        <a href="#">
          <img
            src={youtube}
            alt=""
            className="bg-black-D p-3 rounded-full cursor-pointer transition hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterAbout;
