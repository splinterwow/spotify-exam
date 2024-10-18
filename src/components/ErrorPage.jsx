import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-4xl mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        The page you're looking for doesn't exist. Please check the URL or return home.
      </p>
      <Link to="/" className="mt-6 flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
        <ArrowLeft className="mr-2" />
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
