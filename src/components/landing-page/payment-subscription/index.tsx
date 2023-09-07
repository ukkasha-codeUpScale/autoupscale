import React, { useState } from "react";
import { Check } from "react-bootstrap-icons";
import { PlanEntity } from "../../../../models/plans/plans.entity";
  export interface PaymentSubscriptionProps {
    payment?: PlanEntity[];
  }
const PaymentSubscription = (props : PaymentSubscriptionProps) => {
  return (
    <div className="lg:mx-28 mx-8 pt-28">
      <div className="text-left lg:w-1/2 w-full space-y-6 mr-5">
        <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-semibold">
          {" "}
          Pricing
        </div>
        <div className="mt-2 text-4xl font-bold text-black">
          <span>Find the Right Plan for You</span>
        </div>
        <div className="text-gray-400 my-4">
          Simple Pricing for Your Convenience
        </div>
      </div>

      <div className="lg:flex   grid   responsive-payment-card lg:border-[1px] xl:border-[1px] 2xl:[border-1px] border-gray-300 rounded-lg lg:space-y-0 space-y-3 ">
        {props?.payment?.map((p , index) => {
          return (
            <div key={index} className="lg:w-1/4 lg:border-[0px]  md:m-auto sm:m-auto xs:m-auto  md:border-[1px] sm:border-[1px] xs:border-[1px]  rounded-lg  lg:rounded-none border-gray-300 md:w-1/2 w-full hover:shadow-lg payment-card">
              <div className="">
                <div className="lg:border-r  border-gray-300 p-1 payment-section">
                  <div className="px-4 space-y-2">
                    <div className="sub_heading text-black mt-2 font-semibold text-lg">
                      {p?.plan_name}
                    </div>
                    <div className="flex">
                      <div className="font-extrabold text-3xl">£{p?.price}</div>
                      <div className="my-auto text-gray-400">/monthly</div>
                    </div>
                    <div className="text-gray-400 ">{p?.sub_line}</div>
                    <div className="box">
                      {p?.features?.map((f , index) => {
                        return (
                          <div
                            key={index}
                            className="text-gray-700 border-b border-gray-300 py-1 payment-features flex"
                          >
                            <Check className="text-blue-500 text-3xl inline-block" />{" "}
                            <div className="inline-block font-semibold">{f}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="my-3">
                      <button className="w-100 text-gray-500 p-2 px-4 border border-gray-400 rounded-3xl font-semibold">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentSubscription;
