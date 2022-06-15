import { createContext, useEffect, useState } from 'react';

export type ActiveSection = 'home' | 'about' | 'project' | 'blog' | 'contact';

export const sections: ActiveSection[] = [
  'home',
  'about',
  'project',
  'blog',
  'contact',
];

interface AppContextProviderProps {
  children?: React.ReactNode;
}

export const AppContext = createContext<{ activeSection: ActiveSection }>({
  activeSection: 'home',
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as ActiveSection);
          }
        });
      },
      { threshold: 0.6 }
    );

    document
      .querySelectorAll('#home, #about, #project, #blog, #contact')
      .forEach((target) => {
        observer.observe(target);
      });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AppContext.Provider value={{ activeSection }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
