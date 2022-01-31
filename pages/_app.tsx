
import type { AppProps } from 'next/app'
import '../styles/styles.css';
import '../styles/carousel.css';
import '../styles/responsive.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
