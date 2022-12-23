import React from "react";
import Homepage from "./Home";
import PageContainer from "../Layout/PageContainer";
import FAQs from "./FAQs";
import Contact from "./Contact";
import Merit from "./Merit";
import E2ESecurity from "./E2ESecurity";
import { Container, CardDiv } from "./page.style";
import { Content } from "../Widgets/Blog/BlogContent";
import Table from "../Widgets/Table";
import Offer from "./Offer";

const Main = () => {
  return (
    <PageContainer className="">
      <section
        id="home"
        className="container mx-auto lg:w-11/12 2xl:w-4/6 w-full pb-0"
      >
        <Homepage />
      </section>
      {/* <section id="how-it-works" className="container lg:w-5/6 xl:w-4/6 w-full">
        <HowitWorks />
      </section> */}
      <section
        id="products"
        className="container mx-auto relative lg:w-11/12 2xl:w-4/6 w-full py-10 lg:pt-[2rem]"
      >
        <div className="absolute top-0 -z-10 left-0 flex justify-center items-center -ml-32">
          <div className="flex items-center justify-center rounded-[9999px] border-[#FFF1F4] w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] border-[32px]">
            <div className="flex items-center justify-center rounded-[9999px] border-[#FFF5F7] border-[32px] w-[345px] h-[345px] lg:w-[745px] lg:h-[745px]" />
          </div>
        </div>
        <Merit />
      </section>
      <section
        id="perks"
        className="container mx-auto lg:w-11/12 2xl:w-4/6 w-full "
      >
        <E2ESecurity />
      </section>
      {/* <section id="pricing-plan" className="container lg:w-4/6 w-full md:py-10">
        <PricingPlan />
      </section> */}
      {/* <section id='' className='m-auto py-10'>
				<GetStarted />
			</section> */}
      {/* <section
        id="faq"
        className="bg-[#8D2733] lg:w-5/6 xl:w-4/6 w-full py-10 lg:py-0"
      >
        <FAQs />
      </section> */}
      <section className="bg-[#8D2733] flex py-10 justify-center w-full">
        <Offer />
      </section>
      <section id="get-started" className="py-10 flex justify-center w-full">
        <div className="container w-full lg:w-11/12 2xl:w-4/6">
          <FAQs />
        </div>
      </section>
      <section
        id="get-started"
        className="bg-[#8D2733] py-10 flex justify-center w-full"
      >
        <div className="container w-full lg:w-11/12 2xl:w-4/6">
          <div className="px-0 pt-4 xl:pt-8">
            <Container
              bg="#8D2733"
              // height="10em"
              className="px-5 xl:py-8 flex justify-center"
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
      </section>
      <section
        id="contact"
        className="container mx-auto lg:w-11/12 2xl:w-4/6 w-full py-16"
      >
        <Contact />
      </section>
    </PageContainer>
  );
};

export default Main;
