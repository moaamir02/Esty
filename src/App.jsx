import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router, Route, and Routes from react-router-dom
import Accessories from './Components/Accessories/Accessories'; // Importing Accessories component
import ArtCollectibles from './Components/Art & Collectibles/ArtCollectibles.jsx'; // Importing ArtCollectibles component
import Clothing from './Components/Clothing/Clothing.jsx'; // Importing Clothing component

function App() {
  return (
    <Router>
      <div>
        {/* Defining routes for different components */}
        <Routes>
          <Route path="/accessories" element={<Accessories />} /> {/* Route for Accessories component */}
          <Route path="/art-collectibles" element={<ArtCollectibles />} /> {/* Route for ArtCollectibles component */}
          <Route path="/clothing" element={<Clothing />} /> {/* Route for Clothing component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
