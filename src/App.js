import React from 'react';
import CarouselForm from './carousel_form.js'
import './App.css';
import Carousel from './carousel.js';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <section className="section">
      <div className="container">
        <Carousel />
      </div>
      </section>
      <section className="section">
      <div className="container">
        <CarouselForm />
      </div>
      </section>
    </div>
  );
}

export default App;
