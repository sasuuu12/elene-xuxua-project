import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* მომავალში აქ დაემატება <Routes> და სხვადასხვა გვერდები.
        მანამდე კი დავრწმუნდეთ, რომ Router-იც მუშაობს და Tailwind-იც:
      */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-600">
          React Router და Tailwind წარმატებით მუშაობს! 🚀
        </h1>
      </div>
    </BrowserRouter>
  );
}

export default App;