import React, { useEffect, useState, useContext } from 'react'; 
import Card from '../components/Card';
import Badge from '../components/Badge';
import SearchBar from '../components/SearchBar'; 
import { ThemeContext } from '../components/ThemeContext'; 

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

const categories = ["ყველა", "Seafood", "Chicken", "Dessert", "Pasta"];

const Menu: React.FC = () => {
  const { theme } = useContext(ThemeContext); 

  const [activeCategory, setActiveCategory] = useState("ყველა");
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      try {
        const categoryToFetch = activeCategory === "ყველა" ? "Seafood" : activeCategory;
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryToFetch}`);
        const data = await response.json();
        
        if (data.meals) {
          const formattedData: MenuItem[] = data.meals.map((meal: any) => ({
            id: parseInt(meal.idMeal),
            name: meal.strMeal,
            description: "ახალი და გემრიელი კერძი ჩვენი შეფ-მზარეულისგან",
            price: Math.floor(Math.random() * 20) + 10,
            category: categoryToFetch,
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

  const finalFilteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <section className={`py-20 px-4 min-h-screen transition-colors duration-500 ${
      theme === 'light' ? 'bg-[#F9F6FC]' : 'bg-[#1a1a1a]'
    }`}>
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-12">
    
          <h2 className={`text-4xl font-extrabold mb-4 uppercase tracking-tighter transition-colors duration-500 ${
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