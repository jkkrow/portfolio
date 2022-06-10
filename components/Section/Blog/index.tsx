import Section from '..';
import classes from './index.module.scss';

const Blog: React.FC = () => {
  return (
    <Section id="blog">
      <div className={classes.container}>
        <h1>Blog</h1>
        <p>Est do veniam nostrud labore eu.</p>

        <ul className={classes.posts}>
          <li className={classes.post}></li>
          <li className={classes.post}></li>
        </ul>
      </div>
    </Section>
  );
};

export default Blog;
