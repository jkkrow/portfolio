import Section from '..';
import classes from './index.module.scss';

const Home: React.FC = () => {
  return (
    <Section id="home">
      <div className={classes.container}>
        <h1>Ea exercitation nulla ullamco</h1>
        <p>
          Adipisicing elit excepteur officia sint magna. Ut labore velit nulla
        </p>

        <div className={classes.buttons}>
          <button
            onClick={() =>
              document
                .getElementById('contact')!
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact
          </button>
          <button>Resume</button>
        </div>
      </div>
    </Section>
  );
};

export default Home;
