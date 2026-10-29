import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

interface ProductReviewsProps {
  productId: string;
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    rating: 5,
    date: '2024-01-15',
    title: 'Perfect fit and super comfortable',
    content: 'These shoes exceeded my expectations. The comfort level is amazing, and they look even better in person. Ihave been wearing them for both casual and semi-formal occasions.',
    verified: true,
  },
  {
    id: '2',
    author: 'Michael Chen',
    rating: 4,
    date: '2024-01-10',
    title: 'Great quality, slight break-in period',
    content: 'The quality of these shoes is excellent. They required a short break-in period, but after that, they became very comfortable. The style is exactly as pictured.',
    verified: true,
  },
  {
    id: '3',
    author: 'Emma Wilson',
    rating: 5,
    date: '2024-01-05',
    title: 'Stylish and durable',
    content: 'I have had these shoes for a month now and they still look brand new despite regular wear. The attention to detail in the craftsmanship is impressive.',
    verified: true,
  },
];

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const averageRating = mockReviews.reduce((acc, review) => acc + review.rating, 0) / mockReviews.length;
  const displayedReviews = showAllReviews ? mockReviews : mockReviews.slice(0, 2);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t pt-8">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Customer Reviews</h2>
          
          {/* Reviews Summary */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center">
              {renderStars(Math.round(averageRating))}
            </div>
            <span className="text-lg font-medium">
              {averageRating.toFixed(1)} out of 5
            </span>
            <span className="text-gray-500">
              Based on {mockReviews.length} reviews
            </span>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-8">
            {displayedReviews.map((review) => (
              <div key={review.id} className="border-b pb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <span className="text-xs text-green-600 border border-green-600 px-2 py-0.5 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium mb-2">{review.title}</h3>
                <p className="text-gray-600">{review.content}</p>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {mockReviews.length > 2 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="text-sm font-medium text-gray-900 underline"
              >
                {showAllReviews ? 'Show Less Reviews' : 'Show All Reviews'}
              </button>
            </div>
          )}

          {/* Write Review Button */}
          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-black/90 transition-colors">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
