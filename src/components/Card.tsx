import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 

export interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {

  const { theme } = useContext(ThemeContext);

  return (
    // 🌟 დავამატეთ hover:scale-105 აქ, მთავარ კონტეინერზე
    <div className={`rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border flex flex-col h-full ${
      theme === 'light' ? 'bg-white border-[#C3B1E1]/40' : 'bg-[#2a2a2a] border-gray-700 shadow-purple-900/20'
    }`}>
      {/* სურათის სექცია */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          // სურათის scale ამოვიღეთ, რადგან ახლა მთლიანი ბარათი დიდდება
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* ტექსტის სექცია */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* სათაურის ფერი იცვლება თემის მიხედვით */}
        <h3 className={`text-lg md:text-xl font-bold mb-3 transition-colors duration-300 ${
          theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#EADDF8]'
        }`}>
          {title}
        </h3>
        
        {/* აღწერის ფერი იცვლება თემის მიხედვით */}
        <p className={`text-sm md:text-base flex-grow transition-colors duration-500 ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          {description}
        </p>
        
      </div>
    </div>
  );
};

export default Card;