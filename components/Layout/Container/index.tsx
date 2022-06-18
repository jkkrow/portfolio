import { useContext } from 'react';

import Loader from '../Loader';
import { AppContext } from 'context/AppContext';
import classes from './index.module.scss';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { initialLoading } = useContext(AppContext);

  return (
    <main id="container" className={classes.container}>
      <Loader on={initialLoading} />
      {!initialLoading && children}
    </main>
  );
};

export default Container;
