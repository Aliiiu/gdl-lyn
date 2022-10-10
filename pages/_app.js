import Topbar from "../components/TopNav/Topbar";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)s

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8D2E36" />
        <meta
          name="description"
          content="Save, Invest and Borrow with Ease. Relax and make your money work for you."
        />
        <meta property="og:site_name" content="GDL-PR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.anyworks-ng.com" />
        <meta
          property="og:description"
          content="Save, Invest and Borrow with Ease. Relax and make your money work for you."
        />
        <meta
          property="og:image"
          content="https://www.anyworks-ng.com/gdl-logo.png"
        />
        <meta property="og:url" content="https://www.anyworks-ng.com" />
        <meta name="twitter:image" content="/icon.png" />

        <link
          rel="shortcut icon"
          href="https://www.anyworks-ng.com/gdl-logo.png"
        />
      </Head>
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
