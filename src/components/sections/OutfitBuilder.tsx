import React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { products } from '@/data/products';

const OutfitBuilder = () => {
  return (
    <Section 
      title="Outfit Builder"
      description="Create your perfect look by matching our shoes with suggested outfits"
      className="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Shoe Selection */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Select Your Shoes</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>All</Button>
              {['Formal', 'Casual', 'Sport'].map(category => (
                <Button key={category} variant="outline">{category}</Button>
              ))}
            </div>

            <div className="space-y-4 h-[500px] overflow-y-auto">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded-xl cursor-pointer hover:shadow-md transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-40 w-full object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Panel - Outfit Preview */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Outfit Preview</h3>
          <div className="h-[500px] bg-white rounded-xl p-4 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto"></div>
              <p className="text-gray-500">Select items to preview your outfit</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <Button>Save Outfit</Button>
            <Button variant="outline">Reset</Button>
          </div>
        </div>

        {/* Right Panel - Suggested Combinations */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Suggested Combinations</h3>
          <div className="space-y-4">
            {['Business Casual', 'Weekend Casual', 'Sport Luxe'].map((style) => (
              <div key={style} className="bg-white p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-medium mb-2">{style}</h4>
                <div className="flex items-center space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OutfitBuilder;