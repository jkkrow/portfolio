import Section from '..';
import Form from './Form';
import Aside from './Aside';
import classes from './index.module.scss';

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <div className={classes.container}>
        <Aside />
        <Form />
      </div>
    </Section>
  );
};

export default Contact;
