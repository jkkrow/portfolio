import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { HiOutlineX } from 'react-icons/hi';

import classes from './index.module.scss';

const MODAL_TIMEOUT = 300;

interface ModalProps {
  on: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ on, onClose, children }) => {
  const [isOpened, setIsOpened] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    setIsOpened(on);
  }, [on]);

  const modalEnteredHandler = () => {
    document.documentElement.classList.add('no-scroll');
  };

  const modalExitHandler = () => {
    document.documentElement.classList.remove('no-scroll');
    onClose();
  };

  const portal =
    typeof window !== 'undefined' && document.getElementById('container');

  return portal
    ? createPortal(
        <CSSTransition
          in={isOpened}
          classNames={{
            enter: classes.enter,
            exit: classes.exit,
            enterActive: classes.enterActive,
            exitActive: classes.exitActive,
          }}
          timeout={MODAL_TIMEOUT}
          mountOnEnter
          unmountOnExit
          nodeRef={modalRef}
          onEntered={modalEnteredHandler}
          onExit={modalExitHandler}
        >
          <div className={classes.modal} ref={modalRef}>
            <HiOutlineX
              className={classes.close}
              onClick={() => setIsOpened(false)}
            />
            {children}
          </div>
        </CSSTransition>,
        portal
      )
    : null;
};

export default Modal;
