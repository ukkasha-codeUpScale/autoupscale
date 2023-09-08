import Image from "next/image";
import React from "react";
import { TbMathGreater } from "react-icons/tb";
import IntregationImage from "../../../public/home-images/image (4).png";

const Intregations = () => {
  return (
    <>
      <div className="text-center pt-28 lg:mx-0 mx-8">
        <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-bold">
          INTEGRATIONS
        </div>
        <div className="mt-2 lg:text-4xl text-2xl font-bold text-black">
          <span>Seamless Harmony: Integrating with Top Tools</span>
        </div>
        <div className="text-gray-400 mt-2">
          Enhance productivity with seamless integrations
        </div>
        <Image src={IntregationImage} alt="" className="w-full" />
        <button className="text-gray-500 p-2 px-4 border border-gray-400 rounded-3xl font-semibold">
          All Intregtions{" "}
          <TbMathGreater className="inline-block text-xs mx-3 text-gray-600 mb-1" />
        </button>
      </div>
    </>
  );
};

export  {Intregations};
