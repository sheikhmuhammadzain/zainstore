import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Casual Collection',
    description: 'Comfortable and stylish shoes for everyday wear',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80'
  },
  {
    title: 'Formal Collection',
    description: 'Elegant shoes for special occasions',
    image: 'https://images.unsplash.com/photo-1478186510433-7draaf7d4647?auto=format&fit=crop&q=80'
  },
  {
    title: 'Athletic Collection',
    description: 'Performance shoes for active lifestyles',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80'
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our curated collections of premium footwear, designed for style and comfort</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 relative">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-2">{collection.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {collection.description}
                </p>
                <button className="mt-4 px-6 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-100 transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors duration-300">
            View All Collections
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;