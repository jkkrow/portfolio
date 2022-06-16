import classes from './index.module.scss';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main id="container" className={classes.container}>
      {children}
    </main>
  );
};

export default Container;
