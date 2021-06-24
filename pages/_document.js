import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    /* eslint-disable react/react-in-jsx-scope, jsx-a11y/html-has-lang */
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
          <meta name="description" content="taboola application description" />
          <meta name="keywords" content="taboola" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
          />
          {/* PWA primary color */}
          <meta content="IE=edge" httpEquiv="" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="#fff" name="theme-color" />
          <meta content="taboola app" name="apple-mobile-web-app-title" />
          <meta content="black" name="apple-mobile-web-app-status-bar-style" />
          <meta content="#fff" name="msapplication-navbutton-color" />
          <link href="/static/manifest.json" rel="manifest" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="static/android-chrome-192x192.png"
          />
          <link
            rel="mask-icon"
            href="static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          {styleTags}
          <script async src="https://cdn.fuseplatform.net/publift/tags/2/2019/fuse.js"></script>
          <script async src="//cdn.taboola.com/libtrc/weatherzone-weatherzonecomau/loader.js" id="tb_loader_script"></script>
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
