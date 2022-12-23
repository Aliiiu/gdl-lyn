import Topbar from "../components/TopNav/Topbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
