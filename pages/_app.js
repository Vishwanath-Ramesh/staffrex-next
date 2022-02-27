import Head from 'next/head';

import { DataProvider } from '../src/components/hooks/useData';
import Footer from '../src/components/common/Footer/Footer';
import NavBar from '../src/components/custom/NavBar/NavBar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Head>
        <title>StaffRex</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </DataProvider>
  );
}

export default MyApp;
