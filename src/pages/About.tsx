import React from 'react';
import interiorImage from '../assets/mosavali-interior-reflects.webp';

const About: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        
        <h2 className="text-3xl font-bold text-[#4A0E4E] mb-8">ჩვენს შესახებ</h2>
        
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-[#C3B1E1]/40">
          <img 
            src={interiorImage} 
            alt="Mouveline რესტორნის ინტერიერი" 
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
        
        </div>


        <div className="text-gray-600 leading-relaxed text-lg flex flex-col gap-5 text-justify md:text-center px-4">
          <p className="font-bold text-[#4A0E4E] text-xl mb-2">
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