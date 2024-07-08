import React from "react";
import { association, club1, member } from "../../Utils/images";
import Communities from "./Communities";

const Communitydata = () => {
  const data = [
    {
      images: member,
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      images: association,
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      images: club1,
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <div className="flex justify-center p-4 -mt-5">
      {data.map((comunity, index) => (
        <Communities
          key={index}
          images={comunity.images}
          title={comunity.title}
          desc={comunity.desc}
        />
      ))}
    </div>
  );
};

export default Communitydata;
