import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navigation: React.FC = () => {
  const { isDark, toggleTheme, isTransitioning } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/10 dark:bg-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold font-poppins">
            <span className="text-primary dark:text-accent">Sujnan</span>
            <span className="text-gray-900 dark:text-white">Kumar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors duration-300 group font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/20 dark:bg-gray-800 hover:bg-white/30 dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700"
            >
              {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/20 dark:bg-gray-800 hover:bg-white/30 dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700"
            >
              {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/20 dark:bg-gray-800 hover:bg-white/30 dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700"
            >
              {isMobileMenuOpen ? <X size={20} className="text-gray-900 dark:text-white" /> : <Menu size={20} className="text-gray-900 dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-6 py-3 text-left text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-gray-100/50 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;