import Layout from "../components/Layout/Layout";
import Main from "../components/Pages/Main";
import Head from "next/head";
import { useEffect, useState } from "react";
import { detect } from "detect-browser";
import { useRouter } from "next/router";
import AppModal from "../components/Widgets/Modal/Modal";
import ModalContent from "../components/Pages/ModalContent";
import DetailsModal from "../components/utils/DetailsModal";

export default function Home() {
  const browser = detect();
  const [timer, setTimer] = useState(30);
  const [active, setActive] = useState(false);
  // useEffect(() => {
  //   if (browser.version < "106.0.0") alert(browser.version);
  // }, []);

  const minutes = Math.floor(timer / 60);

  // 👇️ get remainder of seconds
  const seconds = timer % 60;

  const router = useRouter();
  const [open, setOpen] = useState(false);
  // const unsavedChanges = true;
  // const warningText =
  //   "You have unsaved changes - are you sure you wish to leave this page?";

  // useEffect(() => {
  //   const handleWindowClose = e => {
  //     // setOpen(true);
  //     if (!unsavedChanges) return;
  //     e.preventDefault();
  //     return setOpen(true);
  //   };
  //   const handleBrowseAway = () => {
  //     setOpen(true);
  //     if (!unsavedChanges) return;
  //     if (window.confirm(warningText)) return;
  //     router.events.emit("routeChangeError");
  //     throw "routeChange aborted.";
  //   };
  //   window.addEventListener("beforeunload", handleWindowClose);
  //   router.events.on("routeChangeStart", handleBrowseAway);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleWindowClose);
  //     router.events.off("routeChangeStart", handleBrowseAway);
  //   };
  // }, [unsavedChanges]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer => timer - 1);
        console.log(timer);
      } else {
        setActive(true);
        setOpen(true);
      }
    }, 1000);
    return () => clearTimeout(interval);
  }, [timer]);

  return (
    <div>
      <Head>
        <title>GDL-PR | Home</title>
        <meta name="description" content="Build Wealth Comfortably." />
      </Head>
      <AppModal
        open={open}
        onClose={() => setOpen(false)}
        content={<DetailsModal onClose={() => setOpen(false)} />}
      />
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}
