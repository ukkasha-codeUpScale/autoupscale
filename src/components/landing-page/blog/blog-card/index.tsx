import Image, { StaticImageData } from "next/image";
import React from "react";
import { GiSpearFeather } from "react-icons/gi";
import { TbMathGreater } from "react-icons/tb";
export interface BlogProps {
  blogImage?: StaticImageData;
  blogTitle?: string;
  blogDate?: string;
}
const BlogCard = (props: BlogProps) => {
  return (
    <>
      <div className="lg:w-1/3 md:w-1/2 w-full md:space-y-2 md:m-auto border rounded-2xl p-3 box border-gray-400">
        <div className="">
          {
            props?.blogImage &&
          <Image src={props?.blogImage} className="img md:m-auto sm:m-auto" alt="" />
          }
        </div>
        <div className=" ">
          {/* Use mt-auto to push content to the bottom */}
          <div className="h-[72px] mb-4 mt-2">
            <div className="lg:text-left text-center font-medium">{props?.blogTitle}</div>
            <div className="lg:text-left text-center font-normal text-gray-600">{props?.blogDate}</div>
          </div>
          <div className="flex">
            <button className=" text-gray-700 p-1 px-4 border border-gray-700 rounded-3xl font-semibold w-full">
              Read  <TbMathGreater className="inline-block text-xs mx-3 text-gray-600 mb-1" />
            </button>
           
          </div>
          {/* Add mb-3 for the bottom margin */}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
