import Canvas from "@/components/Canvas";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* <Header /> */}
      <Canvas />
      <Component {...pageProps} />
    </>
  );
};

export default App;
