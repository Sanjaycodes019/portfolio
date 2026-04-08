import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--bg-primary)]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-crimson-200 border-t-crimson-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
