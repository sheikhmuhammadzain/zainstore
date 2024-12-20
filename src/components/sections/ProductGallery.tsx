import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const products = [
  {
    id: 1,
    name: 'CLASSIC RUNNER',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2000&auto=format&fit=crop',
    category: 'Running'
  },
  {
    id: 2,
    name: 'URBAN STREET',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop',
    category: 'Casual'
  },
  {
    id: 3,
    name: 'BUSINESS ELITE',
    price: '$159.99',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=2070&auto=format&fit=crop',
    category: 'Formal'
  },
  {
    id: 4,
    name: 'SPORT MAX',
    price: '$139.99',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop',
    category: 'Athletic'
  }
];

const ProductGallery: React.FC = () => {
  const { addToCart, items } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const isInCart = (productId: number) => {
    return items.some(item => item.id === productId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col h-full">
            <Link to={`/products/${product.id}`} className="flex-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-sm font-extralight tracking-[0.2em]">
                  {product.name}
                </h3>
                <p className="text-sm font-extralight tracking-wider text-gray-500">
                  {product.category}
                </p>
                <p className="text-sm font-extralight">
                  {product.price}
                </p>
              </div>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className={`mt-4 w-full py-3 text-sm font-extralight tracking-[0.1em] transition-colors ${
                isInCart(product.id)
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              {isInCart(product.id) ? 'ADDED TO CART' : 'ADD TO CART'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;