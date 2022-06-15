import { useContext } from 'react';

import { AppContext, sections } from 'context/AppContext';
import classes from './index.module.scss';

const Header: React.FC = () => {
  const { activeSection } = useContext(AppContext);

  const index = sections.findIndex((section) => section === activeSection);

  return (
    <div className={classes.header}>
      <ul style={{ transform: `translateY(-${index * 20 + '%'})` }}>
        {sections.map((section, index) => (
          <li key={section} style={{ opacity: section === 'home' ? 0 : 1 }}>
            <h1>{section.toUpperCase()}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
