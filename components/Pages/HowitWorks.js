import React from "react";

const howItWorks = [
  {
    id: 1,
    title: "register",
    content: "Register yourself as a Payfast application user",
  },
  {
    id: 2,
    title: "add new card",
    content: "Create a new card for you to use anytime and anywhere",
  },
  {
    id: 3,
    title: "success",
    content: "You can use Payfast in peace and all its facilites",
  },
];

const HowitWorks = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center">
      <div className="header flex gap-3 items-center">
        <div className="lg:w-10 w-6 h-1 bg-gray-700"></div>
        <h5 className="text-base">Process</h5>
      </div>
      <div className="title">
        <h3 className="text-2xl lg:text-4xl font-semibold">How it works</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:justify-between py-4 lg:py-8 w-full">
        {howItWorks.map(step => (
          <div
            key={step.id}
            className="flex flex-col gap-2 bg-gray-50 lg:gap-4 w-full items-center p-5 py-10 rounded-2xl"
          >
            <div className="lg:w-8 lg:h-8 w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center">
              {step.id}
            </div>
            <h3 className="capitalize text-xl lg:text-2xl font-semibold">
              {step.title}
            </h3>
            <p className="max-w-[210px] w-full text-sm lg:text-base text-center">
              {step.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowitWorks;
