// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '80px', color: 'crimson', margin: 0 }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>გვერდი ვერ მოიძებნა 🤷‍♂️</h2>
      <p style={{ color: 'gray', marginBottom: '30px' }}>
        სამწუხაროდ, მისამართი რომელსაც ეძებთ, არ არსებობს ან წაშლილია.
      </p>
      
      {/* 🌟 ღილაკი მთავარ გვერდზე დასაბრუნებლად */}
      <Link 
        to="/" 
        style={{
          padding: '10px 20px', backgroundColor: '#007bff', 
          color: 'white', textDecoration: 'none', borderRadius: '5px'
        }}
      >
        მთავარ გვერდზე დაბრუნება
      </Link>
    </div>
  );
}

export default NotFoundPage;