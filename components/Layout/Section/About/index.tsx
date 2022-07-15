import Image from 'components/Element/Image';
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
            I&apos;m a Full Stack Web Developer specialized in Typescript and
            AWS.
          </p>
          <p>
            I build solid projects from scratch, making a abstract idea turned
            into a real world.
          </p>
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
            <h1>Certificates</h1>
            <div className={classes.certificates}>
              <a
                href="https://www.credly.com/badges/9728ee39-7a02-460a-b168-66ae5c4f44c0/public_url"
                target="_blank"
                rel="noreferrer"
              >
                <div className={classes.badge}>
                  <Image
                    src="/images/certificates/aws-dva.png"
                    alt="AWS Certified Developer - Associate"
                  />
                </div>
                <h4>AWS Certified Developer - Associate</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
