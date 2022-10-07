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

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 md:flex-row justify-between">
        <div className="flex items-start flex-col">
          <div className="flex  gap-1 lg:gap-3 flex-box pt">
            {/* <Image
							className='hidden lg:block h-8 w-auto'
							src={img}
							style={{ width: 65, height: 110 }}
							alt='GDL'
						/> */}
            <CustomImage
              src={img}
              className="w-[45px] h-[45px] lg:w-[45px] lg:h-[45px]"
            />
            <div>
              <h1 className="text-base font-extrabold text-black lg:text-5xl md:text-3xl">
                GDL
              </h1>
              <p className="text-sm lg:text-2xl text-graytwocolor">RC623338</p>
            </div>
          </div>
          <p className="text-sm md:text-base lg:text-xl text-left pt-4">
            No 1, Afolabi Lesi Street, Ilupeju, Lagos <br />
            <b>+2347054435000 , +2349058179336 </b>
            <br /> customerservice@gdl.com.ng
          </p>
          <div className="flex flex-box mr-7 pt-3 lg:pt-5">
            <Wobble>
              <CustomImage
                src={inst}
                className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
              />
              <CustomImage
                src={tweet}
                className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
              />
              <CustomImage
                src={lind}
                className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
              />
              <CustomImage
                src={face}
                className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
              />
            </Wobble>
          </div>
        </div>
        <div className="flex flex-col">
          <ListComponent
            name="Company"
            items={[
              "Core Values",
              "Corporate Information",
              "Board of Directors",
              "Management Team",
              "Terms of use",
              "Privacy",
            ]}
          />
        </div>
        <div className=" flex flex-col">
          <ListComponent
            name="Products"
            items={[
              "High Yield Note",
              "GDL Canary Fund",
              "Dollar Note",
              "Finance",
              "Money Market Fund",
              "Stockbroking",
              "Transgenerational Program",
              "Long Term Note",
              "GDL Income Fund",
            ]}
          />
        </div>
        <div className="flex flex-col">
          <ListComponent
            name="Resources"
            items={[
              "Blog",
              "Career",
              "Testimonials",
              "Media",
              "Research",
              "FAQs",
              "Contact",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
