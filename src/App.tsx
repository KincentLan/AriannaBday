import React from 'react';

import './App.css';

import Introduction from './Introduction';
import ImageCarousel from './ImageCarousel';

import background from "./img/family-jie-jie.jpg";


function App() {
  return (
    <div className="App">
      <div className="Introduction" style={{ backgroundImage: `url(${background})` }}>
        <Introduction/>
      </div>
      <div className="Images">
          <ImageCarousel/>
      </div>
    </div>
  );
}

export default App;
