import Section from '..';
import classes from './index.module.scss';

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className={classes.info}>
        <h1>Sit non do eiusmod</h1>
        <h3>Sunt duis consectetur fugiat et et esse sint culpa qui.</h3>
        <div>
          Sit laborum sunt sit veniam labore est dolore commodo officia veniam
          nisi officia proident. Ipsum laboris anim cillum culpa sunt ex nulla
          quis. Magna mollit cupidatat nostrud aute nostrud aute eu duis.
          Officia ullamco eu proident labore tempor. Mollit est sit ullamco
          labore ut dolor eiusmod ipsum tempor.
        </div>
      </div>
      <div className={classes.image}></div>
    </Section>
  );
};

export default Projects;
