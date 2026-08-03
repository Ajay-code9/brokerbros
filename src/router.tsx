import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/why-brokerbros'
  | '/markets'
  | '/markets/stocks'
  | '/markets/etfs'
  | '/markets/mutual-funds'
  | '/markets/bonds'
  | '/markets/ipos'
  | '/markets/commodities'
  | '/markets/forex'
  | '/markets/futures-options'
  | '/platforms'
  | '/platforms/web'
  | '/platforms/desktop'
  | '/platforms/mobile'
  | '/platforms/tools'
  | '/research'
  | '/research/calendar'
  | '/research/news'
  | '/education'
  | '/education/academy'
  | '/education/learning-center'
  | '/pricing'
  | '/accounts'
  | '/funding'
  | '/security'
  | '/security/regulation'
  | '/security/client-protection'
  | '/institutional'
  | '/partner'
  | '/api-integrations'
  | '/help'
  | '/contact'
  | '/careers'
  | '/blog'
  | '/legal'
  | '/login'
  | '/open-account'
  | '/signup'
  | '/register';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialPath = (): string => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path && path !== '/') return path;
      if (hash && hash.startsWith('#/')) return hash.replace('#', '');
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path && path !== '/') {
        setCurrentPath(path);
      } else if (hash && hash.startsWith('#/')) {
        setCurrentPath(hash.replace('#', ''));
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
