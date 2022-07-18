import Section from '..';
import Button from 'components/Element/Button';
import classes from './index.module.scss';

const Home: React.FC = () => {
  const navigateToContactHandler = () => {
    document.getElementById('contact')!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="home">
      <div className={classes.container}>
        <h1>Hi, I&apos;m Junku Kim</h1>
        <big>Full Stack Web Developer & AWS Cloud Engineer</big>

        <div className={classes.buttons}>
          <Button onClick={navigateToContactHandler}>Contact</Button>
          {/* <Button onClick={() => {}}>Resume</Button> */}
        </div>
      </div>
    </Section>
  );
};

export default Home;
