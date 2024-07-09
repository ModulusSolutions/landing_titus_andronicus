// HelpSection.js
import React from "react";
import {
  clubsm,
  contactLogo,
  eventLogo,
  paymentLogo,
} from "../../Utils/images";
import State from "./State"; // Assuming State component is defined similarly to Board

const HelpSection = () => {
  const stateData = [
    {
      images: contactLogo,
      title: "2,245,341",
      desc: "Members",
    },
    {
      images: clubsm,
      title: "46,328",
      desc: "Clubs",
    },
    {
      images: eventLogo,
      title: "828,867",
      desc: "Event Booking",
    },
    {
      images: paymentLogo,
      title: "1,926,436",
      desc: "Payments",
    },
  ];

  return (
    <div className="bg-olive-100  flex flex-col md:flex-row items-center md:justify-between p-8 py-5 px-4 md:px-20 2xl:px-44">
      <div className="md:mr-8 mb-6">
        <p className="text-xl md:text-4xl font-semibold text-gray-500 drop-shadow-md">
          Helping a local
        </p>
        <p className="text-xl md:text-4xl font-semibold text-green drop-shadow-md">
          business reinvent itself
        </p>
        <p className="text-sm md:text-md text-gray-400 font-medium mt-2">
          We reached here with our hard work and dedication.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 ">
        {stateData.slice(0, 4).map((data, index) => (
          <State
            key={index}
            images={data.images}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
