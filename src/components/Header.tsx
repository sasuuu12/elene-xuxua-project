import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import Cart from '../store/Cart';
import { useAppSelector } from '../store/hooks';

// 🌟 შემოტანილი კალათის სურათი
import kalataIcon from '../assets/kalata.webp';

interface HeaderProps {
  links: { name?: string; label?: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b antialiased transform-gpu ${
      theme === 'light' ? 'bg-white/80 border-[#C3B1E1]/20 text-[#4A0E4E]' : 'bg-[#1a1a1a]/90 border-gray-800 text-[#EADDF8]'
    } backdrop-blur-md`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* ლოგო */}
        <Link to="/" className="text-2xl font-black tracking-tighter italic">
          MOUVELINE
        </Link>

        <div className="flex items-center gap-8">
          
          <div className="hidden md:flex items-center gap-6 font-bold">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="hover:text-[#C3B1E1] transition-colors duration-300 transform-gpu"
              >
                {link.label || link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            
            {/* 🌙 თემის შეცვლის ღილაკი */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex px-3 py-2 rounded-lg font-bold transition-all shadow-sm text-sm border border-[#C3B1E1] bg-white text-[#4A0E4E] hover:bg-[#F3E8FF]"
            >
              {theme === "light" ? "🌙 ღამე" : "☀️ დღე"}
            </button>

            {/* 🌟 კალათა (კომპიუტერისთვის) - ჩასმულია ლამაზ ყუთში */}
            <div 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className={`hidden md:flex relative items-center justify-center w-11 h-11 rounded-xl focus:outline-none hover:scale-105 transition-all cursor-pointer shadow-sm ${
                theme === 'light' ? 'bg-[#F3E8FF] hover:bg-[#EADDF8]' : 'bg-[#EADDF8] hover:bg-white'
              }`}
            >
              <img src={kalataIcon} alt="კალათა" className="w-6 h-6 object-contain" />
              
              {/* წითელი ნიშნული (Badge) */}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] px-2 py-0.5 rounded-full shadow-md font-bold border-2 border-white">
                  {totalItems}
                </span>
              )}
            </div>

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


      {/* მობილურის მენიუ */}
      {isOpen && (
        <div className={`md:hidden flex flex-col items-center gap-4 py-6 font-bold border-t ${
          theme === 'light' ? 'bg-white border-[#C3B1E1]/20' : 'bg-[#1a1a1a] border-gray-800'
        }`}>
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C3B1E1] transition-colors duration-300 transform-gpu"
            >
              {link.label || link.name}
            </Link>
          ))}
          
          {/* 🌙 თემის შეცვლის ღილაკი მობილურისთვის */}
          <button
            onClick={toggleTheme}
            className="mt-2 px-4 py-2 rounded-lg font-bold transition-all shadow-sm border border-[#C3B1E1] bg-white text-[#4A0E4E] hover:bg-[#F3E8FF]"
          >
            {theme === "light" ? "🌙 ღამე" : "☀️ დღე"}
          </button>

          {/* 🌟 კალათა (მობილურისთვის) - ჩასმულია ლამაზ ყუთში */}
          <div 
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              setIsOpen(false);
            }}
            className={`flex items-center justify-center w-14 h-14 rounded-2xl mt-4 hover:scale-105 transition-all cursor-pointer relative shadow-md ${
              theme === 'light' ? 'bg-[#F3E8FF]' : 'bg-[#EADDF8]'
            }`}
          >
            <img src={kalataIcon} alt="კალათა" className="w-8 h-8 object-contain" />
            
            {/* წითელი ნიშნული (Badge) */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] px-2 py-0.5 rounded-full shadow-md font-bold border-2 border-white">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      )}

      {/* კალათის დროპდაუნი */}
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