'use client'
import React, { useState } from "react";
import Logo from "../../../app/public/home-images/autoupscale (2).png";
import Link from "next/link";
import Image from "next/image";
import Button from "../button";
import { MdNoEncryption } from "react-icons/md";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [mobileShow, setMobileShow] = useState<Boolean>(false);
  return (
    <>
      <nav className=" px-24 py-3 lg:flex  xl:flex 2xl:flex justify-between custom-nvabr  hidden ">
        <div>
          <Image src={Logo} width={200} alt="" />
        </div>
        <div className="menu">
          <ul className="flex space-x-8 text-white text-sm justify-center items-center">
            <li>
              <Link href={"/"}>Integrations</Link>
            </li>
            <li>
              <Link href={"/"}>Roadmap</Link>
            </li>
            <li>
              <Link href={"/"}>ChangeLog</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
            <Button buttonTitle="Demo Version" buttonRoute={"/"} />
          </ul>
        </div>
      </nav>
      <nav className=" lg:hidden block">
        <div className="px-5 py-3 flex justify-between">
          <div className="">
            <Image src={Logo} width={200} alt="" />
          </div>
          <div>
            {!!Boolean(mobileShow) ? (
              <GiCancel
                onClick={() => {
                  setMobileShow(false);
                }}
                className="text-white text-3xl"
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => {
                  setMobileShow(true);
                }}
                className="text-white text-3xl"
              />
            )}
          </div>
        </div>
        {!!Boolean(mobileShow) && (
          <div className=" text-center w-full left-0 " style={{transitionDuration:".5s"}}>
            <div className="menu bg-white text-black">
              <ul className="grid space-y-5 p-3 text-md justify-center items-center">
                <li className="">
                  <Link href={"/"}>Integrations</Link>
                </li>
                <li className="">
                  <Link href={"/"}>Roadmap</Link>
                </li>
                <li className="">
                  <Link href={"/"}>ChangeLog</Link>
                </li>
                <li className="">
                  <Link href={"/"}>Blog</Link>
                </li>
                <li className="">
                  <Link href={"/"}>Contact</Link>
                </li>
                <Button buttonTitle="Demo Version" className="text-white" buttonRoute={"/"} />
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
