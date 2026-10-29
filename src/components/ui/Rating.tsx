import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingProps {
  value: number;
  size?: number;
}

const Rating = ({ value, size = 4 }: RatingProps) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(Math.floor(value))].map((_, i) => (
        <Star key={i} className={`w-${size} h-${size} fill-current`} />
      ))}
      {value % 1 !== 0 && (
        <StarHalf className={`w-${size} h-${size} fill-current`} />
      )}
    </div>
  );
};

export default Rating;