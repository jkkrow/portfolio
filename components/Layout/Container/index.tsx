import { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Loader from '../Loader';
import { AppContext } from 'context/AppContext';
import classes from './index.module.scss';

interface ContainerProps {
  children?: React.ReactNode;
}

const TIMEOUT = 300;

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { initialLoading } = useContext(AppContext);

  const nodeRef = useRef(null);

  return (
    <main>
      <Loader on={initialLoading} />

      <CSSTransition
        in={!initialLoading}
        timeout={TIMEOUT}
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
      >
        <div id="container" className={classes.container} ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </main>
  );
};

export default Container;
