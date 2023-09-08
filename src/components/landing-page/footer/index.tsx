import Image from "next/image";
import React from "react";
import FooterLogo from "../../../public/home-images/footer-logo.png";
import Mail from "../../../public/home-images/mail.svg";
import Twitter from "../../../public/home-images/twitter.svg";
import Instagram from "../../../public/home-images/instagram.svg";
import Telegram from "../../../public/home-images/telegram.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="py-5 custom-radial-color">
        <div className="lg:mx-28 mx-8">
          <div className="lg:flex lg:space-y-0 space-y-5">
            <div className="lg:w-1/2 ">
              <Image src={FooterLogo} width={220} alt="" />
              <div className="mt-4 text-gray-400">
                Are you an employer? Give your teams freedom and choice. Our
                simple subscription gives businesses a way to create a flexible,
                inclusive, comprehensive, engaging, cost-effective support
                programme.
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-5">
              <div className="flex">
                <div className="w-1/2">
                  <ul className="text-gray-300 flex flex-col justify-center space-y-3">
                    <li>
                      <Link href={"/"}>Blog</Link>
                    </li>

                    <li>
                      <Link href={"/"}>Pricing</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Cummunity</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <ul className="text-gray-300 flex flex-col justify-center space-y-3">
                    <li>
                      <Link href={"/"}>Roadmap</Link>
                    </li>

                    <li>
                      <Link href={"/"}>Changelog</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Status</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Help</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3">
            <hr className="bg-white h-[2px]" />
          </div>
          <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4 lg:text-left text-center text-gray-400">
            <div>© 2023 Auto UpScale</div>
            <div className="flex lg:justify-start justify-center space-x-3"> 
            <Image  className="mx-1" src={Twitter} alt="Mail"/>
            <Image  className="mx-1" src={Instagram} alt="Mail"/>
            <Image  className="mx-1" src={Telegram} alt="Mail"/>
            </div>
            <div className="flex lg:justify-start justify-center"><Image  className="mx-1" src={Mail} alt="Mail"/> hi@autoupscale.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export  {Footer};
