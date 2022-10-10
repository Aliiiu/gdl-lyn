import React from "react";
import { IoSettings } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoIosUnlock } from "react-icons/io";

const merits = [
  {
    id: 1,
    icon: <IoSettings size={50} />,
    title: "Very Practical",
    content:
      "Finance any kind of savings and open account anytime by checking QR cPay and withdrawals",
  },
  {
    id: 2,
    icon: <BsPersonCheckFill size={50} />,
    title: "Easy Mutations and Check",
    content:
      "Finance any kind of savings and open account anytime by checking QR cPay and withdrawals",
  },
  {
    id: 3,
    icon: <IoIosUnlock size={50} />,
    title: "Complex Features",
    content:
      "Finance any kind of savings and open account anytime by checking QR cPay and withdrawals",
  },
];

const Merit = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row justify-between">
        <h4 className="text-2xl lg:text-4xl capitalize font-semibold">
          Advantages of using <br /> card bank
        </h4>
        <div className="flex items-start gap-3 max-w-[500px] text-sm lg:text-base xl:pr-20">
          <span className="w-2 h-2 flex-shrink-0 bg-gray-800 self-start mt-2 rounded-full" />
          One of the advantage of fintech is that it can reduct the circulation
          of counterfiet money. The existence of the transaction history
          recording feature is an interesting feature of the paycast
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-10 lg:mt-20">
        {merits.map(merit => (
          <div
            key={merit.id}
            className="flex flex-col items-center justify-center bg-gray-200 h-[250px] lg:h-[300px] px-7 rounded-xl"
          >
            <div className="flex flex-col items-center pt-3 gap-4 lg:gap-12">
              <div className="">{merit.icon}</div>

              <div className="text-center">
                <h3 className="font-semibold text-xl lg:text-2xl">
                  {merit.title}
                </h3>
                <p className="text-sm lg:text-base">{merit.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merit;
