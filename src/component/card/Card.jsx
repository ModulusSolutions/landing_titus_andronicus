import React from "react";
import Title from "./Title";
import ParentCard from "./ParentCard";
import { card1, card2, card3 } from "../../Utils/images";

const Card = () => {
  const data = [
    {
      images: card1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      images: card2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      images: card3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <div className="p-5">
      <Title />
      <div className="grid gap-4 md:gap-6 md:grid-cols-1 lg:grid-cols-3 p-12 md:p-4">
        {data.map((card, index) => (
          <ParentCard key={index} images={card.images} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Card;
