'use client';

import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full ">
          <Head>
            <title>K LE DORTZ</title>
          </Head>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
