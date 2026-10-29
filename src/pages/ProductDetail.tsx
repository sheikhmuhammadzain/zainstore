import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share2, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import RelatedProducts from '../components/sections/RelatedProducts';
import ProductReviews from '../components/sections/ProductReviews';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Product Not Found</h2>
          <p className="text-gray-500 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart({
      id: parseInt(product.id),
      name: product.name,
      price: product.sale ? product.salePrice!.toString() : product.price.toString(),
      image: product.images[0],
      quantity
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex text-sm">
          <button onClick={() => navigate('/')} className="text-gray-500 hover:text-gray-900">
            Home
          </button>
          <span className="mx-2 text-gray-400">/</span>
          <button onClick={() => navigate(`/${product.category.toLowerCase()}`)} className="text-gray-500 hover:text-gray-900">
            {product.category}
          </button>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Product Images */}
          <div className="space-y-8">
            <div className="relative aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.new && (
                <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs uppercase tracking-wider">
                  New
                </span>
              )}
              {product.sale && (
                <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs uppercase tracking-wider">
                  Sale
                </span>
              )}
              {product.images.length > 1 && (
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-black' : 'hover:opacity-75'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                {product.sale ? (
                  <>
                    <span className="text-2xl text-red-600 font-medium">
                      ${product.salePrice?.toFixed(2)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
                <button className="text-sm text-gray-600 underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-900 border border-gray-200 hover:border-black'
                    } transition-colors duration-200`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center space-x-4 border border-gray-200 w-32 rounded-md">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-2 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-2 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-6 gap-4">
              <button
                onClick={handleAddToCart}
                className="col-span-4 flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 hover:bg-black/90 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className="col-span-1 flex items-center justify-center border border-gray-200 p-3 hover:border-black transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${isWishlist ? 'fill-red-500 stroke-red-500' : ''}`}
                />
              </button>
              <button className="col-span-1 flex items-center justify-center border border-gray-200 p-3 hover:border-black transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t pt-8 space-y-6">
              {/* Features */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Features</h3>
                <ul className="list-disc pl-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Materials</h3>
                <ul className="list-disc pl-4 space-y-2">
                  {product.materials.map((material, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Care Instructions */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Care Instructions</h3>
                <ul className="list-disc pl-4 space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts currentProductId={product.id} category={product.category} />

      {/* Product Reviews Section */}
      <ProductReviews productId={product.id} />
    </div>
  );
};

export default ProductDetail;
