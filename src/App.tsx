import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, lazy, Suspense, useCallback } from 'react';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
const Menu = lazy(() => import('./pages/Menu'));
const Contact = lazy(() => import('./pages/Contact'));
import { ThemeContext } from './components/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { useAppDispatch } from './store/hooks';
import { addToCart } from './store/CartSlice';


import xachapuri from './assets/Khachapuri.webp';
import xinkali from './assets/xinkali.webp';
import mwvadi from './assets/mwvadi.webp';
import salmoni from './assets/salmoni.webp';

import Restaurant from './assets/restora.webp';
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import { usePageTracking } from './hooks/usePageTracking';

const PageSettings = () => {
  usePageTracking();
  return null;
};

const GridFoodItem = ({ image, alt, label, price, id, title, dispatch }: {
  image: string; alt: string; label: string; price: number; id: number; title: string; dispatch: ReturnType<typeof useAppDispatch>;
}) => (
  <div className="col-span-1 md:col-span-1 relative group overflow-hidden rounded-2xl md:rounded-[2rem] shadow-xl border-4 border-white/10 h-full">
    <img src={image} width="400" height="300" alt={alt} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
    <div className="absolute top-3 left-3 md:bottom-6 md:left-6 md:top-auto">
      <span className="bg-white/95 text-[#4A0E4E] px-2 py-1 md:px-4 md:py-1 rounded-lg md:rounded-xl text-xs md:text-sm font-bold shadow-lg">{label}</span>
    </div>
    <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button
        onClick={() => dispatch(addToCart({ id, title, price, image }))}
        className="bg-[#4A0E4E] text-white px-2 py-1 md:px-3 md:py-2 rounded-lg md:rounded-xl text-xs md:text-base font-bold shadow-lg hover:bg-[#C3B1E1] hover:text-[#4A0E4E] active:scale-95 transition-all"
      >
        + {price} ₾
      </button>
    </div>
  </div>
);

const HomePageContent = ({ theme }: { theme: string }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`min-h-screen pt-20 pb-20 transition-colors duration-500 animate-fade-in ${theme === 'light' ? 'bg-gradient-to-b from-white to-[#F3E8FF]' : 'bg-gradient-to-b from-[#1a1a1a] to-[#2d1b36]'}`}>
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden mb-16 shadow-2xl">
        <img
          src={Restaurant}
          alt="Mouveline Restaurant"
          fetchPriority="high"
          width="1200"
          height="800"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#4A0E4E]/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="backdrop-blur-sm md:backdrop-blur-md bg-white/10 p-8 md:p-16 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(74,14,78,0.3)] animate-slide-up hover:bg-white/15 transition-colors duration-500">
            <h1 className="text-4xl md:text-8xl font-black mb-2 tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EADDF8] to-white drop-shadow-2xl">
              MOUVELINE
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#C3B1E1] to-transparent mx-auto mb-6 rounded-full"></div>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-10 drop-shadow-lg max-w-3xl leading-relaxed">
              ადგილი, სადაც შიმშილსა და სტრესს ემშვიდობები.
            </h2>
            <Link
              to="/menu"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#4A0E4E] to-[#86459e] rounded-full overflow-hidden hover:scale-105 hover:shadow-[0_0_30px_rgba(195,177,225,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative">აღმოაჩინე მენიუ</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
        <div className="col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/10 min-h-[200px] md:min-h-full">
          <img
            src={Restaurant}
            alt="Restaurant Interior"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70" />
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white">
            <span className="bg-[#C3B1E1] text-[#4A0E4E] px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-black uppercase tracking-wider">ინტერიერი</span>
            <h3 className="text-2xl md:text-3xl font-black mt-2 md:mt-3 text-white">დახვეწილი გარემო</h3>
          </div>
        </div>
        <GridFoodItem image={xachapuri} alt="Khachapuri" label="ხაჭაპური" price={18} id={101} title="აჭარული ხაჭაპური" dispatch={dispatch} />
        <GridFoodItem image={xinkali} alt="Xinkali" label="ხინკალი" price={20} id={102} title="ქალაქური ხინკალი (10ც)" dispatch={dispatch} />
        <GridFoodItem image={salmoni} alt="Salmoni" label="სალმონი" price={25} id={104} title="სალმონი" dispatch={dispatch} />
        <GridFoodItem image={mwvadi} alt="Mwvadi" label="მწვადი" price={15} id={105} title="მწვადი" dispatch={dispatch} />

      </div>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }, []);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-white text-black" : "bg-[#1a1a1a] text-white"}`}>

          <Router>
            <PageSettings />
            <MainLayout>
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-[#C3B1E1] border-t-[#4A0E4E] rounded-full animate-spin"></div></div>}>
                <Routes>
                  <Route path="/" element={<HomePageContent theme={theme} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </MainLayout>
          </Router>
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;