import React, { useState, useEffect } from "react";
import { oneSideBoard, Pic, twoPerson } from "../../Utils/images";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Home from "./Home";

const CarouselComponent = ({ autoSlide = false, autoSlideInterval = 2000 }) => {
  const [slider, setSlider] = useState(0);

  const prev = () =>
    setSlider((slider) => (slider === 0 ? slides.length - 1 : slider - 1));

  const next = () =>
    setSlider((slider) => (slider === slides.length - 1 ? 0 : slider + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const slides = [
    {
      title: " Lessons and insights",
      title2: " from 8 years",
      desc: "Where to grow your business as a photographer: site or social media?",
      images: Pic,
      butonName: "Registration",
    },
    {
      title: " Study and earn",
      title2: " from websites",
      desc: "Where to grow your business as a photographer: site or social media?",
      images: twoPerson,
      butonName: "Visit us",
    },
    {
      title: " Visit and Shop",
      title2: " from this platform",
      desc: "Where to grow your business as a photographer: site or social media?",
      images: oneSideBoard,
      butonName: "Shop now",
    },
  ];
  const currentSlide = slides[slider];
  return (
    <div className="relative w-full items-center h-full">
      <div className="absolute flex w-full top-40 md:p-4 items-center justify-between ">
        <IoIosArrowBack
          className="cursor-pointer opacity-20 hover:opacity-80 "
          onClick={prev}
        />
        <IoIosArrowForward
          className="cursor-pointer opacity-20 hover:opacity-80 "
          onClick={next}
        />
      </div>
      <div className=" w-full h-full ">
        <Home
          title={currentSlide.title}
          title2={currentSlide.title2}
          desc={currentSlide.desc}
          images={currentSlide.images}
          butonName={currentSlide.butonName}
        />
      </div>
    </div>
  );
};
export default CarouselComponent;
