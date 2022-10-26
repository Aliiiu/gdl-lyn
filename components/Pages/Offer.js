import React, { useState } from "react";
import { AppButton } from "../Widgets/Button/AppButton";
import AppModal from "../Widgets/Modal/Modal";
import ModalContent from "./ModalContent";

const Offer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container w-full xl:pt-16 xl:pb-8 lg:w-5/6 xl:w-4/6">
      <AppModal
        open={open}
        onClose={() => setOpen(false)}
        content={<ModalContent />}
      />
      <h2 className="text-center text-white xl:pt-8 text-2xl xl:text-4xl font-bold">
        The Offer
      </h2>
      <p className="text-center mt-2 text-white">
        This is a limited, short term offer of 6 months, <br /> high interest
        investment policy
      </p>
      <div className="flex mt-8 justify-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-black px-6 py-3 lg:px-10 rounded-lg text-white font-thin lg:py-4 text-md"
        >
          Learn More
        </button>
        {/* <AppButton
          onClick={() => setOpen(true)}
          name="Learn More"
          className="bg-black px-6 py-3 lg:px-10 lg:py-4 text-md font-semibold"
        /> */}
      </div>
    </div>
  );
};

export default Offer;
