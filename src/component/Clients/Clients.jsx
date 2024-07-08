import React from "react";
import {
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
} from "../../Utils/images";
import Communitydata from "./Communitydata";

const Clients = () => {
  return (
    <>
      <div className="p-4">
        <div className="p-6">
          <h1 className="text-center text-xl md:text-4xl text-gray-500 drop-shadow-md font-semibold">Our Clients</h1>
          <p className="text-center text-sm text-gray-400">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex justify-around p-8">
          <img src={clientLogo1} alt="" />
          <img src={clientLogo2} alt="" />
          <img src={clientLogo3} alt=""  />
          <img src={clientLogo4} alt=""  />
          <img src={clientLogo5} alt=""  />
          <img src={clientLogo6} alt=""  />
          <img src={clientLogo7} alt=""  />
        </div>
        <div className="p-4">
          <h1 className="text-center text-xl md:text-4xl text-gray-500 drop-shadow-md font-semibold">Manage your entire community <br /> in a single system</h1>
          <p className=" text-center  text-xs md:text-lg p-2 text-gray-400">Who is Nextcent suitable for?</p>
        </div>
      </div>
      <Communitydata/>
    </>
  );
};

export default Clients;
