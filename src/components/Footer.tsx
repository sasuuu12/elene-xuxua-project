import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext'; // 🌟 შემოვიტანეთ კონტექსტი

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useContext(ThemeContext); // 🌟 ვიღებთ თემას

  return (
    <footer className={`py-8 border-t transition-colors duration-500 ${
      theme === 'light' ? 'bg-[#4A0E4E] text-white border-[#C3B1E1]/30' : 'bg-[#111111] text-gray-300 border-gray-800'
    }`}>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
        
        <div className="text-2xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center text-sm">
            M
          </div>
          <span className="tracking-widest text-lg">MOUVELINE</span>
        </div>

        <p className={`text-sm text-center transition-colors duration-500 ${
          theme === 'light' ? 'text-[#C3B1E1]' : 'text-gray-500'
        }`}>
          &copy; {currentYear} Mouveline Restaurant. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;