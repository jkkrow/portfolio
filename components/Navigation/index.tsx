import { useContext } from 'react';

import { AppContext } from '../../context/AppContext';
import classes from './index.module.scss';

const Navigation: React.FC = () => {
  const { activeSection } = useContext(AppContext);

  const sections = ['home', 'about', 'projects', 'blog', 'contact'];
  const index = sections.findIndex((section) => section === activeSection);

  return (
    <nav className={classes.navigation}>
      <div className={classes.title}>
        <ul
          className={classes.sections}
          style={{
            transform: `translateY(-${index * 20 + '%'})`,
          }}
        >
          {sections.map((section, index) => (
            <li key={section} style={{ opacity: section === 'home' ? 0 : 1 }}>
              <h1>{section.toUpperCase()}</h1>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
