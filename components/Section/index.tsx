import React from 'react';
import classes from './index.module.scss';

interface SectionProps {
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
