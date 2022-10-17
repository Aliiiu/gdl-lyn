import React from "react";
import security from "../../constants/security";
import { AppButton } from "../Widgets/Button/AppButton";
import Image from "next/image";
import mockup from "../../assets/Images/mockup-two.png";
import mockup2 from "../../assets/Images/perks.png";
import CustomImage from "../Widgets/CustomImage/CustomImage";

const E2ESecurity = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 lg:justify-between">
      <div className="flex-1  flex justify-start items-center lg:w-1/2 py-10">
        <div className=" flex flex-col justify-center items-center lg:items-start max-w-[450px] gap-4 xl:gap-6">
          <div className="header flex gap-3 items-center">
            <div className="lg:w-10 w-6 h-1 bg-gray-700"></div>
            <h5 className="text-base">On-boarding</h5>
          </div>
          <h3 className="text-2xl lg:text-4xl xl:text-5xl animate-fade-in font-semibold">
            Get Started
          </h3>
          <p className="max-w-[400px] text-center lg:text-start text-sm lg:text-base">
            You can sign-up for guaranteed perks such as
          </p>
          <div className="flex flex-col xl:flex-row gap-2">
            <div className="pointers flex flex-col gap-5 py-2">
              {security.slice(0, 2).map(item => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 md:pl-2 font-bold text-sm ${
                    item.id === 2 && "text-red-600 capitalize"
                  } lg:text-base max-w-[400px]`}
                >
                  <span
                    className={`w-7 h-7 text-white flex justify-center items-center flex-shrink-0 ${
                      item.id === 1 ? "bg-red-600" : "bg-gray-500"
                    } self-center rounded-full`}
                  >
                    {item.id}
                  </span>
                  {item.feature}
                </div>
              ))}
            </div>
            <div className="pointers flex flex-col gap-5 py-2">
              {security.slice(2, 4).map(item => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 md:pl-2 font-bold text-sm ${
                    item.id === 4 && "text-red-600 capitalize"
                  } lg:text-base max-w-[500px]`}
                >
                  <span
                    className={`w-7 h-7 text-white flex justify-center items-center flex-shrink-0 ${
                      item.id === 3 ? "bg-red-600" : "bg-gray-500"
                    } self-center rounded-full`}
                  >
                    {item.id}
                  </span>
                  {item.feature}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-start flex-1">
            {/* <button className='bg-gray-700 text-white rounded-[32px] text-xl px-14 py-5'>
                      Get started
                    </button> */}
            <AppButton
              name="Sign Up Now"
              className="bg-black px-6 py-3 lg:px-10 lg:py-4 text-md font-semibold"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end lg:w-1/2 flex-1">
        {/* <Image
          src={mockup}
          alt=""
          objectFit="contain"
          width={700}
          height={800}
        /> */}
        <CustomImage
          src={mockup2}
          className="max-w-[500px] w-full animate-zoom-out h-[400px] lg:h-[500px] xl:h-[600px]"
        />
      </div>
    </div>
  );
};

export default E2ESecurity;
