import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import Container from '../components/Layout/Container';
import Navigation from '../components/Layout/Navigation';
import Home from '../components/Layout/Section/Home';
import About from '../components/Layout/Section/About';
import Project from '../components/Layout/Section/Project';
import Blog from '../components/Layout/Section/Blog';
import Contact from '../components/Layout/Section/Contact';

export interface Post {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
}

interface Props {
  posts: Post[];
}

const HomePage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Web Developer Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navigation />

        <Home />
        <About />
        <Project />
        <Blog posts={posts} />
        <Contact />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  let posts: Post[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BLOG_DOMAIN}/api/posts/featured`
    );

    const data = await response.json();
    posts = data.posts;
  } catch (err) {
    return {
      props: { posts: [] },
    };
  }

  return {
    props: { posts },
  };
};

export default HomePage;
