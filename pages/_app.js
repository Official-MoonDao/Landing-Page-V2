import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
