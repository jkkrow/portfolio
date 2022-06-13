import Image from '../../../../../Element/Image';
import { Post } from '../../../../../../pages';
import classes from './index.module.scss';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <li>
      <a
        className={classes.item}
        href={`${process.env.NEXT_PUBLIC_BLOG_DOMAIN}/posts/${post.slug}`}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_BLOG_DOMAIN}/images/posts/${post.slug}/${post.image}`}
            alt={post.title}
          />
        </div>
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <ul className={classes.tags}>
            {post.tags.map((tag) => (
              <li key={tag} className={classes.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
};

export default PostItem;
