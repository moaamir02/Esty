import React from 'react';
import { cardData } from '../../Constant'; // Importing card data from constants

const CardComponent = () => {
  return (
    // Main container for the card component with padding and margin
    <div className="container mx-auto py-6 mt-[90px]">
      {/* Grid layout for responsive design, adjusting columns based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Mapping through the card data to generate each card */}
        {cardData.map((card) => (
          <div key={card.id} className="p-2"> {/* Unique key for each card */}
            {/* Image section of the card */}
            <img
              src={card.image} // Source of the card image
              alt={card.title} // Alt text for accessibility
              className="w-full h-72 object-cover mb-2 rounded-lg border border-gray-300" // Styling for the image
            />
            {/* Title of the card */}
            <h2 className="text-sm font-semibold mb-1 truncate">{card.title}</h2>
            {/* Price section of the card */}
            <div className="text-gray-700 mb-1">
              <span className="font-bold">{card.price}</span> {/* Displaying the price */}
              {/* Displaying the original price with line-through if it exists */}
              {card.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  {card.originalPrice}
                </span>
              )}
              {/* Displaying the discount if it exists */}
              {card.discount && (
                <span className="text-red-500 ml-2">{card.discount}</span>
              )}
            </div>
            {/* Rating and reviews section */}
            <div className="flex items-center text-yellow-500 mb-1">
              {/* Displaying the "Best Seller" badge if applicable */}
              {card.bestSeller && (
                <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-lg inline-block mr-2">
                  Best Seller
                </div>
              )}
              {/* Displaying the rating */}
              <span>{card.rating} ⭐</span>
              {/* Displaying the number of reviews */}
              <span className="text-gray-500 ml-2">({card.reviews})</span>
            </div>
            {/* Additional badge if it exists */}
            {card.badge && (
              <div className="text-xs text-purple-800 px-2 py-1 rounded-lg inline-block mb-1">
                {card.badge}
              </div>
            )}
            {/* Advertiser information */}
            <div className="text-xs text-gray-600">Ad by {card.adBy}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
