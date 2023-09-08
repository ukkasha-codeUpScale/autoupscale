import React from "react";
import Button from "../button";

const FreeTrials = () => {
  return (
    <div className="lg:mx-28 pt-28 mx-8">
      <div className="mb-5 text-center ">
        <div className="bg-[#5236FF] py-5 rounded-lg lg:px-0 px-3">
          <div className="bg-white text-[#5236FF] inline-block text-xs px-2 py-[2px] rounded-xl font-semibold">
            Free Trial
          </div>
          <h1 className="mt-3 text-4xl font-bold text-white">
            Start Your 14 Days Free Trials Today!
          </h1>
          <div className="text-white mt-2">
            Increase efficiency and improve your customer experience with HQ
            Rental Software.
          </div>
          <div className="input mt-10  space-y-2">
            <input
              type="text"
              placeholder="Enter your email"
              className=" lg:w-1/3 w-10/12 rounded-3xl pl-5 text-white pr-16 bg-primary py-[13px] placeholder:text-white placeholder:text-sm border-1 border-[#8d85ff] focus:outline-none"
            />

            <Button
              buttonTitle="Free Trial"
              className="text-white lg:ml-[-120px] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export  {FreeTrials};
