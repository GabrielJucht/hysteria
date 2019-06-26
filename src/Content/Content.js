import React from 'react';
import './Content.scss';
import About from '../About/About.js';

const content = (props) => {
  return <div className="container">
    <div className="row">
      <About />
    </div>
  </div>
         
}

export default content;