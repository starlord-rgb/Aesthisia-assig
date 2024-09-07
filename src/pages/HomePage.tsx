import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0c1015]">
      <Link 
        to="/services/new"
        className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
      >
        Create New Service
      </Link>
    </div>
  );
};

export default HomePage;
