import React from "react";
import bgHero from "../../assets/Images/LM4.png";
import { AppButton } from "../Widgets/Button/AppButton";
import { StoreButton, Content } from "../Widgets/Button/StoreButton";
import PlayStore from "../../assets/Images/google.png";
import AppStore from "../../assets/Images/apple.png";
import Image from "next/image";
import CustomImage from "../Widgets/CustomImage/CustomImage";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:py-5 md:pb-0">
      <div className="info flex-1 pt-5 xl:justify-center flex flex-col">
        <div className="bg-transparent text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-primary md:text-5xl xl:text-6xl lg:max-w-[420px]">
            <span className="text-second uppercase inline">Luxury</span> in
            Every Detail.
          </h1>
        </div>
        <div className="py-5 pb-1">
          <span>
            <p className="font-normal text-info text-center md:text-left text-sm md:text-base lg:text-lg leading-relaxed mx-auto lg:mx-0 max-w-[450px] font-ibm-font">
              Introducing exclusivity and value in the{" "}
              <span className="text-second inline">Luxury Yield Note</span> - a
              limited offer investment note.
            </p>
          </span>
        </div>
        <AppButton
          name="Sign Up To Get Started"
          className="bg-black px-8 py-3 max-w-max mx-auto md:mx-0 text-xl mt-4 xl:mt-8 font-semibold"
        />
        {/* <h5 className="text-xs max-w-[350px] mt-2 text-info">
          Sign Up For Guaranteed Perks (Such As High-Tech Modems, Data
          Subscriptions, Gift Vouchers and much more).
        </h5> */}
        {/* <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 px-14 sm:px-0 md:gap-6 py-7 xl:py-10">
          <StoreButton
            className="px-5 py-3 flex-1 max-w-max mx-auto md:mx-0"
            name={<Content type="PlayStore" img={PlayStore} />}
          />
          <StoreButton
            className="px-5 py-3 flex-1 max-w-max mx-auto md:mx-0"
            name={<Content type="AppStore" img={AppStore} />}
          />
        </div> */}
      </div>
      <div className="flex-1 flex flex-col">
        {/* <CustomImage
          src={bgHero3}
          className="animate-zoom-out w-[600px] h-[600px]"
        /> */}
        <div
          className={`relative hidden md:block flex-shrink-0 animate-zoom-out w-[400px] xl:w-[700px] h-[300px] xl:h-[600px]`}
        >
          <Image src={bgHero} alt={""} layout="fill" objectFit="cover" />
        </div>
        {/* <CustomImage
          src={bgHero}
          className="animate-zoom-out w-[700px] h-[300px] xl:h-[600px]"
        /> */}
      </div>
    </div>
  );
};

export default Home;
