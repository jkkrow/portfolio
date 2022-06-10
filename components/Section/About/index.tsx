import Section from '..';
import classes from './index.module.scss';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className={classes.container}>
        <h1>About</h1>
        <p>
          Aute anim velit incididunt duis consequat laborum mollit exercitation
          nulla occaecat excepteur irure.
        </p>

        <div className={classes.skills}>
          <div className={classes.column}></div>
          <div className={classes.column}></div>
          <div className={classes.column}></div>
        </div>
      </div>
    </Section>
  );
};

export default About;
