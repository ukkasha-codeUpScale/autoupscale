import Link from "next/link";
import React from "react";
export interface ButtonProps {
  buttonTitle: string;
  buttonRoute?: string;
  className?:string
}
const Button = (props: ButtonProps) => {
  return (
    <>
        <button className={` py-2  rounded-2xl my-btn bg-primary border-2 border-[#8d85ff]  px-4  ${props.className}`}>
          {props?.buttonTitle}
        </button>
    </>
  );
};

export default Button;
