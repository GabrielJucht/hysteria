import React from 'react';
import './Main.scss';
import hero from '../images/hero.jpg';


const main = (props) => {
  return <div className="container main">
          <div className="row">
          <img src={hero} alt=""/>
          <div className="hero-text">
            <h1>Exo and the<br /> Pyramids of Chaos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim risus, viverra eu facilisis sit amet, volutpat ac nisl. Suspendisse potenti. </p>
          </div>
         </div>
         </div>
         
      
      
      
         
}


export default main;