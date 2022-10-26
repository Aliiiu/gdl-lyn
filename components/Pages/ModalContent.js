import React from "react";
import { rates } from "../../constants/plans";
import Table from "../Widgets/Table";

const ModalContent = props => {
  const rateHeader = [
    { title: "Bands", render: row => `${row.band}` },
    { title: "Investment Range", render: row => `${row.range}` },
    { title: "Interest Rate (Net)", render: row => `${row.rate}` },
  ];
  return (
    <section className="w-5/6 mx-auto">
      <div className=" bg-white">
        <div className="flex flex-col md:flex-row gap-5 xl:gap-0 bg-gray-400 p-4 xl:p-12 w-full">
          <div className="flex-1 border-r-2 border-r-gray-200">
            <h2 className="uppercase font-bold text-4xl text-white max-w-xs">
              gdl <span className="text-red-600">luxury</span> yield note
            </h2>
          </div>
          <div className="flex-1 xl:self-end flex xl:justify-center">
            <div>
              <h3 className="text-white text-2xl font-semibold">GDL Finance</h3>
              <em className="text-white font-medium">
                A company licenced by CBN
              </em>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-4 xl:px-12 py-8 gap-10">
          <div className="flex-1 flex flex-col gap-3 md:gap-6 lg:gap-8">
            <div>
              <h2 className="text-red-500 text-xl font-semibold">
                Investment Amount
              </h2>
              <p>The minimum investment amount is ₦5,000,000</p>
              <p className="mt-5">
                Investors are categorized into three (3) rate bands or capital
                levels. Band I are investors with a minimum investment of
                ₦5,000,000 or more. Band II are investors with ₦25,000,000
                minimum or more, while the third band, Band III are investors
                with a minimum of ₦50,000,000 or more.
              </p>
            </div>
            <div>
              <h2 className="text-gray-700 text-xl font-semibold">
                Interest Rate
              </h2>
              {/* <Table rows={rates} headers={rateHeader} /> */}
              <p>
                For this offer, the investor has the option to receive principal
                and interest at maturity of the investment or get paid monthly
                interest payments.
              </p>
              <p className="mt-5">
                The note allows for a minimum top-up amount of ₦1,000,000 for
                all bands to receive interest based on days remaining on running
                investment.
              </p>
            </div>
            <div>
              <h2 className="text-red-500 text-xl font-semibold">Perks</h2>
              <p>Upon sign up, you are entitled to amazing perks such as;</p>
              <ul className="mt-5">
                <li>
                  <span className="px-2">-</span>Modem and 70GB data for Band I
                </li>
                <li>
                  <span className="px-2">-</span>Modem, 70GB data and ₦30K
                  voucher for Band II, and
                </li>
                <li>
                  <span className="px-2">-</span>Modem, 110GB data and ₦50k
                  voucher for Band III
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 md:gap-6 lg:gap-8">
            <div>
              <h2 className="font-semibold text-xl">Target Period</h2>
              <p>
                This opportunity is limited to investors who are looking to
                cushion their funds and expand their yield
              </p>
              <p className="mt-5">
                The Luxury Yield Note is exclusively for experienced investors,
                who are willing to see the investment through and may not need
                to retract the funds before the end of the investment period
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-xl">
                Pre-Liquidation & Early Termination
              </h2>
              <p className="mt-5">
                This product permits pre-liquidation, with three working
                days&apos; notice. The note also provides an opportunity for
                early termination; however, the investor will incur a penal
                charge of 35%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalContent;
