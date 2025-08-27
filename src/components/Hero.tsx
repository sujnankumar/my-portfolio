import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Building scalable software & AI solutions';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-primary dark:via-gray-900 dark:to-gray-800 transition-all duration-500">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10"></div>
        <div className="floating-particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle bg-primary/30 dark:bg-accent/60"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Photo */}
          <div className="hero-image-container">
            <img
              src="/profile.jpg"
              alt="Sujnan Kumar"
              className="hero-image w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-accent/50"
            />
          </div>

          {/* Text Content */}
          <div className="text-content">
            <h1 className="hero-title text-5xl md:text-7xl font-bold font-poppins text-gray-900 dark:text-white mb-6 transition-colors duration-500">
              Sujnan Kumar
            </h1>
            <p className="hero-subtitle text-2xl md:text-3xl text-primary dark:text-accent font-medium mb-4 transition-colors duration-500">
              AI and Software Engineer
            </p>
            <div className="typewriter-container h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-inter transition-colors duration-500">
                {displayedText}
                <span className="typewriter-cursor animate-pulse">|</span>
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToAbout}
                className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </button>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-primary dark:border-accent text-primary dark:text-accent hover:bg-primary dark:hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="scroll-arrow animate-bounce text-gray-800 dark:text-white hover:text-primary dark:hover:text-accent transition-colors duration-300 p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;