import React from "react";
import playstore from "../../assets/Images/PlayStore.png";
import appstore from "../../assets/Images/AppStore.png";
import arrow from "../../assets/Images/Arrow.png";
import person from "../../assets/Images/Person.png";
import bars from "../../assets/Images/Bars.png";
import coins from "../../assets/Images/Coins.png";
import bgHero from "../../assets/Images/bgHero.png";
import { AppButton } from "../Widgets/Button/AppButton";
import { StoreButton, Content } from "../Widgets/Button/StoreButton";
import PlayStore from "../../assets/Images/google.png";
import AppStore from "../../assets/Images/apple.png";
import Flash from "react-reveal/Flash";
import LightSpeed from "react-reveal/LightSpeed";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-4 md:py-5 md:pb-0">
      <div className="info flex-1 py-10 justify-center flex flex-col">
        <Flash>
          <div className="bg-transparent text-center lg:text-left">
            <h1 className="text-3xl font-extrabold text-primary md:text-5xl lg:max-w-[500px]">
              Build <span className="text-second inline">Wealth</span>
              <br />
              Comfortably.
            </h1>
          </div>
        </Flash>
        <div className="py-5 pb-1">
          <LightSpeed right cascade>
            <span>
              <p className="font-normal text-info text-center lg:text-left text-sm md:text-base lg:text-lg leading-relaxed mx-auto lg:mx-0 max-w-[350px]">
                Save, Invest and Borrow with Ease. Relax and make your money
                work for you.
              </p>
            </span>
          </LightSpeed>
        </div>
        <AppButton
          name="Create free account"
          className="bg-black px-4 py-2 mx-auto lg:mx-0 text-xl mt-4 font-semibold"
        />
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-14 sm:px-0 md:gap-6 py-7">
          <StoreButton
            className="px-5 py-3"
            name={<Content type="PlayStore" img={PlayStore} />}
          />
          <StoreButton
            className="px-5 py-3"
            name={<Content type="AppStore" img={AppStore} />}
          />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-offset="50"
        className="svg-info flex-1 lg:flex flex-col hidden items-center py-12"
      >
        <Image src={bgHero} alt="" />
      </div>
    </div>
  );
};

export default Home;
