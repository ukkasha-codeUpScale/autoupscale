import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import React from "react";
export interface FeatureBoxProps {
  featureBoxIcon?: StaticImageData | StaticImport;
  featureBoxTitle?: string;
  fetureBoxExplaination?: string;
}
const FeatureBox = (props: FeatureBoxProps) => {
  return (
    <>
      <div className=" lg:w-1/4  lg:mt-0 pt-10">
        {props?.featureBoxIcon && (
          <Image
            src={props?.featureBoxIcon}
            alt="CloudImage"
            className="m-auto w-16"
          />
        )}
        <h1 className="text-2xl font-bold mt-3">{props?.featureBoxTitle}</h1>
        <div className="text-sm text-gray-600 mt-2">
          {props?.fetureBoxExplaination}
        </div>
      </div>
    </>
  );
};

export default FeatureBox;
