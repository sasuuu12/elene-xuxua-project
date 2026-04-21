// src/components/Card.tsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 

export interface CardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number; 
  item?: any;
  onAddToCart?: (item?: any) => void; 
}

const Card: React.FC<CardProps> = ({ title, image, description, price, item, onAddToCart }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 flex flex-col h-full relative ${
      theme === 'light' ? 'bg-white border-purple-100' : 'bg-[#1f1f1f] border-gray-800'
    }`}>
      <img src={image} loading='lazy' alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 flex-grow mb-4">{description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-black text-[#C3B1E1]">{price} ₾</span>
          
          <button 
            onClick={() => onAddToCart && onAddToCart(item)}
            className="bg-[#4A0E4E] hover:bg-[#C3B1E1] hover:text-[#4A0E4E] text-white px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-90"
          >
            + კალათაში
          </button>
        </div>
      </div>
    </div>
  );
};


export default React.memo(Card);