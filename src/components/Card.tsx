import React from "react";

export interface CardProps {
    title: string;
    image: string;           // კერძის სახელი (მაგ. "ხაჭაპური")
    description: string;    // კერძის აღწერა ინგრედიენტებით

}
const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#C3B1E1]/40 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#4A0E4E] mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
