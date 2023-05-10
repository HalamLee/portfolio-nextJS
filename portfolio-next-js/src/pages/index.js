import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/layout';
import Hero from '../components/home/hero';
import Animation from '../components/home/animation';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Lami's portfolio</title>
        <meta name="description" content="Lami's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-156px)] text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
