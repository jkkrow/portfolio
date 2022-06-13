import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" href="/icons/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Roboto+Condensed:wght@400&family=Roboto+Mono:wght@400&family=Roboto:wght@400&family=Roboto+Flex:wght@400&display=swap"
            rel="stylesheet"
          />
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
