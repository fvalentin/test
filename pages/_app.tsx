import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/styles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}
