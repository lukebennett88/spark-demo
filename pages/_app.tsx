import type { AppProps } from "next/app";
import { SparkProvider } from "@spark-web/core";
import { UniversalNextLink } from "@spark-web/next-utils";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SparkProvider linkComponent={UniversalNextLink}>
      <Component {...pageProps} />
    </SparkProvider>
  );
}
