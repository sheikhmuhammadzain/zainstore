import React from 'react';

const Hero = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[calc(100vh-4rem)]">
        <div className="flex-1 text-center md:text-left space-y-6 py-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
            Step into Luxury<br/>
            Walk in Style
          </h2>
          <p className="text-xl text-gray-600 max-w-lg animate-fade-in-up delay-200">
            Discover our exclusive collection of premium footwear designed for the modern fashion enthusiast.
          </p>
          <div className="space-x-4 animate-fade-in-up delay-300">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300">
              Shop Now
            </button>
            <button className="border border-black px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              View Collection
            </button>
          </div>
        </div>
        <div className="flex-1 relative h-[500px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80"
            alt="Premium Footwear"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl animate-fade-in-up delay-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;