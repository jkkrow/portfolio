import Section from '..';
import Button from '../../../Element/Button';
import classes from './index.module.scss';

const Home: React.FC = () => {
  const navigateToContactHandler = () => {
    document.getElementById('contact')!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="home">
      <div className={classes.container}>
        <h1>Ea exercitation nulla ullamco</h1>
        <p>
          Adipisicing elit excepteur officia sint magna. Ut labore velit nulla
        </p>

        <div className={classes.buttons}>
          <Button onClick={navigateToContactHandler}>Contact</Button>
          <Button onClick={() => {}}>Resume</Button>
        </div>
      </div>
    </Section>
  );
};

export default Home;
