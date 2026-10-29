import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId, category }) => {
  const navigate = useNavigate();

  const relatedProducts = products
    .filter(p => p.category === category && p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-light text-gray-900 mb-8">You May Also Like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {product.new && (
                  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs uppercase tracking-wider">
                    New
                  </span>
                )}
                {product.sale && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs uppercase tracking-wider">
                    Sale
                  </span>
                )}
              </div>
              
              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-black/70 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  {product.sale ? (
                    <>
                      <span className="text-sm font-medium text-red-600">
                        ${product.salePrice?.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-medium text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
