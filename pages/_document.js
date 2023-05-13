import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  //   lara-dark-teal
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            id="theme-css"
            href={`/themes/lara-light-teal/theme.css`}
            rel="stylesheet"
          ></link>
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
