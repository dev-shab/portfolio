import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTarget() {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const timeout = setTimeout(() => {
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => clearTimeout(timeout);
  }, [location]);
}
