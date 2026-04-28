import React, { useEffect, useState, useContext } from 'react'; 
import Card from '../components/Card';
import Badge from '../components/Badge';
import SearchBar from '../components/SearchBar'; 
import { ThemeContext } from '../components/ThemeContext'; 
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/CartSlice';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

// 🌟 1. ვქმნით ლექსიკონს: ქართული სიტყვა -> ინგლისური კატეგორია API-სთვის
const categoryMap: Record<string, string> = {
  "ყველა": "Seafood", // "ყველა"-ს დროს default-ად Seafood წამოიღოს
  "ზღვის საჭმელი": "Seafood",
  "ქათამი": "Chicken",
  "დესერტი": "Dessert",
  "პასტა": "Pasta"
};

// ეკრანზე გამოსაჩენი ღილაკებისთვის ვიღებთ მხოლოდ ქართულ სახელებს
const categories = Object.keys(categoryMap); 

const Menu: React.FC = () => {
  const { theme } = useContext(ThemeContext); 
  const dispatch = useAppDispatch(); 

  const [activeCategory, setActiveCategory] = useState("ყველა");
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      try {
        // 🌟 2. API-ს ვუგზავნით ნათარგმნ ინგლისურ სიტყვას (მაგ. Seafood)
        const apiCategory = categoryMap[activeCategory];
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${apiCategory}`);
        const data = await response.json();
        
        if (data.meals) {
          const formattedData: MenuItem[] = data.meals.map((meal: any) => ({
            id: parseInt(meal.idMeal),
            name: meal.strMeal,
            description: "ახალი და გემრიელი კერძი ჩვენი შეფ-მზარეულისგან",
            price: Math.floor(Math.random() * 20) + 10,
            // 🌟 3. ბარათის ბეჯზე ვწერთ ქართულ სახელს
            category: activeCategory === "ყველა" ? "ზღვის საჭმელი" : activeCategory, 
            imageUrl: meal.strMealThumb
          }));
          setItems(formattedData);
        } else {
          setItems([]);
        }
      } catch (error) {
        console.error("მონაცემების წამოღება ვერ მოხერხდა:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, [activeCategory]);

  const handleAddToCart = (item: MenuItem) => {
    dispatch(addToCart({
      id: item.id,
      title: item.name, 
      price: item.price,
      image: item.imageUrl,
    }));
  };

  const finalFilteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={`py-20 px-4 min-h-screen transition-colors duration-500 animate-fade-in ${
      theme === 'light' ? 'bg-[#F9F6FC]' : 'bg-[#1a1a1a]'
    }`}>
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-extrabold mb-4 pt-2 leading-relaxed uppercase tracking-tighter transition-colors duration-500 ${
            theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#EADDF8]'
          }`}>
            ჩვენი ციფრული მენიუ
          </h2>
          <div className="w-24 h-1 bg-[#4A0E4E] mx-auto rounded-full mb-8" />
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSearchTerm(""); 
              }}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#4A0E4E] text-white shadow-lg"
                  : theme === 'light' 
                    ? "bg-white text-[#4A0E4E] border border-[#C3B1E1] hover:bg-[#F3E8FF]"
                    : "bg-[#2a2a2a] text-[#EADDF8] border border-gray-700 hover:bg-[#3a3a3a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4A0E4E]"></div>
          </div>
        ) : (
          <>
            {finalFilteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {finalFilteredItems.map((item) => (
                  <div key={item.id} className="relative group">
                    <div className="absolute top-4 left-4">
                      <Badge text={item.category} variant="secondary" />
                    </div>
                    
                    <Card
                      title={item.name}
                      description={item.description}
                      image={item.imageUrl}
                      price={item.price}
                      onAddToCart={() => handleAddToCart(item)} id={0}                    />
                    
                    <div className="absolute top-4 right-4 bg-[#4A0E4E] text-white px-3 py-1 rounded-full font-bold shadow-md">
                       {item.price} ₾
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-20 text-xl font-medium transition-colors duration-500 ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                "{searchTerm}"-ით კერძი ვერ მოიძებნა 🍽️
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Menu;