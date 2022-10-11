import React from "react";
import { StartContainer } from "./page.style";
import { AppButton } from "../Widgets/Button/AppButton";
import Flash from "react-reveal/Flash";
import FormTextField from "../Widgets/Form/Form";

const JoinClub = () => {
  return (
    <StartContainer
      padding="5em 0"
      bg="#333333"
      className="text-white bg-[#333333]"
    >
      <div className="flex flex-col bg-[#333333] lg:flex-row justify-between">
        <div className="flex flex-1 flex-col">
          <div className="topic">
            <Flash>
              <h1 className="text-2xl tracking-wider font-bold text-white md:text-5xl">
                <span>Join The Club.</span>
              </h1>
            </Flash>
          </div>
          <div className="py-5 pb-1">
            <span>
              <p className="text-white text-sm md:text-base max-w-[400px] leading-relaxed">
                Subscribe to our Newsletter and be the first to receive updates
                on our new Investment Opportunities and Promotions.
              </p>
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <FormTextField label="Name" type="text" />
          <FormTextField label="Email" type="email" />
          <FormTextField label="Phone Number" type="phone" />
          <div className="pt-7">
            {/* <AppButton
              name="Get Started"
              size="20px"
              className="bg-black px-12 py-4 font-semibold"
            /> */}
            <AppButton
              name="Get Started"
              className="bg-black px-6 py-3 lg:px-10 lg:py-4 text-md font-semibold"
            />
          </div>
        </div>
      </div>
    </StartContainer>
  );
};

export default JoinClub;
