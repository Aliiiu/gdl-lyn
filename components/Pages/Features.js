import React from "react";
import { AppButton } from "../Widgets/Button/AppButton";
// import mockup from "../../assets/Images/mockup-one.png";
// import mockup2 from "../../assets/Images/heroBg2.png";
import Image from "next/image";
import CustomImage from "../Widgets/CustomImage/CustomImage";

const features = [
  {
    id: 1,
    content:
      "One of the advantage of fintech is that it can reduct the circulation of counterfiet money",
  },
  {
    id: 2,
    content:
      "The existence of the transaction history recording feature is an interesting feature of the paycast",
  },
];

const Features = () => {
  return (
    <div className="flex gap-6">
      <div className="feature flex-1 flex flex-col justify-center items-center lg:items-start gap-4 py-10">
        <div className="header flex gap-3 items-center ">
          <div className="w-8 h-1 bg-gray-700"></div>
          <h5 className="">Features for you</h5>
        </div>
        <div className="title">
          <h3 className="text-2xl lg:text-4xl animate-fade-in lg:max-w-[600px] font-semibold">
            Fintech, One App Thousands of Benefits
          </h3>
        </div>
        <div className="pointers flex flex-col gap-5 py-2">
          {features.map(feature => (
            <div
              key={feature.id}
              className="flex items-start text-sm lg:text-base gap-3 pl-2 max-w-[500px]"
            >
              {/* <span className="w-2 h-2 flex-shrink-0 bg-gray-800 mt-2 rounded-full" /> */}
              {feature.content}
            </div>
          ))}
          <div className="w-full flex-1 mt-4">
            <AppButton
              name="Read More"
              className="bg-gray-700 px-6 py-3 lg:px-10 lg:py-4 text-md font-semibold"
            />
          </div>
        </div>
      </div>
      <div
        // data-aos="zoom-in"
        // data-aos-offset="100"
        className="mockup hidden lg:block flex-1"
      >
        <CustomImage
          src={"/Images/heroBg2.png"}
          className="w-[600px] animate-zoom-out h-[700px]"
        />
      </div>
    </div>
  );
};

export default Features;
