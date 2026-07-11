import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const hasScrollTarget = !!(state as { scrollTo?: string } | null)?.scrollTo;
    if (hasScrollTarget) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
