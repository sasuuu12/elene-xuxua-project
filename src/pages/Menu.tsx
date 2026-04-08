import React, { useState } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

const menuData: MenuItem[] = [
  {
    id: 1,
    name: "აჭარული ხაჭაპური",
    description: "ტრადიციული აჭარული ხაჭაპური ახალი სულგუნითა და კვერცხით.",
    price: 15,
    category: "ცომეული",
    imageUrl: "/assets/Khachapuri.webp"
  },
  {
    id: 2,
    name: "ქალაქური ხინკალი",
    description: "ხორცითა და მწვანილით გაჯერებული წვნიანი ხინკალი.",
    price: 1.5,
    category: "ძირითადი",
    imageUrl: "/assets/8379b2b0b5a8225d9e4ad76b008fb9be_77448fdb-0c6c-4bec-8ba1-bf48a761ffe4.webp"
  },
  {
    id: 3,
    name: "აწეწილი ქათმის სალათა",
    description: "ქათმის ფილე ბულგარული წიწაკითა და ნიგვზის საკაზმით.",
    price: 18,
    category: "სალათები",
    imageUrl: "/assets/qatmis-salata-bulgarulit.webp"
  }
];

const categories = ["ყველა", "ძირითადი", "ცომეული", "სალათები", "სასმელი"];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ყველა");

  const filteredItems = activeCategory === "ყველა" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-[#F9F6FC] min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#4A0E4E] mb-4 uppercase tracking-tighter">
            ჩვენი მენიუ
          </h2>
          <div className="w-24 h-1 bg-[#4A0E4E] mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#4A0E4E] text-white shadow-lg"
                  : "bg-white text-[#4A0E4E] border border-[#C3B1E1] hover:bg-[#F3E8FF]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="absolute top-4 left-4 z-10">
                <Badge text={item.category} variant="secondary" />
              </div>
              <Card 
                title={item.name}
                description={item.description}
                image={item.imageUrl}
              />
              <div className="absolute bottom-6 right-6 bg-[#4A0E4E] text-white px-4 py-1 rounded-lg font-bold">
                {item.price} ₾
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-xl italic">
            ამ კატეგორიაში კერძები მალე დაემატება...
          </div>
        )}

      </div>
    </section>
  );
};

export default Menu;