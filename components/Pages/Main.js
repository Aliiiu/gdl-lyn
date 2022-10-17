import React from "react";
import Homepage from "./Home";
import PageContainer from "../Layout/PageContainer";
import Product from "./Product";
import GetStarted from "./GetStarted";
import LoanProduct from "./LoanProduct";
import Investment from "./Investment";
import Testimonies from "./Testimonies";
import Blog from "./Blog";
import FAQs from "./FAQs";
import JoinClub from "./JoinClub";
import Contact from "./Contact";
import HowitWorks from "./HowitWorks";
import Features from "./Features";
import Merit from "./Merit";
import E2ESecurity from "./E2ESecurity";
import PricingPlan from "./PricingPlan";

const Main = () => {
  return (
    <PageContainer className="">
      <section id="home" className="container lg:w-5/6 xl:w-4/6 w-full pb-0">
        <Homepage />
      </section>
      {/* <section id="how-it-works" className="container lg:w-5/6 xl:w-4/6 w-full">
        <HowitWorks />
      </section> */}
      <section
        id="products"
        className="container relative lg:w-5/6 xl:w-4/6 w-full py-10 lg:pt-[2rem]"
      >
        <div className="absolute top-0 -z-10 left-0 flex justify-center items-center -ml-32">
          <div className="flex items-center justify-center rounded-[9999px] dark:border-gray-800 border-[#FFF1F4] w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] border-[32px]">
            <div className="flex items-center justify-center rounded-[9999px] dark:border-gray-900 border-[#FFF5F7] border-[32px] w-[345px] h-[345px] lg:w-[745px] lg:h-[745px]" />
          </div>
        </div>
        <Merit />
      </section>
      {/* <section
        id="features"
        className="container lg:w-5/6 xl:w-4/6 w-full md:py-10"
      >
        <Features />
      </section> */}
      <section
        id="end-to-end-security"
        className="container lg:w-5/6 xl:w-4/6 w-full "
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
      <section className="bg-[#8D2733] py-10 flex justify-center w-full">
        <div className="container w-full lg:w-5/6 xl:w-4/6">
          <FAQs />
        </div>
      </section>
      <section
        id="contact"
        className="container lg:w-5/6 xl:w-4/6 w-full py-16"
      >
        <Contact />
      </section>
    </PageContainer>
  );
};

export default Main;
