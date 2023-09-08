import React from "react";
import Vos from "../../../public/home-images/vos.png";
import Reporting from "../../../public/home-images/reporting.png";
import Task from "../../../public/home-images/task.png";
import FeatureIcon from "../../../public/home-images/feature-icon-1.png";
import FeatureBox from "@/components/landing-page/feature/feature-box";
import Navbar from "@/components/landing-page/navbar";
const Feature = () => {
  return <>
  <div className="lg:pt-48 md:pt-48 pt-32 lg:mx-28 mx-8">
        <div className="text-center pb-5">
          <div>
            <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-semibold">
              Features
            </div>
            <div className="mt-2 text-4xl font-bold text-black">
              <span>Explore our</span>{" "}
              <span className="text-[#5236ff]"> Amazing</span>{" "}
              <span>features</span>
            </div>
            <div className="text-gray-400 mt-2">
              Discover a world of incredible possibilities with our
              extraordinary features, designed to enhance your experience and
              simplify your life
            </div>
          </div>
          <div className="mt-5 lg:flex  grid md:grid-cols-2  space-x-3mx-8 md:text-center lg:space-y-0 ">
            <FeatureBox
              featureBoxTitle="Cloud CRM System"
              featureBoxIcon={FeatureIcon}
              fetureBoxExplaination="Cloud CRM system for all types of car rental business"
            />

            <FeatureBox
              featureBoxIcon={Vos}
              featureBoxTitle="VOS System"
              fetureBoxExplaination="Full vehicle control with Telematics"
            />
            <FeatureBox
              featureBoxIcon={Task}
              featureBoxTitle="Task Manager"
              fetureBoxExplaination="Improved planner for efficient operation of your company"
            />
            <FeatureBox
              featureBoxIcon={Reporting}
              featureBoxTitle="Reporting Management"
              fetureBoxExplaination="Detailed reporting and document management in one place"
            />
          </div>
        </div>
      </div>
      </>;
};

export  {Feature};
