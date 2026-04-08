import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        keywords="404, not found, error"
      />
      <div className="min-h-screen flex items-center justify-center bg-[color:var(--bg-primary)]">
        <div className="text-center p-8 max-w-md">
          <div className="w-32 h-32 bg-gradient-to-br from-crimson-100 to-blue-100 dark:from-crimson-900/20 dark:to-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl font-bold text-crimson-600 dark:text-crimson-400">404</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-crimson-600 hover:bg-crimson-700 text-white rounded-lg font-medium transition-colors"
            >
              Go Home
            </Link>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Or try searching for what you need
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
