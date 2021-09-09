import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { MDXProvider } from "@mdx-js/react"
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme'

import mdxComponents from '@component/mdxComponent';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>papilio.iio / Hidekazu Yokoi</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}