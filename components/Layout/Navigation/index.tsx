import { useContext } from 'react';
import {
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineDesktopComputer,
  HiOutlineDocumentText,
  HiOutlineMail,
} from 'react-icons/hi';

import { AppContext, ActiveSection, sections } from 'context/AppContext';
import classes from './index.module.scss';

const Navigation: React.FC = () => {
  const { activeSection } = useContext(AppContext);

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
    <div className={classes.navigation}>
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
  );
};

export default Navigation;
