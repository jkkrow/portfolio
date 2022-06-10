import classes from './index.module.scss';

interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} className={classes.section}>
      {children}
    </section>
  );
};

export default Section;
