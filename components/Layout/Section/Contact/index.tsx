import Section from '..';
import classes from './index.module.scss';

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <div className={classes.container}>
        <h1>Contact</h1>
        <form className={classes.form}></form>
      </div>
    </Section>
  );
};

export default Contact;
