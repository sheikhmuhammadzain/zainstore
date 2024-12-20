import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 font-light tracking-wide">Product not found</p>
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
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-sm font-light tracking-wide flex items-center hover:text-gray-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 bg-gray-50">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="object-cover object-center w-full h-full"
              />
              {product.new && (
                <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-light tracking-wider">
                  New
                </span>
              )}
              {product.sale && (
                <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-light tracking-wider">
                  Sale
                </span>
              )}
            </div>
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
            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-4 space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 border-2 ${
                    currentImageIndex === index ? 'border-black' : 'border-transparent'
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

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-light tracking-wider mb-4">{product.name}</h1>
              <div className="mb-4">
                {product.sale ? (
                  <div className="space-x-2">
                    <span className="text-2xl text-red-600 font-light">${product.salePrice?.toFixed(2)}</span>
                    <span className="text-xl text-gray-500 line-through font-light">${product.price.toFixed(2)}</span>
                  </div>
                ) : (
                  <span className="text-2xl font-light">${product.price.toFixed(2)}</span>
                )}
              </div>
              <p className="text-gray-600 font-light tracking-wide">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-light tracking-wider mb-4">Select Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-sm font-light tracking-wide border ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-sm font-light tracking-wider mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-light w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full px-6 py-3 bg-black text-white font-light tracking-wider text-sm hover:bg-black/90 transition-colors"
            >
              Add to Cart
            </button>

            {/* Product Details */}
            <div className="space-y-6 pt-8 border-t">
              {/* Features */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">Features</h3>
                <ul className="list-disc pl-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm font-light tracking-wide text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">Materials</h3>
                <ul className="list-disc pl-4 space-y-2">
                  {product.materials.map((material, index) => (
                    <li key={index} className="text-sm font-light tracking-wide text-gray-600">
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Care Instructions */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">Care Instructions</h3>
                <ul className="list-disc pl-4 space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="text-sm font-light tracking-wide text-gray-600">
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
