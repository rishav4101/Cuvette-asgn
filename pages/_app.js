import "../styles/globals.css";
import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/Theme";

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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
