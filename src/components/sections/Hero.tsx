import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Main Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/7667955/7667955-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.2em]">
              ZAIN STORE
            </h1>
            <p className="text-lg md:text-xl font-extralight tracking-[0.15em] max-w-2xl mx-auto">
              ELEVATE YOUR STYLE WITH LUXURY FOOTWEAR
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/collections"
                className="px-8 py-3 border border-white text-sm font-extralight tracking-[0.1em] hover:bg-white hover:text-black transition-colors"
              >
                EXPLORE COLLECTIONS
              </Link>
              <Link
                to="/products"
                className="px-8 py-3 bg-white text-black text-sm font-extralight tracking-[0.1em] hover:bg-gray-100 transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extralight tracking-[0.2em] mb-4">
              CATEGORIES
            </h2>
            <p className="text-sm font-extralight tracking-wider text-gray-500">
              DISCOVER OUR CURATED COLLECTION OF LUXURY FOOTWEAR
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-extralight tracking-[0.2em] mb-2">
                      {category.name}
                    </h3>
                    <span className="inline-block w-8 h-px bg-white mb-2"></span>
                    <p className="text-sm font-extralight tracking-wider">
                      EXPLORE
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Product */}
      <div className="relative py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-extralight tracking-[0.2em]">
                SIGNATURE COLLECTION
              </h2>
              <p className="text-sm font-extralight tracking-wider text-gray-300 max-w-lg">
                Introducing our most prestigious line of footwear, crafted with
                the finest materials and unparalleled attention to detail. Each
                piece is a masterwork of design and comfort.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-white"></span>
                  <p className="text-sm font-extralight tracking-wider">
                    Premium Italian Leather
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-white"></span>
                  <p className="text-sm font-extralight tracking-wider">
                    Hand-Crafted Excellence
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-white"></span>
                  <p className="text-sm font-extralight tracking-wider">
                    Timeless Design
                  </p>
                </div>
              </div>
              <Link
                to="/collections/signature"
                className="inline-block px-8 py-3 border border-white text-sm font-extralight tracking-[0.1em] hover:bg-white hover:text-black transition-colors"
              >
                DISCOVER MORE
              </Link>
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
                alt="Signature Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
            alt="Newsletter background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-extralight tracking-[0.2em] mb-4">
              JOIN OUR NEWSLETTER
            </h2>
            <p className="text-sm font-extralight tracking-wider mb-8">
              BE THE FIRST TO KNOW ABOUT NEW COLLECTIONS AND EXCLUSIVE OFFERS
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-black text-sm font-extralight tracking-wider focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black text-sm font-extralight tracking-[0.1em] hover:bg-gray-100 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    name: "FORMAL",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=2070&auto=format&fit=crop",
    link: "/collections/formal",
  },
  {
    name: "CASUAL",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
    link: "/collections/casual",
  },
  {
    name: "ATHLETIC",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2000&auto=format&fit=crop",
    link: "/collections/athletic",
  },
];

export default Hero;
