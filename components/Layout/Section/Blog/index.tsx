import Image from 'next/image';
import { HiOutlineExternalLink } from 'react-icons/hi';

import Section from '..';
import PostGrid from './Post/Grid';
import { Post } from 'pages';
import classes from './index.module.scss';

interface BlogProps {
  posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <Section id="blog">
      <div className={classes.container}>
        <h1>A Full Stack Web Development Blog</h1>
        <p>
          Built with NextJS, contains a number of posts about topics that
          I&apos;ve done in my other projects.
        </p>

        <PostGrid posts={posts} />

        <a
          className={classes.link}
          href={process.env.NEXT_PUBLIC_BLOG_DOMAIN}
          target="_blank"
          rel="noreferrer"
        >
          <span>See all posts</span>
          <HiOutlineExternalLink />
        </a>
      </div>
    </Section>
  );
};

export default Blog;
