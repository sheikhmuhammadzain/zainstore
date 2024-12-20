import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wide">ZAIN STORE</h3>
            <p className="text-sm text-gray-500">
              Premium footwear for every step of your journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/mens"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/womens"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/sale"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/size-guide"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-gray-400 text-center">
            {new Date().getFullYear()} ZAIN STORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
