import { useState } from 'react';

import Section from '..';
import Button from 'components/Element/Button';
import Modal from 'components/Layout/Modal/index.module';
import classes from './index.module.scss';

const Project: React.FC = () => {
  const [isViewDetails, setIsViewDetails] = useState(false);

  const viewDetailsHandler = () => {
    setIsViewDetails((prev) => !prev);
  };

  const closeModalHandler = () => {
    setIsViewDetails(false);
  };

  return (
    <Section id="project">
      <Modal on={isViewDetails} onClose={closeModalHandler}></Modal>

      <div className={classes.container}>
        <div className={classes.info}>
          <h1>Sit non do eiusmod</h1>
          <h3>Sunt duis consectetur fugiat et et esse sint culpa qui.</h3>
          <p>
            Sit laborum sunt sit veniam labore est dolore commodo officia veniam
            nisi officia proident. Ipsum laboris anim cillum culpa sunt ex nulla
            quis. Magna mollit cupidatat nostrud aute nostrud aute eu duis.
            Officia ullamco eu proident labore tempor. Mollit est sit ullamco
            labore ut dolor eiusmod ipsum tempor.
          </p>
          <ul>
            <li>Commodo duis eu adipisicing non occaecat.</li>
            <li>Eiusmod amet officia Lorem commodo excepteur.</li>
            <li>
              Adipisicing aliqua id occaecat adipisicing Lorem culpa dolor
              deserunt amet mollit voluptate.
            </li>
          </ul>
          <div>
            <Button onClick={viewDetailsHandler}>View Details</Button>
          </div>
        </div>
        <div className={classes.image} />
      </div>
    </Section>
  );
};

export default Project;
