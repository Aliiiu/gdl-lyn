import React from "react";
import AppAccordion from "../Widgets/Accordion/Accordion";
import { Container, CardDiv } from "./page.style";
import { Content } from "../Widgets/Blog/BlogContent";

const FAQs = () => {
  const faqArray = [
    {
      question: "Where are you located?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "What licenses do you have?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How can I be sure my money is safe with you?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How many products are there?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How fast can I withdraw?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <div className="">
      {/* <div className="top flex flex-col items-center">
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
      </div> */}
      <div className="bottom pt-7 md:pt-0">
        {/* {faqArray.map((content, index) => (
          <AppAccordion
            key={content.question}
            {...content}
            panel={`panel${index + 1}`}
          />
        ))} */}
        <div className="px-0 pt-4 md:pt-10">
          <Container
            bg="#8D2733"
            height="20em"
            className="px-5 py-8 lg:p-10 lg:py-16 flex justify-center"
          >
            <Content
              no_gen
              is_btn
              topic="Ready To Get Started ?"
              className="text-white max-w-[600px] items-center text-center"
              sub_topic={
                <i className="font-medium">
                  It takes only just a few minutes to start earning superior
                  returns.
                </i>
              }
            />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
