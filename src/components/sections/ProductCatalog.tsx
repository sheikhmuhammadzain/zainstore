import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, ChevronDown, Star, Heart, Eye, Truck, CreditCard, ShoppingCart, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  gender: 'men' | 'women' | 'kids';
  rating?: number;
  reviews?: number;
  discount?: string;
  features?: string[];
  brand?: string;
  color?: string;
  size?: string[];
}

interface ProductCatalogProps {
  defaultCategory: 'men' | 'women' | 'kids';
}

interface FilterState {
  priceRange: [number, number];
  brands: string[];
  colors: string[];
  sizes: string[];
  rating: number | null;
}

const initialFilters: FilterState = {
  priceRange: [0, 1000],
  brands: [],
  colors: [],
  sizes: [],
  rating: null,
};

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Rating', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

const products: Product[] = [
  // Men's Products
  {
    id: 'm1',
    name: 'Classic Leather Oxford',
    price: '159.99',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800',
    category: 'Formal',
    gender: 'men',
    rating: 4.8,
    reviews: 455,
    discount: '35% off',
    features: ['Fast Delivery', 'Best Price']
  },
  {
    id: 'm2',
    name: 'Sport Running Shoes',
    price: '129.99',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800',
    category: 'Athletic',
    gender: 'men',
    rating: 4.9,
    reviews: 879,
    discount: '15% off',
    features: ['Best Seller', 'Free Returns']
  },
  {
    id: 'm3',
    name: 'Casual Sneakers',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=800',
    category: 'Casual',
    gender: 'men',
    rating: 4.5,
    reviews: 200,
    discount: '20% off',
    features: ['Best Price', 'Fast Delivery']
  },
  {
    id: 'm4',
    name: 'Hiking Boots',
    price: '199.99',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=800',
    category: 'Outdoor',
    gender: 'men',
    rating: 4.7,
    reviews: 150,
    discount: '10% off',
    features: ['Best Seller', 'Free Returns']
  },
  {
    id: 'm5',
    name: 'Business Loafers',
    price: '149.99',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800',
    category: 'Formal',
    gender: 'men',
    rating: 4.6,
    reviews: 100,
    discount: '25% off',
    features: ['Fast Delivery', 'Best Price']
  },
  {
    id: 'm6',
    name: 'Basketball Shoes',
    price: '179.99',
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=800',
    category: 'Athletic',
    gender: 'men',
    rating: 4.8,
    reviews: 250,
    discount: '15% off',
    features: ['Best Seller', 'Free Returns']
  },

  // Women's Products
  {
    id: 'w1',
    name: 'Elegant Heels',
    price: '129.99',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800',
    category: 'Formal',
    gender: 'women',
    rating: 4.9,
    reviews: 500,
    discount: '20% off',
    features: ['Best Price', 'Fast Delivery']
  },
  {
    id: 'w2',
    name: 'Yoga Training Shoes',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800',
    category: 'Athletic',
    gender: 'women',
    rating: 4.7,
    reviews: 300,
    discount: '10% off',
    features: ['Best Seller', 'Free Returns']
  },
  {
    id: 'w3',
    name: 'Fashion Boots',
    price: '159.99',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800',
    category: 'Casual',
    gender: 'women',
    rating: 4.6,
    reviews: 200,
    discount: '25% off',
    features: ['Fast Delivery', 'Best Price']
  },
  {
    id: 'w4',
    name: 'Summer Sandals',
    price: '69.99',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800',
    category: 'Casual',
    gender: 'women',
    rating: 4.5,
    reviews: 150,
    discount: '15% off',
    features: ['Best Seller', 'Free Returns']
  },
  {
    id: 'w5',
    name: 'Ballet Flats',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800',
    category: 'Casual',
    gender: 'women',
    rating: 4.8,
    reviews: 250,
    discount: '20% off',
    features: ['Fast Delivery', 'Best Price']
  },
  {
    id: 'w6',
    name: 'Running Performance',
    price: '139.99',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800',
    category: 'Athletic',
    gender: 'women',
    rating: 4.9,
    reviews: 400,
    discount: '10% off',
    features: ['Best Seller', 'Free Returns']
  },

  // Kids' Products
  {
    id: 'k1',
    name: 'Playground Sneakers',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800',
    category: 'Casual',
    gender: 'kids',
    rating: 4.7,
    reviews: 200,
    discount: '20% off',
    features: ['Fast Delivery', 'Best Price']
  },
  {
    id: 'k2',
    name: 'School Shoes',
    price: '59.99',
    image: 'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?q=80&w=800',
    category: 'Formal',
    gender: 'kids',
    rating: 4.6,
    reviews: 150,
    discount: '15% off',
    features: ['Best Seller', 'Free Returns']
  },
  {
    id: 'k3',
    name: 'Sport Trainers',
    price: '69.99',
    image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=800',
    category: 'Athletic',
    gender: 'kids',
    rating: 4.8,
    reviews: 250,
    discount: '10% off',
    features: ['Fast Delivery', 'Best Price']
  },
  {
    id: 'k4',
    name: 'Light-Up Shoes',
    price: '54.99',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800',
    category: 'Casual',
    gender: 'kids',
    rating: 4.9,
    reviews: 300,
    discount: '25% off',
    features: ['Best Seller', 'Free Returns']
  },
  {
    id: 'k5',
    name: 'Summer Sandals',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=800',
    category: 'Casual',
    gender: 'kids',
    rating: 4.7,
    reviews: 200,
    discount: '20% off',
    features: ['Fast Delivery', 'Best Price']
  },
  {
    id: 'k6',
    name: 'Winter Boots',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800',
    category: 'Outdoor',
    gender: 'kids',
    rating: 4.6,
    reviews: 150,
    discount: '15% off',
    features: ['Best Seller', 'Free Returns']
  },
];

const ProductCatalog: React.FC<ProductCatalogProps> = ({ defaultCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<'men' | 'women' | 'kids'>(defaultCategory);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const navigate = useNavigate();
  const { addToCart, items } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: parseInt(product.id),
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleWishlist = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    const productId = parseInt(product.id);
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  const handleQuickView = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/product/${productId}`);
  };

  const isInCart = (productId: string) => {
    return items.some(item => item.id === parseInt(productId));
  };

  const applyFilters = (products: Product[]) => {
    return products.filter(product => {
      const price = parseFloat(product.price);
      const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];
      const matchesBrand = filters.brands.length === 0 || (product.brand && filters.brands.includes(product.brand));
      const matchesColor = filters.colors.length === 0 || (product.color && filters.colors.includes(product.color));
      const matchesSize = filters.sizes.length === 0 || (product.size && product.size.some(s => filters.sizes.includes(s)));
      const matchesRating = !filters.rating || (product.rating && product.rating >= filters.rating);

      return matchesPrice && matchesBrand && matchesColor && matchesSize && matchesRating;
    });
  };

  const applySorting = (products: Product[]) => {
    switch (sortBy) {
      case 'price_asc':
        return [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case 'price_desc':
        return [...products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      case 'rating':
        return [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'newest':
        return [...products].reverse();
      default:
        return products;
    }
  };

  const filteredProducts = applySorting(applyFilters(products.filter(product => product.gender === selectedCategory)));

  const handleFilterChange = (filterType: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <section className="bg-white py-8 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* Breadcrumb and Header */}
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a href="#" className="inline-flex items-center text-sm font-light text-gray-700 hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                    <a href="#" className="ms-1 text-sm font-light text-gray-700 hover:text-blue-600 md:ms-2">Products</a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                    <span className="ms-1 text-sm font-light text-gray-500 md:ms-2">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h2 className="mt-3 text-xl font-light tracking-wider text-gray-900 sm:text-2xl">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}'s Collection</h2>
          </div>

          <div className="flex items-center space-x-4">
            <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-light text-gray-700 hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:w-auto" onClick={() => setIsFilterOpen(true)}>
              <Filter className="me-2 h-4 w-4" />
              Filters
              <ChevronDown className="ms-2 h-4 w-4" />
            </button>
            <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-light text-gray-700 hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:w-auto" onClick={() => setIsSortOpen(true)}>
              Sort
              <ChevronDown className="ms-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Filters Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-40 w-full max-w-xs transform bg-white p-6 transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-light tracking-wider">Filters</h3>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="text-sm font-light tracking-wider mb-4">Price Range</h4>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <span className="text-sm font-light">${filters.priceRange[1]}</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-light tracking-wider mb-4">Rating</h4>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleFilterChange('rating', rating)}
                  className={`flex items-center space-x-2 w-full p-2 rounded ${
                    filters.rating === rating ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < rating ? 'text-yellow-400' : 'text-gray-200'
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-light">& Up</span>
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className="w-full py-2 text-sm font-light tracking-wider text-blue-600 hover:bg-blue-50 rounded"
          >
            Clear All Filters
          </button>
        </div>

        {/* Sort Dropdown */}
        {isSortOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value);
                    setIsSortOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-sm font-light text-left ${
                    sortBy === option.value
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="mb-4 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Product Image */}
              <div 
                className="relative h-56 w-full overflow-hidden rounded-lg cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>

              {/* Product Details */}
              <div className="pt-6">
                {/* Discount and Actions */}
                <div className="mb-4 flex items-center justify-between gap-4">
                  {product.discount && (
                    <span className="rounded bg-blue-50 px-2.5 py-0.5 text-xs font-light text-blue-700">
                      {product.discount}
                    </span>
                  )}

                  <div className="flex items-center justify-end gap-2">
                    <button 
                      type="button" 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button 
                      type="button"
                      onClick={(e) => handleWishlist(product, e)}
                      className={`rounded-lg p-2 ${
                        isInWishlist(parseInt(product.id))
                          ? 'text-red-500 hover:bg-red-50'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-red-500'
                      }`}
                    >
                      <Heart className="h-5 w-5" fill={isInWishlist(parseInt(product.id)) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>

                <div 
                  className="cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <h3 className="mb-2 text-lg font-light">{product.name}</h3>
                  <p className="text-gray-600 font-light">${product.price}</p>
                </div>

                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className={`mt-4 w-full rounded-lg py-2.5 text-sm font-light tracking-wider transition-colors ${
                    isInCart(product.id)
                      ? 'bg-gray-100 text-gray-600'
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  {isInCart(product.id) ? 'IN CART' : 'ADD TO CART'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;