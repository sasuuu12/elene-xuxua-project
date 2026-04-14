import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

// სურათების იმპორტი
import xachapuri from './assets/Khachapuri.webp';
import xinkali from './assets/8379b2b0b5a8225d9e4ad76b008fb9be_77448fdb-0c6c-4bec-8ba1-bf48a761ffe4.webp';
import awewili from './assets/qatmis-salata-bulgarulit.webp';
import Restaurant from './assets/restora.webp';
import NotFoundPage from './pages/NotFoundPage'; 

const PageSettings = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. ყოველ გვერდზე გადასვლისას ავიდეს ზევით
    window.scrollTo(0, 0);

    // 2. სათაურის განახლება pathname-ის მიხედვით
    switch (pathname) {
      case '/':
        document.title = 'MOUVELINE | მთავარი';
        break;
      case '/about':
        document.title = 'MOUVELINE | ჩვენს შესახებ';
        break;
      case '/menu':
        document.title = 'MOUVELINE | მენიუ';
        break;
      case '/contact':
        document.title = 'MOUVELINE | კონტაქტი';
        break;
      default:
        document.title = 'MOUVELINE';
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <PageSettings /> 
      <MainLayout>
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="min-h-screen bg-gradient-to-b from-white to-[#F3E8FF] py-20 px-4">
                
                {/* Hero სექცია */}
                <div className="max-w-6xl mx-auto text-center mb-16">
                  
                  {/* მთავარი სათაური უკან დაბრუნებულია! */}
                  <h1 className="text-5xl md:text-8xl font-black text-[#4A0E4E] mb-4 tracking-tighter italic">
                    MOUVELINE
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
                    ადგილი, სადაც შიმშილსა და სტრესს ემშვიდობები. 🍷
                  </p>
                  
                  <Link 
                    to="/menu"
                    className="inline-block bg-[#4A0E4E] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#3A0B3D] transition-all shadow-xl hover:shadow-purple-300 transform hover:-translate-y-1"
                  >
                    აღმოაჩინე მენიუ
                  </Link>
                </div>

                {/* Bento Grid გალერეა */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[750px]">
                  
                  {/* მთავარი ფოტო (ინტერიერი) */}
                  <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
                    <img 
                      src={Restaurant} 
                      alt="Restaurant Interior" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <span className="bg-[#C3B1E1] text-[#4A0E4E] px-4 py-1 rounded-full text-sm font-black uppercase">Interior</span>
                      <h3 className="text-2xl font-bold mt-2 text-white">დახვეწილი გარემო</h3>
                    </div>
                  </div>

                  {/* ხაჭაპური */}
                  <div className="md:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white">
                    <img src={xachapuri} alt="Khachapuri" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-white/95 text-[#4A0E4E] px-4 py-1 rounded-xl text-sm font-bold shadow-lg">ცომეული</span>
                    </div>
                  </div>

                  {/* ხინკალი */}
                  <div className="relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white">
                    <img src={xinkali} alt="Xinkali" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>

                  {/* აწეწილი */}
                  <div className="relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-white">
                    <img src={awewili} alt="Salad" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;