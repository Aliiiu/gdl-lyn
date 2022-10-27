import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { BsShieldLock } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { StyledCard } from "./merit.style";
import AppModal from "../Widgets/Modal/Modal";
import ModalContent from "./ModalContent";

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
    actionContent: "Great returns",
    content:
      "For a period of 6 months, enjoy an investment that offers you a lavish return as high as 15% p.a.",
  },
  {
    id: 2,
    icon: (
      <div className="flex justify-center items-center p-3 rounded-[50%] bg-[#E0EFFE]">
        <BsPersonCheck color="#3196FE" size={30} />
      </div>
    ),
    title: "Tailored Rate Bands",
    action: (
      <div className="flex justify-center bg-[#E0EFFE] rounded-[50%] items-center p-2">
        <BsArrowRight color="#3196FE" />
      </div>
    ),
    actionContent: "High Rates",
    content:
      "The Note offers you three (3) investment tiers, with a minimum of N5,000,000 required.",
  },
  {
    id: 3,
    icon: (
      <div className="flex justify-center items-center p-3 rounded-[50%] bg-[#E0EFFE]">
        <BsShieldLock color="#003399" size={30} />
      </div>
    ),
    title: "Interest Payment Frequency",
    action: (
      <div className="flex justify-center bg-[#E0EFFE] rounded-[50%] items-center p-2">
        <BsArrowRight color="#003399" />
      </div>
    ),
    actionContent: "Quick Payouts",
    content:
      "Take charge of the frequency of your interest payments, monthly, or at the end of the investment tenor (6 months).",
  },
  {
    id: 4,
    icon: (
      <div className="flex justify-center items-center p-3 rounded-[50%] bg-[#E0EFFE]">
        <BsShieldLock color="#003399" size={30} />
      </div>
    ),
    title: "Guaranteed Perks",
    action: (
      <div className="flex justify-center bg-[#E0EFFE] rounded-[50%] items-center p-2">
        <BsArrowRight color="#003399" />
      </div>
    ),
    actionContent: "Enjoy Great Perks",
    content:
      "Enjoy fantastic perks that gets even more exciting with a higher level of investment.",
  },
];

const Merit = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row gap-7 justify-between">
      <AppModal
        open={open}
        onClose={() => setOpen(false)}
        content={<ModalContent />}
      />
      <div className="flex flex-1 self-center flex-col gap-5">
        <div className="header flex gap-3 items-center">
          <div className="lg:w-10 w-6 h-1 bg-gray-700"></div>
          <h5 className="text-base">Packages</h5>
        </div>
        <h4 className="text-2xl lg:text-4xl animate-fade-in capitalize font-semibold">
          What’s in It for You?
        </h4>
        <div className="max-w-[400px] text-sm text-black text-opacity-70 lg:text-base">
          From interest rates to added benefits, each detail of the Luxury Yield
          Note is an all-round, elevated investment experience. Check out some
          of the premium features of the Note:
        </div>
      </div>
      <div className="grid md:grid-cols-2 self-center  gap-4 lg:gap-8">
        {merits.map(merit => (
          <StyledCard
            key={merit.id}
            className={` flex flex-col justify-start bg-[#8D2E36] text-white ease-in-out shadow-sm max-w-[300px] py-10 px-7 rounded-md `}
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
              <button
                onClick={() => setOpen(true)}
                className="subtitle flex items-center gap-3"
              >
                {merit.action} Learn More
              </button>
            </div>
          </StyledCard>
        ))}
      </div>
    </div>
  );
};

export default Merit;
