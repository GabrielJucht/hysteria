import React from 'react';
import './Main.scss';
import hero from '../images/cover.png';


const main = (props) => {
  return <div className="container main">
          <div className="row">
          <img src={hero} alt=""/>
          <div className="hero-text">
            <h1>Exo and the<br />Pyramids of Chaos</h1>
            <p>Exo travels to a strange place call Earth to find the artifacts that can save his planet from extinction.</p>
          </div>
         </div>
         </div>
         
}


export default main;