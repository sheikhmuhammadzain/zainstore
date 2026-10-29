import React from 'react';
import { Filter, SortAsc, Heart, ShoppingBag, Star, StarHalf } from 'lucide-react';

const products = [
  {
    name: 'Classic Leather Oxford',
    price: 199.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1478186510433-7draaf7d4647?auto=format&fit=crop&q=80'
  },
  {
    name: 'Premium Suede Loafers',
    price: 159.99,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80'
  },
  {
    name: 'Sport Running Shoes',
    price: 129.99,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80'
  },
  {
    name: 'Casual Sneakers',
    price: 89.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80'
  }
];

const ProductCatalog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">New Arrivals</h2>
            <p className="text-gray-600">Discover our latest collection of premium footwear</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <SortAsc className="w-4 h-4" />
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
                    <ShoppingBag className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-brown-500 border-2 border-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-500 border-2 border-gray-300"></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">${product.price}</p>
                  <div className="text-sm text-yellow-500 flex">
                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    {product.rating % 1 !== 0 && (
                      <StarHalf className="w-4 h-4 fill-current" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;