import React from "react";
import { useNavigate } from "react-router-dom";
import { Check } from 'lucide-react';

const CheckoutSuccess: React.FC = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto h-24 w-24 rounded-full bg-black/5 flex items-center justify-center mb-8">
            <Check className="h-12 w-12 text-black" strokeWidth={1} />
          </div>

          <h1 className="text-4xl font-light tracking-widest mb-4">
            Thank You
          </h1>
          <p className="text-lg font-light tracking-wide text-gray-600 mb-12">
            Your order has been successfully placed
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 p-12 mb-12">
            <h2 className="text-2xl font-light tracking-wider mb-8">
              Order Details
            </h2>
            <div className="text-gray-600 space-y-4">
              <p className="font-light tracking-wide">
                Order Number:{" "}
                <span className="text-black font-light">#{orderNumber}</span>
              </p>
              <p className="font-light tracking-wide max-w-md mx-auto">
                We'll send you a confirmation email with your order details and
                tracking information.
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/collections")}
              className="w-full px-6 py-3 bg-black text-white font-light tracking-wider text-sm hover:bg-black/90 transition-colors"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full px-6 py-3 bg-white text-black border border-black font-light tracking-wider text-sm hover:bg-black hover:text-white transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
