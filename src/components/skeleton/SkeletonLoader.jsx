import React from 'react';
import './SkeletonLoader.css'; // Import the CSS file for the skeleton loader

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader bg-white shadow-md rounded-lg p-4">
      <div className="skeleton-image bg-gray-300 mb-4 rounded"></div>
      <div className="skeleton-title bg-gray-300 h-6 mb-2 rounded"></div>
      <div className="skeleton-price bg-gray-300 h-4 mb-2 rounded"></div>
      <div className="skeleton-button bg-gray-300 h-10 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
