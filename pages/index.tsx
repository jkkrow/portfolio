import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Section from '../components/Section';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Web Developer Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section>
          <h1>Hi</h1>
        </Section>
      </main>
    </>
  );
};

export default Home;
