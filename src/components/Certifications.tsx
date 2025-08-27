import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { certifications } from '../data/portfolio';

const Certifications: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in modern technologies and best practices
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certifications.map((cert) => (
                <div key={cert.id} className="min-w-full flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center p-8">
                    <div className="text-center">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-24 h-24 mx-auto mb-4 rounded-lg shadow-lg object-cover"
                      />
                      <Award className="w-12 h-12 mx-auto text-accent" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gray-800 dark:text-white mb-4">
                      {cert.title}
                    </h3>
                    <p className="text-lg text-accent font-semibold mb-2">
                      {cert.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Issued: {cert.date}
                    </p>
                    <a
                      href={cert.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink size={18} />
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-gray-600 dark:text-gray-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Certification Grid for Desktop */}
        <div className={`mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`cert-mini-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-16 h-16 mx-auto mb-3 rounded object-cover"
              />
              <h4 className="font-semibold text-sm text-gray-800 dark:text-white mb-1">
                {cert.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {cert.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;