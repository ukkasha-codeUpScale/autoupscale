import React from "react";
import Button from "../button";
import DashboardImage from "../../../public/home-images/dashboard-image.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#5236FF] pb-72  relative">
        <div className="py-5  text-center">
          <div className="bg-white text-[#5236FF] inline-block text-xs px-2 py-[2px] rounded-xl font-semibold">
            CRM System
          </div>
          <div className="max-w-[700px] m-auto mt-4 text-white">
            <h1 className="font-bold text-5xl  text-white">
              CRM system for car rental business
            </h1>
            <div className="text-sm text-white mt-2 lg:mx-0 mx-3">
              Increase efficiency and improve your customer experience with HQ
              Rental Software.
            </div>
            <div className="my-3">
              <Button buttonTitle="Get Started" buttonRoute={"/"} />
            </div>
          </div>
          <div className="pb-5">
            <div className="image absolute flex justify-center w-full">
              <Image src={DashboardImage} width={800} alt="DashboardImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export  {HeroSection};
