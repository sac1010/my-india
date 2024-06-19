import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Welcome to our E-commerce Platform</h2>
      <Link to="/products" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
        View Products
      </Link>
    </div>
  );
};

export default Home;
