import React, { useContext } from 'react';
import interiorImage from '../assets/mosavali-interior-reflects.webp';
import { ThemeContext } from '../components/ThemeContext';

const About: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`py-20 px-4 min-h-screen transition-colors duration-500 animate-fade-in ${
      theme === 'light' ? 'bg-[#F9F6FC]' : 'bg-[#1a1a1a]'
    }`}>
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <h2 className={`text-4xl font-extrabold mb-4 uppercase tracking-tighter transition-colors duration-500 ${
            theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#EADDF8]'
          }`}>
            ჩვენს შესახებ
          </h2>
          <div className="w-24 h-1 bg-[#4A0E4E] mx-auto rounded-full mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

          {/* სურათი მარცხნივ */}
          <div className={`rounded-3xl overflow-hidden shadow-2xl border-4 transition-colors duration-500 ${
            theme === 'light' ? 'border-white shadow-purple-200' : 'border-gray-800 shadow-purple-900/20'
          }`}>
            <img
              fetchPriority="high" 
              src={interiorImage}
              alt="Mouveline რესტორნის ინტერიერი"
              width="1200"
              height="800"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* ტექსტი მარჯვნივ */}
          <div className={`flex flex-col gap-6 text-lg leading-relaxed text-justify md:text-left transition-colors duration-500 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            <h3 className={`font-black text-3xl mb-2 leading-tight transition-colors duration-500 ${
              theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#C3B1E1]'
            }`}>
              კეთილი იყოს თქვენი მობრძანება <br /> MOUVELINE-ში
            </h3>

            <p className="italic font-medium">
              "Mouveline არ არის უბრალოდ რესტორანი, ეს არის გამოცდილება. ჩვენ შევქმენით სივრცე, სადაც თანამედროვე ელეგანტურობა და დახვეწილი კულინარია ერთმანეთს ხვდება."
            </p>

            <p>
              მყუდრო გარემო, სანთლის შუქი და რჩეული კერძები იდეალურ გარემოს ქმნის როგორც მშვიდი ვახშმისთვის, ასევე განსაკუთრებული თარიღების აღსანიშნავად.
            </p>

            <p>
              დააგემოვნეთ ჩვენი შეფ-მზარეულის მიერ შექმნილი შედევრები და აღმოაჩინეთ გემოს ახალი განზომილება ჩვენთან ერთად.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;