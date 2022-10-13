import "../styles/globals.css";
import "../styles/LoginStyles.module.css"
import store from "../redux/store";
import { Provider } from "react-redux";
import Meta from "../components/Meta"
import Layout from "../components/Layout";
import CheckLogin from "../components/Login/checkLogin";


//^^allows use of bootstrap css across website
function MyApp({ Component, pageProps }) {
  return Component.displayName === "Login" ? (
    <Provider store={store}>
      <Meta />
      <Component {...pageProps} />{" "}
    </Provider>
  ) : (
    <Provider store={store}>
      
      <Layout>
        {/* <CheckLogin /> */}
        <Component {...pageProps} />{" "}
      </Layout>
    </Provider>
  );
}

export default MyApp;
