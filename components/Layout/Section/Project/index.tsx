import Section from '..';
import Carousel from './Carousel';
import Info from './Info';
import classes from './index.module.scss';

const Project: React.FC = () => {
  return (
    <Section id="project">
      <div className={classes.container}>
        <Carousel />
        <Info />
      </div>
    </Section>
  );
};

export default Project;
