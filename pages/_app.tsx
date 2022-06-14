import type { AppProps } from 'next/app';

import AppContextProvider from 'context/AppContext';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
