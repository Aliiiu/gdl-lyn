import React from "react";
import plans from "../../constants/plans";

const PricingPlan = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-2xl lg:text-4xl font-semibold">Pricing Plans</h3>
      <p className="max-w-[600px] text-sm lg:text-base text-center">
        Present sapien massa, convallis a pellentesque nec, egestas non nisi.
        Donec rutrum congue leo eget malesuada
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {plans.map(plan => (
          <div
            key={plan.id}
            className=" bg-gray-100 h-[350px] lg:h-[400px] flex flex-col justify-between items-center  hover:scale-y-110 px-5 lg:px-10 py-8 rounded-xl"
          >
            <div className="flex flex-col gap-4 lg:gap-8 items-center">
              <h5>{plan.title}</h5>
              <h1 className="font-bold text-2xl lg:text-4xl">
                {plan.package}{" "}
                <span className="text-base font-thin">{plan.billing}</span>
              </h1>
              <p className="max-w-[300px] text-sm lg:text-base">
                {plan.content}
              </p>
            </div>
            <button className="bg-transparent border rounded-[32px] border-black text-sm lg:text-base py-3 px-4 lg:px-6 hover:bg-black hover:text-white">
              Start {plan.id === 1 ? "Free" : "Your"} Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
