import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import FeaturedCollections from './components/sections/FeaturedCollections';
import ProductCatalog from './components/sections/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Toaster } from 'react-hot-toast';

const Home = () => (
  <>
    <Hero />
    <FeaturedCollections />
  </>
);

const MensCollection = () => (
  <ProductCatalog defaultCategory="men" />
);

const WomensCollection = () => (
  <ProductCatalog defaultCategory="women" />
);

const KidsCollection = () => (
  <ProductCatalog defaultCategory="kids" />
);

const Cart = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl font-light">Shopping Cart</h1>
  </div>
);

const App: React.FC = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mens" element={<MensCollection />} />
                <Route path="/womens" element={<WomensCollection />} />
                <Route path="/kids" element={<KidsCollection />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/success" element={<CheckoutSuccess />} />
              </Routes>
            </main>
            <Footer />
            <Toaster 
              position="bottom-right"
              toastOptions={{
                className: '',
                style: {
                  background: '#333',
                  color: '#fff',
                },
              }}
            />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;