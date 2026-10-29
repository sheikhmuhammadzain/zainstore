import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import Rating from '../ui/Rating';

interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  image: string;
}

const ProductCard = ({ name, price, rating, image }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image}
          alt={name}
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
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></div>
          <div className="w-4 h-4 rounded-full bg-brown-500 border-2 border-gray-300"></div>
          <div className="w-4 h-4 rounded-full bg-gray-500 border-2 border-gray-300"></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">${price}</p>
          <Rating value={rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;