import Image, { StaticImageData } from "next/image";
import React from "react";
export interface TestimnoialsProps {
  TestimnoialImage?: StaticImageData;
  TestimnoialHeading?: string;
  TestimnoialSubHeading?: string;
  TestimonialComment?: string;
}
const Testimnoials = (props: TestimnoialsProps) => {
  return (
    <>
      <div className="lg:w-1/3 w-full border rounded-2xl p-4 box border-gray-400 mt-3 ">
        <div className="flex space-x-3">
          <div className="image">
            {props?.TestimnoialImage && 
            <Image src={props?.TestimnoialImage} alt="" width={50} />
            }
          </div>
          <div className="details">
            <h1 className="text-[19px] font-semibold">
              {props?.TestimnoialHeading}
            </h1>
            <div className="font-[600]">{props?.TestimnoialSubHeading}</div>
          </div>
        </div>
        <div className="content pt-4 pb-2 text-gray-500">
          {props?.TestimonialComment}
        </div>
      </div>
    </>
  );
};

export default Testimnoials;
