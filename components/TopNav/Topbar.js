import { useState } from "react";
import { TopContainer } from "./topbar.style";
import LinkList from "../Widgets/Link/Link";
import Link from "next/link";
import Menu, { MenuClose } from "../Widgets/Icons/Menu";
import { Transition } from "@headlessui/react";
import { AppButton } from "../Widgets/Button/AppButton";
import CustomImage from "../Widgets/CustomImage/CustomImage";
import img from "../../assets/Images/gdl-logo.png";
import { useTheme } from "next-themes";

const Topbar2 = props => {
  const [mode, setMode] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <TopContainer className="bg-white w-full border-b border-gray-200">
      <div className="bg-transparent lg:w-4/6 w-full animate-fade-in">
        <nav className="px-2 sm:px-8 py-2.5 z-20 top-0 left-0">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
              <CustomImage
                src={img}
                className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]"
              />
            </Link>
            <div className="flex md:order-2 justify-start">
              <div className="hidden md:block">
                <AppButton
                  name="Get Started"
                  size="17px"
                  className="bg-black px-6 py-3 text-md font-semibold"
                />
              </div>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center sm:p-2 p-0 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                {!open ? <Menu theme={theme} /> : <MenuClose theme={theme} />}
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0 md:bg-white dark:bg-black md:dark:bg-black text-gray-500 dark:text-gray-400 dark:border-gray-700">
                <LinkList name="Home" url="/about" />
                <LinkList name="Personal" url="/blogs" />
                <LinkList name="Business" url="/portfolio" />
                <LinkList name="Company" />
              </ul>
            </div>
          </div>
          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {ref => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <ul className="flex flex-col items-center p-4 mt-4 bg-gray-50 rounded-lg border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0 md:bg-white dark:bg-black md:dark:bg-black text-gray-500 dark:text-gray-400 dark:border-gray-700">
                    <LinkList name="about" url="/about" />
                    <LinkList name="Personal" url="/blogs" />
                    <LinkList name="Business" url="/portfolio" />
                    <LinkList name="Company" />
                    <AppButton
                      name="Get Started"
                      size="17px"
                      className="bg-black px-4 py-2 text-md font-semibold"
                    />
                  </ul>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </TopContainer>
  );
};

export default Topbar2;
