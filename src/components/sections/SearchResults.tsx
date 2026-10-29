import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

const SearchResults: React.FC = () => {
  const { searchResults, isSearching, clearSearch } = useSearch();
  const navigate = useNavigate();

  if (!isSearching) return null;

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`, { replace: true });
    clearSearch();
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-2 max-h-96 overflow-y-auto z-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-light text-gray-500">
            {searchResults.length} results found
          </h3>
          <button
            onClick={clearSearch}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {searchResults.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 font-light">No results found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-light text-sm">{product.name}</h4>
                  <p className="text-gray-500 text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
