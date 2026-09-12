import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling on both elements to instantly snap to top
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Use the explicit 'instant' behavior API for modern mobile browsers
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Use a longer timeout for mobile devices to ensure the render paint is complete
    const timeoutId = setTimeout(() => {
      document.documentElement.style.scrollBehavior = ''; 
      document.body.style.scrollBehavior = ''; 
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
