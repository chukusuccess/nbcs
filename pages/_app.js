import 'styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import Layout from 'components/ui/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
