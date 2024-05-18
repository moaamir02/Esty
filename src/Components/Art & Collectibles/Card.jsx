import React from 'react';
import { products } from '../../Constant'; // Importing the products array from a constants file

const Card = () => {
  return (
    // Container for the entire card component with margin and padding
    <div className="container mx-auto py-6 mt-[90px]">
      {/* Grid layout for responsive design, changing the number of columns based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Mapping through the products array to generate a card for each product */}
        {products.map((product) => (
          <div key={product.id} className="p-2"> {/* Unique key for each product */}
            <img
              src={product.image} // Product image source
              alt={product.title} // Alt text for the image
              className="w-full h-72 object-cover mb-2 rounded-lg border border-gray-300" // Styling for the image
            />
            <h2 className="text-sm font-semibold mb-1 truncate">{product.title}</h2> {/* Product title */}
            <div className="text-gray-700 mb-1">
              <span className="font-bold">{product.price}</span> {/* Product price */}
              {/* Original price with a line-through style if it exists */}
              {product.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  {product.originalPrice}
                </span>
              )}
              {/* Discount information if it exists */}
              {product.discount && (
                <span className="text-red-500 ml-2">{product.discount}</span>
              )}
            </div>
            <div className="flex items-center text-yellow-500 mb-1">
              {/* Best seller badge if the product is a best seller */}
              {product.bestSeller && (
                <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-lg inline-block mr-2">
                  Best Seller
                </div>
              )}
              <span>{product.rating} ⭐</span> {/* Product rating */}
              <span className="text-gray-500 ml-2">({product.reviews})</span> {/* Number of reviews */}
            </div>
            {/* Additional badge if it exists */}
            {product.badge && (
              <div className="text-xs text-purple-800 px-2 py-1 rounded-lg inline-block mb-1">
                {product.badge}
              </div>
            )}
            <div className="text-xs text-gray-600">Ad by {product.adBy}</div> {/* Advertiser information */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
