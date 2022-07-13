import { useEffect, useRef, useState } from 'react';

import Social from '../Social';
import classes from './index.module.scss';

const Aside: React.FC = () => {
  const [height, setHeight] = useState<number>();
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contactForm = asideRef.current?.nextElementSibling;
    const height = contactForm?.clientHeight;

    height && setHeight(height);
  }, []);

  return (
    <div className={classes.aside} style={{ height }} ref={asideRef}>
      <h1>Social Links</h1>
      <p>If you have any question, don&apos;t hesitate to get in touch!</p>
      <Social />
    </div>
  );
};

export default Aside;
