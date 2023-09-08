import React from "react";
import Dashboard from "../../../public/home-images/dashboard.png";
import Dashboard2 from "../../../public/home-images/dashboard-2.png";
import AdvantagesBox from "./advantages-box";
const Advantages = () => {
  return (
    <>
      <div className="lg:mx-28 mx-8">
        <div className="text-center pt-5 ">
          <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-semibold">
            Advantages
          </div>
          <div className="mt-2 text-4xl font-bold text-black">
            <span>Auto UpScale Advantages</span>
          </div>
          <div className="text-gray-400 mt-2">
            Enhance productivity with seamless integrations
          </div>
        </div>
        <AdvantagesBox
          advantagesExplaination=" Our car rental software allows you to fully control the entire process, monitor the loading of each car and provide the best service for your clients. With RentSyst, you can manage reservations for any vehicle directly from your smartphone. If you are not sure if this car rental system is right for you, please try the demo version."
          advantagesTitle=" Car Rental Software"
          advantagesImage={Dashboard}
          advantagesTag="Latest Tech"
        />

        <AdvantagesBox
          className="flex-row-reverse"
          advantagesExplaination=" Cloud-based car rental management software unlocks new opportunities for your company. With it, you can control your car rental business, plan work, streamline routine operations and receive detailed reports. Install the CRM system and get all the functionality in one place for vehicle rental management. Managing your reservations has never been easier."
          advantagesImage={Dashboard2}
          advantagesTag="Team Work"
        />

        <AdvantagesBox
          advantagesExplaination="We listen to your wishes and are constantly improving our cloud solution for auto business. To date, RentSyst contains all the necessary functionality, so that you can successfully manage car sharing, private car fleet, car rental and taxi fleet."
          advantagesTitle=" Auto Business Software"
          advantagesImage={Dashboard}
          advantagesTag="Team Work"
        />
      </div>
    </>
  );
};

export  {Advantages};
