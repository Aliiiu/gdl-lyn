import { useState } from "react";
import { Linker, TopContainer } from "./topbar.style";
import LinkList from "../Widgets/Link/Link";
import Link from "next/link";
import Menu, { MenuClose } from "../Widgets/Icons/Menu";
import { Transition } from "@headlessui/react";
import { AppButton } from "../Widgets/Button/AppButton";
import CustomImage from "../Widgets/CustomImage/CustomImage";
import img from "../../assets/Images/gdl-logo.png";
import lyn from "../../assets/Images/lyn-logo.png";
import { useTheme } from "next-themes";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { useRouter } from "next/router";

const navigation = [
  // { name: "Home", href: "www.gdl.com.ng", current: true },
  { name: "Features", href: "products", current: false },
  { name: "Perks", href: "perks", current: false },
  { name: "Contact", href: "contact", current: false },
];

const Topbar2 = props => {
  const [mode, setMode] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  console.log(router.pathname);
  const showNavBar = router.pathname === "/" ? true : false;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <TopContainer className="bg-white top-0 sticky z-40 w-full border-b border-gray-200">
      <div className="bg-transparent lg:w-11/12 2xl:w-4/6 w-full animate-fade-in">
        <nav className="py-2.5 z-20 top-0 left-0">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div
              className={`${showNavBar ? "" : "flex justify-center w-full"}`}
            >
              <Link href="/">
                <a>
                  <CustomImage
                    src={showNavBar ? img : lyn}
                    className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                  />
                </a>
              </Link>
            </div>
            {showNavBar && (
              <div className="flex md:order-2 justify-start">
                <div className="hidden md:block">
                  <AppButton
                    name="Get Started"
                    className="bg-black px-6 py-3 text-md font-semibold"
                  />
                </div>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center pr-3 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open main menu</span>
                  {!open ? <TiThMenu size={25} /> : <IoMdClose size={25} />}
                </button>
              </div>
            )}

            {showNavBar && (
              <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0 md:bg-white text-gray-500">
                  {navigation.map(item => (
                    <Linker
                      key={item.name}
                      to={item.href}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                      className={classNames(
                        item.current ? "text-white link-text" : "text-gray-300",
                        "px-3 py-2 rounded-md text-lg font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Linker>
                  ))}
                  <li className="text-lg text-[#8d2e36] font-medium">
                    <a
                      href="https://gdl.com.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About GDL
                    </a>
                  </li>
                </ul>
              </div>
            )}
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
                  <ul className="flex flex-col items-center p-4 mt-4 bg-gray-50 rounded-lg border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0 md:bg-white text-gray-500">
                    {navigation.map(item => (
                      <Linker
                        key={item.name}
                        to={item.href}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        className={classNames(
                          item.current
                            ? "text-white link-text"
                            : "text-gray-300",
                          "px-3 py-2 rounded-md text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Linker>
                    ))}
                    <li className="text-lg mb-4 text-[#8d2e36] font-medium">
                      <a
                        href="https://gdl.com.ng"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        About GDL
                      </a>
                    </li>
                    <AppButton
                      name="Get Started"
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
