// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/layout.css';

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
            <div className='app-layout'>
              <Header />
              <main className="app-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/book/:id" element={<BookDetail />} />
                  <Route path="/rentals" element={<Rentals />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </RentalProvider>
      </BooksProvider>
    </UserProvider>
  );
}

export default App;
