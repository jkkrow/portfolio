import { useContext } from 'react';
import {
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineDesktopComputer,
  HiOutlineDocumentText,
  HiOutlineMail,
} from 'react-icons/hi';

const sections: ActiveSection[] = [
  'home',
  'about',
  'project',
  'blog',
  'contact',
];

import { AppContext, ActiveSection } from '../../../context/AppContext';
import classes from './index.module.scss';

const Navigation: React.FC = () => {
  const { activeSection } = useContext(AppContext);

  const index = sections.findIndex((section) => section === activeSection);

  const navigateHandler = (section: ActiveSection) => () => {
    const destination = document.getElementById(section);
    destination?.scrollIntoView({ behavior: 'smooth' });
  };

  const icon = (section: ActiveSection) => {
    switch (section) {
      case 'home':
        return <HiOutlineHome />;
      case 'about':
        return <HiOutlineIdentification />;
      case 'project':
        return <HiOutlineDesktopComputer />;
      case 'blog':
        return <HiOutlineDocumentText />;
      case 'contact':
        return <HiOutlineMail />;
    }
  };

  return (
    <nav className={classes.container}>
      <div className={classes.title}>
        <ul style={{ transform: `translateY(-${index * 20 + '%'})` }}>
          {sections.map((section, index) => (
            <li key={section} style={{ opacity: section === 'home' ? 0 : 1 }}>
              <h1>{section.toUpperCase()}</h1>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.controls}>
        <ul>
          {sections.map((section) => (
            <li
              className={section === activeSection ? classes.active : ''}
              key={section}
              data-label={section}
              onClick={navigateHandler(section)}
            >
              {icon(section)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
