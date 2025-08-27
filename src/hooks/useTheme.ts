import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setIsDark(stored === 'dark');
    }
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Add transition class to body for smooth theme switching
    document.body.classList.add('theme-transitioning');
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, 300);
  }, [isDark]);

  const toggleTheme = () => {
    if (!isTransitioning) {
      setIsDark(!isDark);
    }
  };

  return { isDark, toggleTheme, isTransitioning };
};