import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { ThemeContext } from './components/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { useAppDispatch } from './store/hooks';
import { addToCart } from './store/CartSlice';

import xachapuri from './assets/Khachapuri.webp';
import xinkali from './assets/xinkali.webp'; 
import mwvadi from './assets/mwvadi.webp';
import ostri from './assets/ostri.webp';
import salmoni from './assets/salmoni.webp';
import awewili from './assets/qatmis-salata-bulgarulit.webp';
import Restaurant from './assets/restora.webp';
import NotFoundPage from './pages/NotFoundPage'; 

const PageSettings = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (pathname) {
      case '/': document.title = 'MOUVELINE | მთავარი'; break;
      case '/about': document.title = 'MOUVELINE | ჩვენს შესახებ'; break;
      case '/menu': document.title = 'MOUVELINE | მენიუ'; break;
      case '/contact': document.title = 'MOUVELINE | კონტაქტი'; break;
      default: document.title = 'MOUVELINE';
    }
  }, [pathname]);
  return null;
};

const HomePageContent = ({ theme }: { theme: string }) => {
  const dispatch = useAppDispatch(); 

  return (
    <div className={`min-h-screen py-20 px-4 transition-colors duration-500 ${theme === 'light' ? 'bg-gradient-to-b from-white to-[#F3E8FF]' : 'bg-gradient-to-b from-[#1a1a1a] to-[#2d1b36]'}`}>
      <div className="max-w-6xl mx-auto text-center mb-16 pt-10">
        <h1 className={`text-5xl md:text-8xl font-black mb-4 tracking-tighter italic ${theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#C3B1E1]'}`}>
          MOUVELINE
        </h1>
        <p className={`text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          ადგილი, სადაც შიმშილსა და სტრესს ემშვიდობები. 🍷
        </p>
        <Link 
          to="/menu"
          className="inline-block bg-[#4A0E4E] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#3A0B3D] transition-all shadow-xl hover:shadow-purple-300 transform hover:-translate-y-1"
        >
          აღმოაჩინე მენიუ
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
        
        {/* 0. რესტორანი (აქაც lazy loading დავტოვეთ შენი სურვილისამებრ) */}
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/10 min-h-[350px] md:min-h-full">
          <img 
            src={Restaurant} 
            alt="Restaurant Interior" 
            loading="lazy" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70" />
          <div className="absolute bottom-8 left-8 text-white">
            <span className="bg-[#C3B1E1] text-[#4A0E4E] px-4 py-1 rounded-full text-sm font-black uppercase tracking-wider">ინტერიერი</span>
            <h3 className="text-3xl font-black mt-3 text-white">დახვეწილი გარემო</h3>
          </div>
        </div>

        {/* 1. ხაჭაპური */}
        <div className="md:col-span-1 relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/10 h-full">
          <img src={xachapuri} alt="Khachapuri" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-white/95 text-[#4A0E4E] px-4 py-1 rounded-xl text-sm font-bold shadow-lg">აჭარული</span>
          </div>
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => dispatch(addToCart({ id: 101, title: 'აჭარული ხაჭაპური', price: 18, image: xachapuri }))}
              className="bg-[#4A0E4E] text-white px-3 py-2 rounded-xl font-bold shadow-lg hover:bg-[#C3B1E1] hover:text-[#4A0E4E] active:scale-95 transition-all"
            >
              + 18 ₾
            </button>
          </div>
        </div>

        {/* 2. ხინკალი */}
        <div className="md:col-span-1 relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/10 h-full">
          <img src={xinkali} alt="Xinkali" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-white/95 text-[#4A0E4E] px-4 py-1 rounded-xl text-sm font-bold shadow-lg">ხინკალი</span>
          </div>
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => dispatch(addToCart({ id: 102, title: 'ქალაქური ხინკალი (10ც)', price: 20, image: xinkali }))}
              className="bg-[#4A0E4E] text-white px-3 py-2 rounded-xl font-bold shadow-lg hover:bg-[#C3B1E1] hover:text-[#4A0E4E] active:scale-95 transition-all"
            >
              + 20 ₾
            </button>
          </div>
        </div>

        {/* 3. ოსტრი */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/10 h-full">
          <img src={ostri} alt="Ostri" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-white/95 text-[#4A0E4E] px-4 py-1 rounded-xl text-sm font-bold shadow-lg">ოსტრი</span>
          </div>
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => dispatch(addToCart({ id: 103, title: 'ოსტრი', price: 20, image: ostri }))}
              className="bg-[#4A0E4E] text-white px-4 py-2 rounded-xl font-bold shadow-lg hover:bg-[#C3B1E1] hover:text-[#4A0E4E] active:scale-95 transition-all"
            >
              + 20 ₾
            </button>
          </div>
        </div>

        {/* 4. სალმონი */}
        <div className="md:col-span-1 relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/10 h-full">
          <img src={salmoni} alt="Salmoni" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-white/95 text-[#4A0E4E] px-4 py-1 rounded-xl text-sm font-bold shadow-lg">სალმონი</span>
          </div>
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => dispatch(addToCart({ id: 104, title: 'სალმონი', price: 25, image: salmoni }))}
              className="bg-[#4A0E4E] text-white px-3 py-2 rounded-xl font-bold shadow-lg hover:bg-[#C3B1E1] hover:text-[#4A0E4E] active:scale-95 transition-all"
            >
              + 25 ₾
            </button>
          </div>
        </div>

        {/* 5. მწვადი */}
        <div className="md:col-span-1 relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/10 h-full">
          <img src={mwvadi} alt="Mwvadi" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-white/95 text-[#4A0E4E] px-4 py-1 rounded-xl text-sm font-bold shadow-lg">მწვადი</span>
          </div>
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => dispatch(addToCart({ id: 105, title: 'მწვადი', price: 15, image: mwvadi }))}
              className="bg-[#4A0E4E] text-white px-3 py-2 rounded-xl font-bold shadow-lg hover:bg-[#C3B1E1] hover:text-[#4A0E4E] active:scale-95 transition-all"
            >
              + 15 ₾
            </button>
          </div>
        </div>

        {/* 6. სალათი */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/10 h-full">
          <img src={awewili} alt="Salad" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-white/95 text-[#4A0E4E] px-4 py-1 rounded-xl text-sm font-bold shadow-lg">აწეწილი</span>
          </div>
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => dispatch(addToCart({ id: 106, title: 'ქათმის სალათი', price: 16, image: awewili }))}
              className="bg-[#4A0E4E] text-white px-4 py-2 rounded-xl font-bold shadow-lg hover:bg-[#C3B1E1] hover:text-[#4A0E4E] active:scale-95 transition-all"
            >
              + 16 ₾
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-white text-black" : "bg-[#1a1a1a] text-white"}`}>
          
          {/* ღილაკი თავის ორიგინალ ადგილას */}
          <div className="absolute top-4 right-4 z-[100]">
            <button 
              onClick={toggleTheme} 
              className="px-4 py-2 rounded-lg font-bold transition-all shadow-md bg-white text-[#4A0E4E] border border-[#C3B1E1] hover:bg-[#F3E8FF]"
            >
              {theme === "light" ? "🌙 ღამე" : "☀️ დღე"}
            </button>
          </div>
          
          <Router>
            <PageSettings /> 
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePageContent theme={theme} />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </MainLayout>
          </Router>
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;