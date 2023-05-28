import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="NBCS" />
        <meta name="twitter:card" content="AfroBrawlers" />
        <meta name="twitter:url" content="https://nbcs.netlify.app" />
        <meta name="twitter:title" content="NBCS" />
        <meta
          name="twitter:description"
          content="Nigerian Brawlhalla Championship Series"
        />
        <meta
          name="twitter:image"
          content="https://www.brawlhalla.com/c/uploads/2019/09/Logo_BrawlhallaHammer512.png"
        />
        <meta name="twitter:creator" content="@Ulquiorra_ciffa" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NBCS" />
        <meta
          property="og:description"
          content="Nigerian Brawlhalla Championship Series"
        />
        <meta property="og:site_name" content="NBCS" />
        <meta property="og:url" content="https://nbcs.netlify.app" />
        <meta
          property="og:image"
          content="https://www.brawlhalla.com/c/uploads/2019/09/Logo_BrawlhallaHammer512.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
