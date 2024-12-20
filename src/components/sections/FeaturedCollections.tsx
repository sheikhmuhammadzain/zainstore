import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    name: 'CLASSIC',
    image: 'https://images.pexels.com/photos/17543000/pexels-photo-17543000/free-photo-of-elegance-wristwatch-on-man-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Timeless designs for the modern gentleman'
  },
  {
    id: 2,
    name: 'SPORT',
    image: 'https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Performance meets style'
  },
  {
    id: 3,
    name: 'CASUAL',
    image: 'https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Everyday comfort with elevated design'
  }
];

const FeaturedCollections: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 container mx-auto">
      {collections.map((collection) => (
        <Link
          key={collection.id}
          to={`/collections`}
          className="group relative overflow-hidden"
        >
          <div className="aspect-w-3 aspect-h-4">
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-extralight tracking-[0.2em] mb-2">
              {collection.name}
            </h3>
            <p className="text-white text-sm font-extralight tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {collection.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedCollections;