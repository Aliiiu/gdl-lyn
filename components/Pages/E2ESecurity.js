import React from "react";
import security from "../../constants/security";
import { AppButton } from "../Widgets/Button/AppButton";
import Image from "next/image";
import mockup from "../../assets/Images/mockup-two.png";
import CustomImage from "../Widgets/CustomImage/CustomImage";

const E2ESecurity = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-8 py-10">
        <h3 className="text-2xl lg:text-4xl font-semibold">
          End-to-end security
        </h3>
        <p className="max-w-[400px] text-center lg:text-start text-sm lg:text-base">
          We protect your money with award-winning secrity systems and trusted
          partners
        </p>
        <div className="flex gap-5 lg:gap-20">
          <div className="pointers flex flex-col gap-5 py-2">
            {security.slice(0, 5).map(item => (
              <div
                key={item.id}
                className="flex items-start gap-3 md:pl-2 text-sm lg:text-base max-w-[400px]"
              >
                <span className="w-2 h-2 flex-shrink-0 bg-gray-800 self-center rounded-full" />
                {item.feature}
              </div>
            ))}
          </div>
          <div className="pointers flex flex-col gap-5 py-2">
            {security.slice(5).map(item => (
              <div
                key={item.id}
                className="flex items-start gap-3 md:pl-2 text-sm lg:text-base max-w-[400px]"
              >
                <span className="w-2 h-2 flex-shrink-0 bg-gray-800 self-center rounded-full" />
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
            name="Get started"
            className="bg-gray-700 px-6 py-3 lg:px-10 lg:py-4 text-md font-semibold"
          />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-offset="120"
        className="mockup hidden lg:flex justify-center flex-1"
      >
        {/* <Image
          src={mockup}
          alt=""
          objectFit="contain"
          width={700}
          height={800}
        /> */}
        <CustomImage src={mockup} className="w-[400px] h-[600px]" />
      </div>
    </div>
  );
};

export default E2ESecurity;
