import Head from 'next/head';

import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Prime Movies</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
