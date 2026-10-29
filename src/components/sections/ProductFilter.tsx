import React from 'react';
import { X } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface ProductFilterProps {
  selectedCategory: string;
  selectedType: string;
  selectedColor: string;
  minPrice: number;
  maxPrice: number;
  onFilterChange: (filterType: string, value: string | number) => void;
  onClearFilters: () => void;
}

const typeOptions: FilterOption[] = [
  { label: 'All Types', value: '' },
  { label: 'Dress Shoes', value: 'dress' },
  { label: 'Loafers', value: 'loafer' },
  { label: 'Athletic', value: 'athletic' },
  { label: 'Heels', value: 'heels' },
  { label: 'Flats', value: 'flats' },
  { label: 'Sneakers', value: 'sneakers' },
  { label: 'School Shoes', value: 'school' },
  { label: 'Sandals', value: 'sandals' },
];

const colorOptions: FilterOption[] = [
  { label: 'All Colors', value: '' },
  { label: 'Black', value: 'black' },
  { label: 'Brown', value: 'brown' },
  { label: 'Blue', value: 'blue' },
  { label: 'Red', value: 'red' },
  { label: 'White', value: 'white' },
  { label: 'Nude', value: 'nude' },
  { label: 'Multi', value: 'multi' },
  { label: 'Navy', value: 'navy' },
];

const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedCategory,
  selectedType,
  selectedColor,
  minPrice,
  maxPrice,
  onFilterChange,
  onClearFilters,
}) => {
  const hasActiveFilters = selectedType || selectedColor || minPrice > 0 || maxPrice < 1000;

  return (
    <div className="space-y-6 p-6 bg-white border border-gray-100">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-light tracking-wider">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm font-light text-gray-500 hover:text-black flex items-center space-x-1"
          >
            <span>Clear all</span>
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Type Filter */}
      <div>
        <h3 className="text-sm font-light tracking-wider mb-3">Type</h3>
        <div className="space-y-2">
          {typeOptions
            .filter(option => {
              if (selectedCategory === 'men') return ['', 'dress', 'loafer', 'athletic'].includes(option.value);
              if (selectedCategory === 'women') return ['', 'heels', 'flats', 'sneakers'].includes(option.value);
              if (selectedCategory === 'kids') return ['', 'sneakers', 'school', 'sandals'].includes(option.value);
              return true;
            })
            .map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value={option.value}
                  checked={selectedType === option.value}
                  onChange={(e) => onFilterChange('type', e.target.value)}
                  className="text-black focus:ring-black"
                />
                <span className="text-sm font-light">{option.label}</span>
              </label>
            ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-sm font-light tracking-wider mb-3">Color</h3>
        <div className="space-y-2">
          {colorOptions.map((option) => (
            <label key={option.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="color"
                value={option.value}
                checked={selectedColor === option.value}
                onChange={(e) => onFilterChange('color', e.target.value)}
                className="text-black focus:ring-black"
              />
              <span className="text-sm font-light">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-sm font-light tracking-wider mb-3">Price Range</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-light">Min Price</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={minPrice}
              onChange={(e) => onFilterChange('minPrice', parseInt(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-light">${minPrice}</span>
          </div>
          <div>
            <label className="text-sm font-light">Max Price</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={maxPrice}
              onChange={(e) => onFilterChange('maxPrice', parseInt(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-light">${maxPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
