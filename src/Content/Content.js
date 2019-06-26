import React from 'react';
import './Content.scss';
import About from '../About/About.js';

const content = (props) => {
  return <div class="container">
    <div class="row">
      <About />
    </div>
  </div>
         
}

export default content;