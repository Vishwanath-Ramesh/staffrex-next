import { DataProvider } from '../src/components/hooks/useData';
import Footer from '../src/components/common/Footer/Footer';
import NavBar from '../src/components/custom/NavBar/NavBar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </DataProvider>
  );
}

export default MyApp;
