import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import CartSidebar from './sections/CartSidebar';
import SearchResults from './sections/SearchResults';

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { 
    searchQuery, 
    setSearchQuery, 
    setSearchResults, 
    setIsSearching,
    clearSearch 
  } = useSearch();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        clearSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [clearSearch]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      // Filter products based on search query
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
      setIsSearching(true);
    } else {
      clearSearch();
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-light tracking-wider">
            ZAIN STORE
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/mens" className="text-sm font-light tracking-wider hover:text-gray-600">
              MEN
            </NavLink>
            <NavLink to="/womens" className="text-sm font-light tracking-wider hover:text-gray-600">
              WOMEN
            </NavLink>
            <NavLink to="/kids" className="text-sm font-light tracking-wider hover:text-gray-600">
              KIDS
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 relative" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-sm font-light bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <SearchResults />
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/mens"
                className="text-sm font-light tracking-wider hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MEN
              </NavLink>
              <NavLink
                to="/womens"
                className="text-sm font-light tracking-wider hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WOMEN
              </NavLink>
              <NavLink
                to="/kids"
                className="text-sm font-light tracking-wider hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                KIDS
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
