import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-poppins mb-2">Sujnan Kumar</h3>
            <p className="text-gray-300">Engineering Scalable Software & AI Solutions</p>
          </div>

          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © 2024 Sujnan Kumar. Made with <Heart className="text-red-500" size={16} fill="currentColor" /> 
              and a spark of innovation.
            </p>

          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="back-to-top absolute bottom-8 right-8 bg-accent hover:bg-accent/90 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;