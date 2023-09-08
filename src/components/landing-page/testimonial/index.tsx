import React from "react";
import Avtar from "../../../public/home-images/avtar.png";
import AvtarTwo from "../../../public/home-images/avtar-2.png";
import AvtarThree from "../../../public/home-images/avtar-3.png";
import TestimnoialCard from "./testimonial-card";

const Testimnoials = () => {
  return (
    <>
      <div className="lg:mx-28 mx-8">
        <div className="text-center pt-28">
          <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-semibold">
            TESTIMONIALS
          </div>
          <div className="mt-2 text-4xl font-bold text-black">
            <span>Hear What Others Say</span>
          </div>
          <div className="text-gray-400 mt-2">
            Discover what our valued clients and partners have to say about
            their experiences working with us.
          </div>
        </div>

        <div className=" lg:flex lg:space-x-6  mt-5 grid grid-cols-1">
          <TestimnoialCard
            TestimnoialImage={Avtar}
            TestimnoialHeading="Demetria Gills"
            TestimnoialSubHeading="@Demetria "
            TestimonialComment="Playing around with @Optimind I’m back logging key thoughts, and details and soundbites from and episodes, books, meetings, articles, etc from the past week. So far, it’s a knowledge worker’s dream come true."
          />
          <TestimnoialCard
            TestimnoialImage={AvtarTwo}
            TestimnoialHeading="Fabrizio Reandi"
            TestimnoialSubHeading="@Fabrizio"
            TestimonialComment="Really, really liking @OptiMind so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background."
          />
          <TestimnoialCard
            TestimnoialImage={AvtarThree}
            TestimnoialHeading="Thomas Rose"
            TestimnoialSubHeading="@Thomas "
            TestimonialComment="All righty. I have to give a massive shout-out to @maccaw for and pioneering @OptiMind. It has already matured to a point where it
            is a daily driver for me.  (especially perfect bits of structured data) is superb."
          />
        </div>
      </div>
    </>
  );
};

export  {Testimnoials};
