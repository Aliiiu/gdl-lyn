import React from "react";
import AppAccordion from "../Widgets/Accordion/Accordion";

const FAQs = () => {
  const faqArray = [
    {
      question: "Who is GDL?",
      answer:
        "Growth and Development Limited (GDL) is a non-bank financial institution licensed by the Central Bank of Nigeria (CBN) to carry on financing business in Nigeria. As such, our activities are monitored and supervised by the CBN",
    },
    {
      question: "What are my options on interest payments?",
      answer:
        "With the Luxury Yield Note, you have the option of receiving monthly payments for the tenor of the investment or at the maturity (6 months).",
    },
    {
      question: "Is early investment termination an option?",
      answer:
        "Yes, you can withdraw your funds before maturity of the investment. However, the investor will incur a 35% penal charge on interest for early termination. Please note that interest is stated as per annum",
    },
    {
      question: "Can I top up my investment?",
      answer:
        "Yes. The note allows for a minimum top-up amount of ₦1,000,000 for all bands and the investor will receive interest based on the days remaining on the running investment.",
    },
  ];
  return (
    <div className="">
      <div className="top flex flex-col items-center">
        <div className="header flex gap-3 mb-4 items-center ">
          <div className="w-8 h-1 bg-gray-700"></div>
          <h5 className="">FAQs</h5>
        </div>
        <div className="topic">
          <h1 className="text-2xl tracking-wider text-center font-bold text-primary lg:text-4xl">
            <span>Get Answers Here.</span>
          </h1>
        </div>
        <div className="sub-topic py-3 lg:py-7 pb-1">
          <span>
            <p className="font-medium text-info text-sm md:text-base leading-relaxed text-center">
              Answers To The Questions We Believe You Might Have In Mind.
            </p>
          </span>
        </div>
      </div>
      <div className="bottom pt-7 md:pt-0">
        {faqArray.map((content, index) => (
          <AppAccordion
            key={content.question}
            {...content}
            panel={`panel${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
