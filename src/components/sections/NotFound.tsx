import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-light tracking-widest text-black/90 mb-4">404</h1>
        <h2 className="text-2xl font-light tracking-wider text-black/80 mb-6">Page Not Found</h2>
        <p className="text-gray-600 font-light tracking-wide mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-light tracking-wider text-sm hover:bg-black/90 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
