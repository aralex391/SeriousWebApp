import React from 'react';

import Carousel from './HomeComponents/Carousel';
import './HomePage.css';

function HomePage(props) {
  return (
    <div className="HomePage col-12">
      <div className="col-1">
        <p>css</p>
      </div>
      <div className="HomeContent col-10">
        <Carousel query="Fruit" />
      </div>
      <div className="col-1">
        <p>css</p>
      </div>
    </div>
  );
}

export default HomePage;
