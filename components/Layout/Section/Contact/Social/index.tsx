import { FaGithub, FaLinkedin } from 'react-icons/fa';

import classes from './index.module.scss';

const Social: React.FC = () => {
  return (
    <ul className={classes.social}>
      <li>
        <a
          href={process.env.NEXT_PUBLIC_GITHUB_ADDRESS}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN_ADDRESS}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
};

export default Social;
