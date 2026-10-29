import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentDetails {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

const Input = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div className="mb-6">
    <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors font-light tracking-wide text-gray-900"
    />
  </div>
);

const Button = ({ children, secondary = false, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { secondary?: boolean }) => (
  <button
    {...props}
    className={`w-full px-6 py-3 font-light tracking-wider text-sm transition-colors ${
      secondary
        ? 'bg-white text-black border border-black hover:bg-black hover:text-white'
        : 'bg-black text-white hover:bg-black/90'
    }`}
  >
    {children}
  </button>
);

const StepIndicator = ({ currentStep }: { currentStep: 'shipping' | 'payment' | 'confirmation' }) => (
  <div className="flex justify-center mb-12">
    <div className="flex items-center space-x-4">
      {['shipping', 'payment', 'confirmation'].map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === step
                ? 'bg-black text-white'
                : index < ['shipping', 'payment', 'confirmation'].indexOf(currentStep)
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-400'
            }`}>
              {index + 1}
            </div>
            <span className="text-xs font-light tracking-wider mt-2 capitalize">{step}</span>
          </div>
          {index < 2 && (
            <div className={`h-px w-16 ${
              index < ['shipping', 'payment', 'confirmation'].indexOf(currentStep)
                ? 'bg-gray-900'
                : 'bg-gray-200'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('confirmation');
    window.scrollTo(0, 0);
  };

  const handleConfirmation = () => {
    clearCart();
    navigate('/checkout/success');
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light tracking-widest text-center mb-12">CHECKOUT</h1>
        
        <StepIndicator currentStep={currentStep} />

        {/* Cart Summary */}
        <div className="mb-12">
          <h2 className="text-xl font-light tracking-wider mb-6">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                  <div>
                    <h3 className="font-light tracking-wide">{item.name}</h3>
                    <p className="text-sm text-gray-500 font-light">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-light">${parseFloat(item.price) * item.quantity}</p>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4">
              <span className="font-light tracking-wide">Total</span>
              <span className="text-xl font-light tracking-wide">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {currentStep === 'shipping' && (
          <form onSubmit={handleShippingSubmit} className="space-y-6">
            <h2 className="text-xl font-light tracking-wider mb-6">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="First Name"
                required
                value={shippingDetails.firstName}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, firstName: e.target.value }))}
              />
              <Input
                label="Last Name"
                required
                value={shippingDetails.lastName}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, lastName: e.target.value }))}
              />
            </div>
            <Input
              label="Email"
              type="email"
              required
              value={shippingDetails.email}
              onChange={(e) => setShippingDetails(prev => ({ ...prev, email: e.target.value }))}
            />
            <Input
              label="Address"
              required
              value={shippingDetails.address}
              onChange={(e) => setShippingDetails(prev => ({ ...prev, address: e.target.value }))}
            />
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="City"
                required
                value={shippingDetails.city}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, city: e.target.value }))}
              />
              <Input
                label="State"
                required
                value={shippingDetails.state}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, state: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="ZIP Code"
                required
                value={shippingDetails.zipCode}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, zipCode: e.target.value }))}
              />
              <Input
                label="Country"
                required
                value={shippingDetails.country}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, country: e.target.value }))}
              />
            </div>
            <div className="pt-6">
              <Button type="submit">Continue to Payment</Button>
            </div>
          </form>
        )}

        {currentStep === 'payment' && (
          <form onSubmit={handlePaymentSubmit} className="space-y-6">
            <h2 className="text-xl font-light tracking-wider mb-6">Payment Information</h2>
            <Input
              label="Card Number"
              required
              placeholder="1234 5678 9012 3456"
              value={paymentDetails.cardNumber}
              onChange={(e) => setPaymentDetails(prev => ({ ...prev, cardNumber: e.target.value }))}
            />
            <Input
              label="Card Holder"
              required
              placeholder="John Doe"
              value={paymentDetails.cardHolder}
              onChange={(e) => setPaymentDetails(prev => ({ ...prev, cardHolder: e.target.value }))}
            />
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="Expiry Date"
                required
                placeholder="MM/YY"
                value={paymentDetails.expiryDate}
                onChange={(e) => setPaymentDetails(prev => ({ ...prev, expiryDate: e.target.value }))}
              />
              <Input
                label="CVV"
                required
                placeholder="123"
                value={paymentDetails.cvv}
                onChange={(e) => setPaymentDetails(prev => ({ ...prev, cvv: e.target.value }))}
              />
            </div>
            <div className="pt-6 space-y-4">
              <Button type="submit">Complete Order</Button>
              <Button type="button" secondary onClick={() => setCurrentStep('shipping')}>
                Back to Shipping
              </Button>
            </div>
          </form>
        )}

        {currentStep === 'confirmation' && (
          <div className="text-center">
            <h2 className="text-xl font-light tracking-wider mb-6">Review Your Order</h2>
            <p className="text-gray-600 font-light mb-8">
              Please review your order details before confirming.
            </p>
            <div className="space-y-4">
              <Button onClick={handleConfirmation}>Confirm Order</Button>
              <Button type="button" secondary onClick={() => setCurrentStep('payment')}>
                Back to Payment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
