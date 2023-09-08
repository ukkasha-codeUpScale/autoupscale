"use client"
import React from "react";
import Button from "../button";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <>
      <div className="lg:mx-28 mx-8 pt-28">
        <div className=" lg:flex grid  lg:spcae-y-0 space-y-4">
          <div className="text-left lg:w-1/2 w-full space-y-6 mr-5">
            <div className="mt-2 text-4xl font-bold text-black">
              <span>Frequently Asked Questions</span>
            </div>
            <div className="text-gray-400 mt-4">
              We have compiled common questions to provide you with more
              information and enhance your overall experience.
            </div>
            <div className="text-white">
              <Button buttonTitle="Ask Something Else" />
            </div>
          </div>

          <div className=" faq-section lg:w-1/2 w-full">
            <Accordion defaultActiveKey="0" flush className="space-y-3">
              <Accordion.Item className="border-0" eventKey="0">
                <Accordion.Header className="border-1 faq-accordion-header border-gray-300 rounded-xl text-black font-semibold">
                  Which operating systems does your software support?
                </Accordion.Header>
                <Accordion.Body className="border-0 shadow-sm rounded-lg rounded-t-none text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="1">
                <Accordion.Header className="border-1 faq-accordion-header border-gray-300 rounded-xl text-black font-semibold">
                  Which operating systems does your software support?
                </Accordion.Header>
                <Accordion.Body className="border-0 shadow-sm rounded-lg rounded-t-none text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item className="border-0" eventKey="2">
                <Accordion.Header className="border-1 faq-accordion-header border-gray-300 rounded-xl text-black font-semibold">
                  Which operating systems does your software support?
                </Accordion.Header>
                <Accordion.Body className="border-0 shadow-sm rounded-lg rounded-t-none text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export  {Faq};
