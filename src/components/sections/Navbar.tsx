import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useCart } from "../../context/CartContext";
import CartSidebar from "./CartSidebar";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black lg:hidden"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>

              {/* Logo */}
              <Link
                to="/"
                className="flex-shrink-0 flex items-center ml-4 lg:ml-0"
              >
                <span className="text-xl font-light tracking-wide">
                  ZAIN STORE
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:ml-12 lg:flex lg:space-x-8">
                <Link
                  to="/mens"
                  className="text-sm font-light text-gray-900 hover:text-gray-500 px-3 py-2"
                >
                  Men
                </Link>
                <Link
                  to="/womens"
                  className="text-sm font-light text-gray-900 hover:text-gray-500 px-3 py-2"
                >
                  Women
                </Link>
                <Link
                  to="/kids"
                  className="text-sm font-light text-gray-900 hover:text-gray-500 px-3 py-2"
                >
                  Kids
                </Link>
              </div>
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Search className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-gray-400 hover:text-gray-500 relative"
              >
                <ShoppingBag className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 h-4 w-4 rounded-full bg-black text-xs text-white flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/mens"
                className="block pl-3 pr-4 py-2 text-base font-light text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Men
              </Link>
              <Link
                to="/womens"
                className="block pl-3 pr-4 py-2 text-base font-light text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Women
              </Link>
              <Link
                to="/kids"
                className="block pl-3 pr-4 py-2 text-base font-light text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Kids
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
