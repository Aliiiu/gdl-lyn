import React from "react";
import ListComponent from "../Widgets/List/List";
import img from "../../assets/Images/gdl-logo.png";
import inst from "../../assets/Images/Instagram.png";
import lind from "../../assets/Images/Linkedin.png";
import tweet from "../../assets/Images/Twitter.png";
import face from "../../assets/Images/Facebook.png";
import Wobble from "react-reveal/Wobble";
import Image from "next/image";
import CustomImage from "../Widgets/CustomImage/CustomImage";
import {
  AiFillMediumSquare,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 2xl:gap-[100px] md:flex-row justify-between">
        <div className="flex items-start flex-col">
          <div className="flex gap-1 lg:gap-3 justify-center items-center">
            <CustomImage
              src={img}
              className="w-[35px] h-[45px] lg:w-[45px] lg:h-[60px]"
            />
            <div className="flex flex-col justify-between">
              <h1 className="text-base leading-7 font-extrabold text-black md:text-xl">
                GDL
              </h1>
              <p className="text-sm text-graytwocolor">RC623338</p>
            </div>
          </div>
          <h2 className="text-opacity-50 mt-5 text-black">
            Growth & Development Limited
          </h2>
          <hr className="w-full border-gray-400 mt-4 mb-6 " />
          <p className="text-sm text-left w-full md:max-w-[250px] text-black text-opacity-50 pt-2">
            Lagos Office : No 1, Afolabi Lesi Street, Ilupeju, Lagos | Abuja
            Office : St James House (2nd floor), Plot 1109/No. 167 Cadastral
            Zone A08 Ademola Adetokunbo Crescent, Wuse ll, Abuja- Nigeria
          </p>
          <div className="text-sm text-black text-opacity-50 mt-3">
            <a href="tel:+2347054435000">+2348029990971,</a>
            <a href="tel:+2349058179336">+2348032491428</a>
          </div>
          <div className="flex items-center justify-between w-full gap-2 mr-7 pt-4 lg:pt-5">
            <Wobble>
              {/* <CustomImage
                src={inst}
                className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
              /> */}
              <AiOutlineInstagram color="#B22F42" fontSize={30} />
              <AiFillTwitterCircle color="#B22F42" fontSize={30} />
              <AiFillLinkedin
                color="#B22F42"
                fontSize={30}
                className="rounded-full"
              />
              {/* <CustomImage
                src={tweet}
                className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
              /> */}
              {/* <CustomImage
                src={lind}
                className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
              /> */}
              {/* <CustomImage
                src={face}
                className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
              /> */}
              <BsFacebook color="#B22F42" fontSize={23} />
              <AiFillMediumSquare color="#B22F42" fontSize={30} />
              <BsWhatsapp color="#B22F42" fontSize={23} />
            </Wobble>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h4 className="text-black font-semibold text-base mb-1 lg:mb-2">
            The Company
          </h4>
          <p className="text-sm text-left text-black text-opacity-50 pt-2">
            Growth and Development Asset Management Limited (“GDL”) is a Limited
            Liability company registered with the Corporate Affairs Commission
            with RC Number: 623338.
          </p>
          <p className="text-sm text-left text-black text-opacity-50 pt-2">
            GDL and its subsidiary companies are regulated by the Securities &
            Exchange Commission, the Nigerian Stock Exchange and the Central
            Bank of Nigeria.
          </p>
        </div>
        <div className=" flex flex-1 flex-col">
          <ListComponent
            name="Our Products"
            items={[
              "High Yield Note",
              "GDL Canary Fund",
              "Dollar Note",
              "Finance",
              "Money Market Fund",
            ]}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <ListComponent
            name="Our Other Products"
            items={[
              "Stockbroking",
              "Transgenerational Program",
              "Long Term Note",
              "GDL Income Fund",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
