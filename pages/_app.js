import { Suspense, useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [showing, setShowing] = useState(false);
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
