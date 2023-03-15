import Header from "@/components/Header";
import "@/styles/index.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      {/* <div className="max-w-7xl m-auto"> */}
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
