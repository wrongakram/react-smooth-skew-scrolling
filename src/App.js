import React from "react";
import "./App.scss";

import images from "./images/images";

function App() {
  return (
    <div className='App'>
      <div className='scroll'>
        {images.map((image, index) => (
          <>
            <div key={index} className='img-container'>
              <img src={image} alt={`people ${index}`} />
            </div>
            <h2>
              Skew <span className='outline'>Scrolling</span>
            </h2>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
