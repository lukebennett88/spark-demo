import { propsWithCssText } from "@spark-web/next-utils";
import { AesteticoStylesheet } from "@spark-web/core";
import NextDocument, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(context);
    return propsWithCssText(initialProps);
  }

  render() {
    return (
      <Html>
        <Head>
          <AesteticoStylesheet />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
