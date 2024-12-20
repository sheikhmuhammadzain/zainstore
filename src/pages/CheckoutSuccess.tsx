import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const CheckoutSuccess: React.FC = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-6 text-3xl font-light text-gray-900">
            Order Confirmed!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for your purchase. We'll send you a confirmation email shortly.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="border-t border-b py-4">
            <p className="text-center text-sm text-gray-600">
              Order Number: <span className="font-medium">{orderNumber}</span>
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/account/orders')}
              className="w-full flex justify-center py-3 px-4 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              View Order Details
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-black/90 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            What happens next?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li>You'll receive an order confirmation email</li>
            <li>We'll process your order within 24 hours</li>
            <li>Shipping updates will be sent to your email</li>
            <li>Expected delivery in 3-5 business days</li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <button
              onClick={() => navigate('/contact')}
              className="font-medium text-black hover:text-gray-900"
            >
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
