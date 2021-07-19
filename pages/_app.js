import "../styles/globals.css";
import React from "react";
import App from "next/app";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  // Getting Initial props.
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    return {
      pageProps,
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
