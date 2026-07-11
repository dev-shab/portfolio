import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timeout = setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => clearTimeout(timeout);
  }, [location]);
}
