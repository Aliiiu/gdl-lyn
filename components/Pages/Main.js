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
      <section id="how-it-works" className="container lg:w-5/6 xl:w-4/6 w-full">
        <HowitWorks />
      </section>
      <section
        id="features"
        className="container lg:w-5/6 xl:w-4/6 w-full md:py-10"
      >
        <Features />
      </section>
      <section
        id="advantages"
        className="container lg:w-5/6 xl:w-4/6 w-full md:py-10"
      >
        <Merit />
      </section>
      <section
        id="end-to-end-security"
        className="container lg:w-5/6 xl:w-4/6 w-full md:py-10 "
      >
        <E2ESecurity />
      </section>
      {/* <section id="pricing-plan" className="container lg:w-4/6 w-full md:py-10">
        <PricingPlan />
      </section> */}
      {/* <section
				id='about'
				className='container m-auto md:px-6 py-10 pt-0 w-full'
			>
				<Product />
			</section> */}
      {/* <section id='' className='m-auto py-10'>
				<GetStarted />
			</section> */}
      {/* <section
				id='our-product'
				className='container m-auto md:px-6 py-16 w-full'
			>
				<LoanProduct />
			</section> */}
      {/* <section className='m-auto py-10'><Investment /></section> */}
      {/* <section className='container m-auto md:px-6 py-16 w-full'>
				<Testimonies />
			</section>
			<section id='blog' className='m-auto py-10'>
				<Blog />
			</section> */}
      <section id="faq" className="container lg:w-5/6 xl:w-4/6 w-full py-10">
        <FAQs />
      </section>
      <section className="bg-[#333333] py-10 flex justify-center w-full">
        <div className="container w-full lg:w-5/6 xl:w-4/6">
          <JoinClub />
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
