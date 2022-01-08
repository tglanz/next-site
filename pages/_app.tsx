import '../styles/globals.css'
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/sunburst.css';

import type { AppProps } from 'next/app'

import { Layout } from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;