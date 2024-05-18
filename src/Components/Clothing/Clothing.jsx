

// import React, { useState } from "react";
// import { ClothingData } from '../../Constant'; // Assuming ClothingData holds clothing items
// import ClothingCard from "./ClothingCard";
// import "../Accessories/Accessories.css";


// const Clothing = () => {
//     const [showMore, setShowMore] = useState(false);
//     const imagesPerPage = 6;
  
//     const handleShowMore = () => {
//       setShowMore(!showMore);
//     };
  
//     const firstRowImages = ClothingData.slice(0, imagesPerPage);
//     const secondRowImages = showMore ? ClothingData.slice(imagesPerPage, imagesPerPage * 2) : [];
//     const remainingImages = showMore ? ClothingData.slice(imagesPerPage * 2) : [];
//     const remainingImagesCount = remainingImages.length;
  
//     return (
//       <div>
//         <div className="heading-para mt-8">
//           <h1 className="heading text-center text-4xl font-thin text-gray-800">Clothing</h1>
//           <p className="text-center mt-2 text-gray-700">
//           Clothing for adults and kids – we got you covered
//           </p>
//         </div>
//         <div className="container mx-auto px-4 my-12">
//           <div className="flex flex-wrap justify-center space-x-4">
//             <div className="flex flex-wrap justify-center gap-6 mb-6">
//               {firstRowImages.map((image, index) => (
//                 <div key={index} className="flex flex-col items-center mb-4 mr-4">
//                   <img 
//                     className="w-32 h-48 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80" 
//                     src={image.url} 
//                     alt={image.title} 
//                     title={image.title} 
//                   />
//                   <p className="text-center mt-2 w-32 text-gray-900 text-sm hover:underline">{image.title}</p>
//                 </div>
//               ))}
//             </div>
//             {showMore && (
//               <>
//                 <div className="flex flex-wrap justify-center gap-6 mb-6">
//                   {secondRowImages.map((image, index) => (
//                     <div key={index} className="flex flex-col items-center mb-4 mr-4">
//                       <img 
//                         className="w-32 h-48 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80" 
//                         src={image.url} 
//                         alt={image.title} 
//                         title={image.title} 
//                       />
//                       <p className="text-center mt-2 w-32 text-gray-900 text-sm hover:underline">{image.title}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-6 mb-6">
//                   {remainingImages.map((image, index) => (
//                     <div key={index} className="flex flex-col items-center mb-4 mr-4">
//                       <img 
//                         className="w-32 h-48 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80" 
//                         src={image.url} 
//                         alt={image.title} 
//                         title={image.title} 
//                       />
//                       <p className="text-center mt-2 w-32 text-gray-900 text-sm hover:underline">{image.title}</p>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="flex justify-center mt-4">
//             <button 
//               className="button"
//               onClick={handleShowMore}
//             >
//               {showMore ? "Show less" : (remainingImagesCount > 0 ? `Show more (${remainingImagesCount})` : "Show more")}
//             </button>
//           </div>

//           <ClothingCard />
//         </div>
//       </div>
//     );
//   };
// export default Clothing;








import React, { useState } from "react";
import { ClothingData } from '../../Constant'; // Assuming ClothingData holds clothing items
import ClothingCard from "./ClothingCard";
import "../Accessories/Accessories.css";

const Clothing = () => {
    // State to manage whether to show more clothing items or not
    const [showMore, setShowMore] = useState(false);
    const imagesPerPage = 6; // Number of images to show per page

    // Toggle the showMore state when the button is clicked
    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    // Get the first set of images to display
    const firstRowImages = ClothingData.slice(0, imagesPerPage);
    // Get the second set of images if showMore is true
    const secondRowImages = showMore ? ClothingData.slice(imagesPerPage, imagesPerPage * 2) : [];
    // Get the remaining images if showMore is true
    const remainingImages = showMore ? ClothingData.slice(imagesPerPage * 2) : [];
    const remainingImagesCount = remainingImages.length; // Count of remaining images

    return (
        <div>
            {/* Heading and description */}
            <div className="heading-para mt-8">
                <h1 className="heading text-center text-4xl font-thin text-gray-800">Clothing</h1>
                <p className="text-center mt-2 text-gray-700">
                    Clothing for adults and kids – we got you covered
                </p>
            </div>
            {/* Container for images */}
            <div className="container mx-auto px-4 my-12">
                <div className="flex flex-wrap justify-center space-x-4">
                    {/* First row of images */}
                    <div className="flex flex-wrap justify-center gap-6 mb-6">
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
                    {/* Show additional rows if showMore is true */}
                    {showMore && (
                        <>
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
                {/* Show More/Show Less button */}
                <div className="flex justify-center mt-4">
                    <button 
                        className="button"
                        onClick={handleShowMore}
                    >
                        {showMore ? "Show less" : (remainingImagesCount > 0 ? `Show more (${remainingImagesCount})` : "Show more")}
                    </button>
                </div>
                {/* Additional clothing card component */}
                <ClothingCard />
            </div>
        </div>
    );
};

export default Clothing;
