import Topbar from "../components/TopNav/Topbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import * as gtag from "../components/utils/gtag";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Z8D1DNW2XT"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-Z8D1DNW2XT')
					`,
        }}
      />
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
