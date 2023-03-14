import getConfig from 'next/config';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    console.log("contextPath", getConfig().publicRuntimeConfig)

    return (
      <Html lang="en">
        <Head>
          {/* white  <link id="theme-css" href={`${contextPath}/themes/tailwind-light/theme.css`} rel="stylesheet"></link> */}
          <link id="theme-css" href={`${contextPath}/themes/vela-blue/theme.css`} rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
