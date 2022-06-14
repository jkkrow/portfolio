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
        <h1>Id incididunt exercitation</h1>
        <p>
          Ex dolore voluptate occaecat veniam deserunt exercitation veniam ad
          cillum.
        </p>

        <PostGrid posts={posts} />

        <a
          className={classes.link}
          href={process.env.NEXT_PUBLIC_BLOG_DOMAIN}
          target="_blank"
          rel="noreferrer"
        >
          <span>Sunt commodo</span>
          <HiOutlineExternalLink />
        </a>
      </div>
    </Section>
  );
};

export default Blog;
