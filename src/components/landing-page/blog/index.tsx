import React from "react";
import BlogCard from "./blog-card";
import { TbMathGreater } from "react-icons/tb";
import BlogImageOne from "../../../public/home-images/blog-1.png";
import BlogImageTwo from "../../../public/home-images/blog-2.png";
import BlogImageThree from "../../../public/home-images/blog-3.png";

const Blog = () => {
  return (
    <>
      <div className="lg:mx-28 mx-8 pt-28">
        <div className="lg:flex grid justify-between items-end lg:space-y-0 space-y-7">
          <div className="text-left ">
            <div className="mt-2 text-4xl font-bold text-black">
              <span>News from our team</span>
            </div>
            <div className="text-gray-400 mt-2">
              We are currently working on the features below.
            </div>
          </div>
          <div>
            <button className="text-gray-500 p-2 px-4 border border-gray-400 rounded-3xl font-semibold">
              Check Our Blog
              <TbMathGreater className="inline-block text-xs mx-3 text-gray-600 mb-1" />
            </button>
          </div>
        </div>

        <div className=" lg:flex grid grid-cols-1 lg:space-x-6 space-y-6 lg:space-y-0 mt-5">
          <BlogCard
            blogImage={BlogImageOne}
            blogTitle="Enhanging Your Audio Experience "
            blogDate="Jul 7, 2023"
          />
          <BlogCard
            blogImage={BlogImageTwo}
            blogTitle="Amplify Your Podcast with Saturation: Streamline & Enhance "
            blogDate="Jul 3, 2023"
          />
          <BlogCard
            blogImage={BlogImageThree}
            blogTitle="A Beginner's Guide to Starting Your Own Podcast"
            blogDate="Jul 3, 2023"
          />
        </div>
      </div>
    </>
  );
};

export  {Blog};
