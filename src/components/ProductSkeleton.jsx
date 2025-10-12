import React from "react";

export const ProductSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl shadow-md bg-gray-200 p-4">
      <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};
