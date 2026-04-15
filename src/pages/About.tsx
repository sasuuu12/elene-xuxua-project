import React, { useContext } from 'react';
import interiorImage from '../assets/mosavali-interior-reflects.webp';
import { ThemeContext } from '../components/ThemeContext'; // 🌟 შემოვიტანეთ კონტექსტი

const About: React.FC = () => {
  const { theme } = useContext(ThemeContext); // 🌟 ვიღებთ თემას

  return (
    <section className={`py-16 px-4 min-h-screen transition-colors duration-500 ${
      theme === 'light' ? 'bg-white' : 'bg-[#1a1a1a]'
    }`}>
      <div className="container mx-auto max-w-4xl text-center">
        
        <h2 className={`text-3xl font-bold mb-8 transition-colors duration-500 ${
          theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#EADDF8]'
        }`}>
          ჩვენს შესახებ
        </h2>
        
        <div className={`mb-10 rounded-2xl overflow-hidden shadow-lg border transition-colors duration-500 ${
          theme === 'light' ? 'border-[#C3B1E1]/40' : 'border-gray-700'
        }`}>
          <img 
            src={interiorImage} 
            alt="Mouveline რესტორნის ინტერიერი" 
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className={`leading-relaxed text-lg flex flex-col gap-5 text-justify md:text-center px-4 transition-colors duration-500 ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          <p className={`font-bold text-xl mb-2 transition-colors duration-500 ${
            theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#C3B1E1]'
          }`}>
            კეთილი იყოს თქვენი მობრძანება Mouveline-ში
          </p>
          
          <p>
            "Mouveline არ არის უბრალოდ რესტორანი, ეს არის გამოცდილება. ჩვენ შევქმენით სივრცე, სადაც თანამედროვე ელეგანტურობა და დახვეწილი კულინარია ერთმანეთს ხვდება.
          </p>
          
          <p>
            მყუდრო იასამნისფერი ინტერიერი, სანთლის შუქი და რჩეული კერძები იდეალურ გარემოს ქმნის როგორც მშვიდი ვახშმისთვის, ასევე განსაკუთრებული თარიღების აღსანიშნავად.
          </p>
          
          <p>
            დააგემოვნეთ ჩვენი შეფ-მზარეულის მიერ შექმნილი შედევრები და აღმოაჩინეთ გემოს ახალი განზომილება Mouveline-ში."
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;