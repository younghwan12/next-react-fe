import type { AppContext, AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "antd/dist/antd";
import "../styles/layout/layout.scss";
import Head from "next/head";
import { store } from "../redux/store";
import koKR from "antd/lib/locale/ko_KR";

//layout
import { LayoutProvider } from "../layout/context/layoutcontext";
import Layout from "../layout/layout";

// type
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import PrimeReact from "primereact/api";

// start npx json-server --watch c:\json-server\db.json --port 4000 -H 172.20.10.2

interface InitialProps {
  cookies: unknown;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// require("../mocks")

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  PrimeReact.ripple = true;
  if (Component.getLayout) {
    return (
      <Provider store={store}>
        <ConfigProvider locale={koKR}>
          <LayoutProvider>
            {Component.getLayout(<Component {...pageProps} />)}
          </LayoutProvider>
        </ConfigProvider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <ConfigProvider locale={koKR}>
          <LayoutProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LayoutProvider>
        </ConfigProvider>
      </Provider>
    );
  }
};

App.getInitialProps = async (context: AppContext) => {
  // const { ctx } = context;
  // console.log(Object.keys(ctx));

  return {};
};

export default App;
