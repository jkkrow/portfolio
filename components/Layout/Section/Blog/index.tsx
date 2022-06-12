import Image from 'next/image';
import { HiOutlineExternalLink } from 'react-icons/hi';

import Section from '..';
import { Post } from '../../../../pages';
import classes from './index.module.scss';

interface BlogProps {
  posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  console.log(posts);
  console.log(process.env.NEXT_PUBLIC_BLOG_DOMAIN);

  return (
    <Section id="blog">
      <div className={classes.container}>
        <h1>Id incididunt exercitation</h1>
        <p>
          Ex dolore voluptate occaecat veniam deserunt exercitation veniam ad
          cillum.
        </p>

        <ul className={classes.posts}>
          {posts.map((post) => (
            <li key={post.slug} className={classes.post}>
              <div className={classes.image}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BLOG_DOMAIN}/images/posts/${post.slug}/${post.image}`}
                  alt={post.title}
                  layout="fill"
                />
              </div>
              <div className={classes.content}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          className={classes.link}
          href={process.env.NEXT_PUBLIC_BLOG_DOMAIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Sunt commodo</span>
          <HiOutlineExternalLink />
        </a>
      </div>
    </Section>
  );
};

export default Blog;
