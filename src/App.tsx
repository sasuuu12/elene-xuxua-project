import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<div className="p-10 text-center text-xl font-bold text-[#4A0E4E]">კეთილი იყოს თქვენი მობრძანება Mouveline-ში!</div>} />
          <Route path="/menu" element={<div className="p-10 text-center">აქ იქნება მენიუს კატალოგი</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;