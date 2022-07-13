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

export const AppContext = createContext<{
  activeSection: ActiveSection;
  initialLoading: boolean;
}>({
  activeSection: 'home',
  initialLoading: true,
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (initialLoading) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as ActiveSection);
          }
        });
      },
      { threshold: 0.4 }
    );

    const selectors = sections.map((section) => `#${section}`).join(', ');

    document.querySelectorAll(selectors).forEach((target) => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, [initialLoading]);

  return (
    <AppContext.Provider value={{ activeSection, initialLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
