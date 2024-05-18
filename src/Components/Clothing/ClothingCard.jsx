

import React from 'react';
import { Cloth_Product } from '../../Constant'; // Assuming Cloth_Product holds the product data

const ClothingCard = () => {
  return (
    <div className="container mx-auto py-6 mt-[90px]">
      {/* Grid container for clothing cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Map through Cloth_Product to create a card for each product */}
        {Cloth_Product.map((card) => (
          <div key={card.id} className="p-2">
            {/* Product image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-72 object-cover mb-2 rounded-lg border border-gray-300"
            />
            {/* Product title */}
            <h2 className="text-sm font-semibold mb-1 truncate">{card.title}</h2>
            {/* Product price and optional original price and discount */}
            <div className="text-gray-700 mb-1">
              <span className="font-bold">{card.price}</span>
              {card.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  {card.originalPrice}
                </span>
              )}
              {card.discount && (
                <span className="text-red-500 ml-2">{card.discount}</span>
              )}
            </div>
            {/* Best seller badge and product rating */}
            <div className="flex items-center text-yellow-500 mb-1">
              {card.bestSeller && (
                <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-lg inline-block mr-2">
                  Best Seller
                </div>
              )}
              <span>{card.rating} ⭐</span>
              <span className="text-gray-500 ml-2">({card.reviews})</span>
            </div>
            {/* Optional badge for the product */}
            {card.badge && (
              <div className="text-xs text-purple-800 px-2 py-1 rounded-lg inline-block mb-1">
                {card.badge}
              </div>
            )}
            {/* Advertisement by information */}
            <div className="text-xs text-gray-600">Ad by {card.adBy}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingCard;
