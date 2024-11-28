import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Stationery from './pages/Stationery';
import GreetingCards from './pages/GreetingCards';
import CoupleGifts from './pages/CoupleGifts';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Admin from './pages/Admin';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mera_bestie" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/stationery" element={<Stationery />} />
              <Route path="/greeting-cards" element={<GreetingCards />} />
              <Route path="/couple-gifts" element={<CoupleGifts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/shop" element={<Home />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/returns" element={<Returns />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;