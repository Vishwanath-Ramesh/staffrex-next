import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { StoreProvider } from '../src/components/hooks/useStore';
import Footer from '../src/components/common/Footer/Footer';
import NavBar from '../src/components/custom/NavBar/NavBar';
import Spinner from '../src/components/common/Spinner';
import Toast from '../src/components/common/Toast';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StoreProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
          <Toast />
          <Spinner />
        </StoreProvider>
      </Hydrate>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;

