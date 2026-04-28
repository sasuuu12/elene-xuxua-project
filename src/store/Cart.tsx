import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../components/ThemeContext'; 
import { useAppSelector, useAppDispatch } from './hooks'; 
import { removeFromCart, addToCart, decreaseQuantity, clearCart } from './CartSlice'; 

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const scriptSrc = "https://cdn.jsdelivr.net/gh/noumanqamar450/alertbox@main/version/1.0.2/alertbox.min.js";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      return;
    }
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    };
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadScript);
    } else {
      setTimeout(loadScript, 200);
    }
  }, []);

  const handleOrder = () => {
    if ((window as any).alertbox) {
      (window as any).alertbox.render({
        alertIcon: 'success',
        title: 'წარმატება!',
        message: 'თქვენი შეკვეთა წარმატებით გაფორმდა! 🥳',
        btnTitle: 'ოკ',
        themeColor: '#86459e'
      });
    } else {
      alert("თქვენი შეკვეთა წარმატებით გაფორმდა! 🥳");
    }
    dispatch(clearCart());
  };

  return (
    <div className={`p-6 rounded-2xl w-[calc(100vw-2rem)] sm:w-[400px] max-w-[400px] shadow-2xl transition-colors duration-500 border-2 ${
      theme === 'light' 
        ? 'bg-white text-gray-800 border-[#C3B1E1]/50' 
        : 'bg-[#2a2a2a] text-white border-gray-700 shadow-purple-900/30'
    }`}>

    
      <h3 className={`text-xl font-black mb-4 flex items-center justify-between pb-3 border-b ${
        theme === 'light' ? 'text-[#4A0E4E] border-gray-100' : 'text-[#EADDF8] border-gray-700'
      }`}>
        <span className="flex items-center gap-2">კალათა 🛒</span>
        
        {/* ნივთების რაოდენობის ბეჯი */}
        <span className="text-xs font-bold bg-red-500 text-white px-2 py-1 rounded-full shadow-sm">
          {cartItems.length} ნივთი
        </span>
      </h3>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <span className="text-4xl mb-2 block animate-bounce">🍽️</span>
          <p className="text-gray-500 italic font-medium">კალათა ჯერ ცარიელია...</p>
        </div>
      ) : (
        <>
          <div className="max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
            {cartItems.map((item: any) => (
              <div key={item.id} className={`flex flex-col py-4 border-b last:border-0 ${
                theme === 'light' ? 'border-gray-100' : 'border-gray-700'
              }`}>
                
                <div className="flex justify-between items-start mb-3 gap-3">
                  <div className="flex items-center gap-3">
                    <img src={item.image}  loading='lazy' alt={item.title} className="w-12 h-12 rounded-lg object-cover shadow-sm border border-gray-200" />
                    <b className="text-sm leading-tight">{item.title?.slice(0, 25)}...</b>
                  </div>
                  <span className="text-[#C3B1E1] font-black whitespace-nowrap">
                    {item.price * item.quantity} ₾
                  </span> 
                </div>
                
                <div className="flex justify-between items-center mt-1">
                  
                  {/* რაოდენობის კონტროლი */}
                  <div className={`flex items-center gap-3 rounded-lg px-3 py-1 font-bold ${
                    theme === 'light' ? 'bg-[#F3E8FF] text-[#4A0E4E]' : 'bg-[#1a1a1a] text-[#EADDF8]'
                  }`}>
                      <button 
                          onClick={() => dispatch(decreaseQuantity(item.id))} 
                          className="text-xl hover:text-red-500 transition-colors focus:outline-none"
                      >−</button>
                      
                      <span className="text-base w-4 text-center">{item.quantity}</span>
                      
                      <button 
                          onClick={() => dispatch(addToCart(item))} 
                          className="text-xl hover:text-green-500 transition-colors focus:outline-none"
                      >+</button>
                  </div>

                  <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 px-3 py-1 rounded-lg text-sm font-bold transition-colors flex items-center gap-1 group"
                  >
                    <span className="text-base group-hover:rotate-12 transition-transform">🗑️</span> წაშლა
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* ქვედა სექცია: ჯამი და ღილაკი */}
          <div className={`mt-4 pt-4 border-t-2 ${theme === 'light' ? 'border-[#4A0E4E]' : 'border-[#C3B1E1]'}`}>
            <div className={`text-right text-xl flex justify-between items-center font-black mb-4 ${
              theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#EADDF8]'
            }`}>
              <span>სულ ჯამი:</span>
              <span className="text-2xl">{totalPrice.toFixed(2)} ₾</span>
            </div>
            
            <button 
              onClick={handleOrder}
              className="w-full bg-[#4A0E4E] text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-[#C3B1E1] hover:text-[#4A0E4E] transition-all transform hover:-translate-y-1 mt-2"
            >
              შეუკვეთე
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;