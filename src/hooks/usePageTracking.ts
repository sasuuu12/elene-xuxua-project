import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom Hook: თვალს ადევნებს გვერდის შეცვლას, ასქროლებს ზევით და ცვლის სათაურს
export const usePageTracking = () => {
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
};
