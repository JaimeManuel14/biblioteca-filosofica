// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas
import Home from './pages/home/home';
import Catalog from './pages/catalog/catalog';
import BookDetail from './pages/bookDetail/bookDetail';
import Rentals from './pages/rentals/rentals';
import Profile from './pages/profile/profile';

// Componentes comunes
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';

// Context Providers
import { UserProvider } from './context/userContext';
import { BooksProvider } from './context/booksContext';
import { RentalProvider } from './context/rentalContext';

function App() {
  return (
    <UserProvider>
      <BooksProvider>
        <RentalProvider>
          <Router>
            <Header />
            <main style={{ minHeight: '80vh', padding: '1rem' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path="/rentals" element={<Rentals />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </RentalProvider>
      </BooksProvider>
    </UserProvider>
  );
}

export default App;
