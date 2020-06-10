import Document, { Html, Head, Main, NextScript } from 'next/document';

class NotatallDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Not At All Clothing</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NotatallDocument;