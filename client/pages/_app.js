import TopNav from "../components/TopNav";
import BotFooter from "../components/BotFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon"/>
      <ToastContainer position="top-center" theme="colored"/>
      <TopNav />
      <Component {...pageProps} />
      <BotFooter />
    </Provider>
  );
}

export default MyApp;
