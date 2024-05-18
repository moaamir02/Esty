import React, { useState } from "react";
import "../Accessories/Accessories.css"; // Importing the CSS file for styling
import { Art_CollectiblesData } from '../../Constant'; // Importing the data for Art & Collectibles
// import CardComponent from "../Accessories/CardComponent"; // (Commented out) Importing a card component
import Card from './Card.jsx'; // Importing the Card component

const ArtCollectibles = () => {
    const [showMore, setShowMore] = useState(false); // State to handle the "show more" functionality
    const imagesPerPage = 6; // Number of images to display per page

    // Function to toggle the "show more" state
    const handleShowMore = () => {
      setShowMore(!showMore);
    };

    // Slicing the data to get the images for the first row
    const firstRowImages = Art_CollectiblesData.slice(0, imagesPerPage);
    // Slicing the data to get the images for the second row if showMore is true
    const secondRowImages = showMore ? Art_CollectiblesData.slice(imagesPerPage, imagesPerPage * 2) : [];
    // Slicing the data to get the remaining images if showMore is true
    const remainingImages = showMore ? Art_CollectiblesData.slice(imagesPerPage * 2) : [];
    const remainingImagesCount = remainingImages.length; // Counting the remaining images

    return (
      <div>
        {/* Section for heading and description */}
        <div className="heading-para mt-8">
          <h1 className="heading text-center text-4xl font-thin text-gray-800">Art & Collectibles</h1>
          <p className="text-center mt-2 text-gray-700">
            Custom artwork, portraits, and totally original paintings and prints to turn your home into a gallery
          </p>
        </div>
        <div className="container mx-auto px-4 my-12">
          {/* Container for the images */}
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {/* Displaying the first row of images */}
              {firstRowImages.map((image, index) => (
                <div key={index} className="flex flex-col items-center mb-4 mr-4">
                  <img 
                    className="w-32 h-48 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80" 
                    src={image.url} 
                    alt={image.title} 
                    title={image.title} 
                  />
                  <p className="text-center mt-2 w-32 text-gray-900 text-sm hover:underline">{image.title}</p>
                </div>
              ))}
            </div>
            {showMore && (
              <>
                {/* Displaying the second row of images if showMore is true */}
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                  {secondRowImages.map((image, index) => (
                    <div key={index} className="flex flex-col items-center mb-4 mr-4">
                      <img 
                        className="w-32 h-48 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80" 
                        src={image.url} 
                        alt={image.title} 
                        title={image.title} 
                      />
                      <p className="text-center mt-2 w-32 text-gray-900 text-sm hover:underline">{image.title}</p>
                    </div>
                  ))}
                </div>
                {/* Displaying the remaining images if showMore is true */}
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                  {remainingImages.map((image, index) => (
                    <div key={index} className="flex flex-col items-center mb-4 mr-4">
                      <img 
                        className="w-32 h-48 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80" 
                        src={image.url} 
                        alt={image.title} 
                        title={image.title} 
                      />
                      <p className="text-center mt-2 w-32 text-gray-900 text-sm hover:underline">{image.title}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Button to toggle the display of more images */}
          <div className="flex justify-center mt-4">
            <button 
              className="button"
              onClick={handleShowMore}
            >
              {showMore ? "Show less" : (remainingImagesCount > 0 ? `Show more (${remainingImagesCount})` : "Show more")}
            </button>
          </div>

          {/* Rendering the Card component */}
          <Card />
        </div>
      </div>
    );
};

export default ArtCollectibles;
