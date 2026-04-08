import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A0E4E] text-white py-8 border-t border-[#C3B1E1]/30">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
        
        <div className="text-2xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center text-sm">
            M
          </div>
          <span className="tracking-widest text-lg">MOUVELINE</span>
        </div>

        <p className="text-sm text-[#C3B1E1] text-center">
          &copy; {currentYear} Mouveline Restaurant. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;