import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface Navlink {
  label: string;
  path: string;
}

interface HeaderProps {
  links: Navlink[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#4A0E4E] text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        

        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-lg">
            M
          </div>
          <span className="tracking-wider">MOUVELINE</span>
        </Link>


        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-[#C3B1E1] transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

    
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* მობილური მენიუს ბლოკი */}
      {isOpen && (
        <div className="md:hidden bg-[#3A0B3D] fixed inset-x-0 top-[72px] bottom-0 z-50 border-t border-[#C3B1E1]/30 shadow-2xl overflow-y-auto">
          <nav className="flex flex-col px-6 py-12 gap-6 text-center">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-2xl font-bold py-4 border-b border-white/10 hover:text-[#C3B1E1] active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;