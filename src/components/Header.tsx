import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import Cart from '../store/Cart';
import { useAppSelector } from '../store/hooks';

interface HeaderProps {
  links: { name?: string; label?: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 border-b ${
      theme === 'light' ? 'bg-white/80 border-[#C3B1E1]/20 text-[#4A0E4E]' : 'bg-[#1a1a1a]/90 border-gray-800 text-[#EADDF8]'
    } backdrop-blur-md`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* მარცხენა მხარე: ლოგო */}
        <Link to="/" className="text-2xl font-black tracking-tighter italic">
          MOUVELINE
        </Link>

 
        <div className="flex items-center gap-8">
          
   
          <div className="hidden md:flex items-center gap-6 font-bold">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="hover:text-[#C3B1E1] transition-colors"
              >
                {link.label || link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            

            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="hidden md:flex relative items-center gap-1 focus:outline-none hover:text-[#C3B1E1] transition-colors font-bold"
            >
              <span>კალათა 🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-md border border-white/20">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger ღილაკი მობილურისთვის */}
            <button 
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div> 
      </nav> 


      {isOpen && (
        <div className={`md:hidden flex flex-col items-center gap-4 py-6 font-bold border-t ${
          theme === 'light' ? 'bg-white border-[#C3B1E1]/20' : 'bg-[#1a1a1a] border-gray-800'
        }`}>
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C3B1E1] transition-colors"
            >
              {link.label || link.name}
            </Link>
          ))}
          

          <button 
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              setIsOpen(false); // კალათის გახსნისას ჰამბურგერის მენიუ დაიხუროს
            }}
            className="flex items-center gap-2 mt-2 hover:text-[#C3B1E1] transition-colors"
          >
            <span>კალათა 🛒</span>
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      )}

      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 z-[90]" 
            onClick={() => setIsCartOpen(false)} 
          />
          <div className="absolute top-full right-4 mt-2 z-[100]">
            <Cart />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;