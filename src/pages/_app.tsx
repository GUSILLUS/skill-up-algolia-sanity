import type { AppProps } from 'next/app';
import '../style/common/globals.css';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Skill Up - Agolia </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
