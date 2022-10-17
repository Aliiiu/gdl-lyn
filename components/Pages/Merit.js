import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { BsShieldLock } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { StyledCard } from "./merit.style";

const merits = [
  {
    id: 1,
    icon: (
      <div className="flex justify-center items-center p-3 rounded-[50%] bg-[#FCE7F5]">
        <IoSettingsOutline color="#E6278E" size={30} />
      </div>
    ),
    title: "Lavish Returns",
    action: (
      <div className="flex justify-center bg-[#FCE7F5] rounded-[50%] items-center p-2">
        <BsArrowRight color="#E6278E" />
      </div>
    ),
    content:
      "For a period of 3 months, Finance an investment that enables you to get a lavish return as high as 15%.",
  },
  {
    id: 2,
    icon: (
      <div className="flex justify-center items-center p-3 rounded-[50%] bg-[#E0EFFE]">
        <BsPersonCheck color="#3196FE" size={30} />
      </div>
    ),
    title: "Rate Bands",
    action: (
      <div className="flex justify-center bg-[#E0EFFE] rounded-[50%] items-center p-2">
        <BsArrowRight color="#3196FE" />
      </div>
    ),
    content:
      "Get access to three (3) rate bands suited just for you, starting from N5,000,000.",
  },
  {
    id: 3,
    icon: (
      <div className="flex justify-center items-center p-3 rounded-[50%] bg-[#E0EFFE]">
        <BsShieldLock color="#003399" size={30} />
      </div>
    ),
    title: "Monthly Interest",
    action: (
      <div className="flex justify-center bg-[#E0EFFE] rounded-[50%] items-center p-2">
        <BsArrowRight color="#003399" />
      </div>
    ),
    content: "You can also choose to earn interest monthly.",
  },
];

const Merit = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-7 justify-between">
      <div className="flex flex-1 self-center flex-col gap-5">
        <div className="header flex gap-3 items-center">
          <div className="lg:w-10 w-6 h-1 bg-gray-700"></div>
          <h5 className="text-base">Packages</h5>
        </div>
        <h4 className="text-2xl lg:text-4xl animate-fade-in capitalize font-semibold">
          Packages Just For You
        </h4>
        <div className="max-w-[400px] text-sm text-black text-opacity-70 lg:text-base">
          {/* One of the advantage of fintech is that it can reduct the circulation
          of counterfiet money. The existence of the transaction history
          recording feature is an interesting feature of the paycast */}
          For a period of 3 months, make prestige investment moves that empower
          you to earn desirable returns, from 12 to 15%.
        </div>
      </div>
      <div className="grid md:grid-cols-2 self-center  gap-4 lg:gap-8">
        {merits.map(merit => (
          <StyledCard
            key={merit.id}
            className={` flex flex-col justify-start bg-[#8D2E36] text-white ease-in-out shadow-sm max-w-[300px] py-10 px-7 rounded-md ${
              merit.id === 3 ? "md:col-start-2 md:col-end-3" : ""
            }`}
          >
            <div
              className={`card flex flex-col items-start pt-3 gap-4 lg:gap-6 `}
            >
              <div className="">{merit.icon}</div>

              <div className="">
                <h3 className="font-semibold text-xl lg:text-2xl">
                  {merit.title}
                </h3>
                <p className="text-sm text-[15px] pt-2">{merit.content}</p>
              </div>
              <div className="subtitle flex items-center gap-3">
                {merit.action}
                Learn More
              </div>
            </div>
          </StyledCard>
        ))}
      </div>
    </div>
  );
};

export default Merit;
