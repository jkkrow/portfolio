import type { AppProps } from 'next/app';

import AppContextProvider from 'context/AppContext';
import 'styles/globals.scss';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cube';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
