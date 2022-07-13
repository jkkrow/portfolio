import Script from 'next/script';
import { FaReact, FaCss3Alt, FaSass, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiRedux, SiMongodb } from 'react-icons/si';

import Section from '..';
import Icon from 'components/Element/Icon';
import classes from './index.module.scss';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>About Me</h1>
          <p>
            Aute anim velit incididunt duis consequat laborum mollit
            exercitation nulla occaecat excepteur irure.
          </p>
          <p>Excepteur nulla est enim duis duis anim ut enim duis duis.</p>
        </div>

        <div className={classes.main}>
          <div>
            <h1>Skills</h1>
            <div className={classes.skills}>
              <Icon label="typescript">
                <SiTypescript />
              </Icon>
              <Icon label="javascript">
                <SiJavascript />
              </Icon>
              <Icon label="react">
                <FaReact />
              </Icon>
              <Icon label="redux">
                <SiRedux />
              </Icon>
              <Icon label="nodejs">
                <FaNodeJs />
              </Icon>
              <Icon label="mongodb">
                <SiMongodb />
              </Icon>
              <Icon label="css">
                <FaCss3Alt />
              </Icon>
              <Icon label="sass">
                <FaSass />
              </Icon>
            </div>
          </div>

          <div>
            <h1>Certification</h1>
            <div className={classes.certification}>
              <Script
                src="//cdn.credly.com/assets/utilities/embed.js"
                type="text/javascript"
                async
              />
              <div
                data-iframe-width="110"
                data-iframe-height="150"
                data-share-badge-id="9728ee39-7a02-460a-b168-66ae5c4f44c0"
                data-share-badge-host="https://www.credly.com"
              />
              <h4>AWS Certified Developer - Associate</h4>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
