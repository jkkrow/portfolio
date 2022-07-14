import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './index.module.scss';
import Logo from 'public/icons/logo.svg';

interface LoaderProps {
  on: boolean;
}

const TIMEOUT = 300;

const Loader: React.FC<LoaderProps> = ({ on }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      classNames={{
        exitActive: classes.exitActive,
      }}
      in={on}
      timeout={TIMEOUT}
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.container} ref={nodeRef}>
        <div className={classes.loader}>
          <Logo />
          <div />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Loader;
