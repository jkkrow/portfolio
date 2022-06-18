import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './index.module.scss';

interface LoaderProps {
  on: boolean;
}

const LOADER_TIMEOUT = 500;

const Loader: React.FC<LoaderProps> = ({ on }) => {
  const nodeRef = useRef(null);

  const loaderEnterHandler = () => {
    document.documentElement.classList.add('no-scroll');
  };

  const loaderExitedHandler = () => {
    console.log('exited');
    document.documentElement.classList.remove('no-scroll');
  };

  return (
    <CSSTransition
      classNames={{ exitActive: classes.exitActive }}
      in={on}
      timeout={LOADER_TIMEOUT}
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.container} ref={nodeRef}>
        <div className={classes.loader} />
      </div>
    </CSSTransition>
  );
};

export default Loader;
