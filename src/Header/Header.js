import React from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import './Header.scss';
import image from '../images/logo.png';

const header = (props) => {
  return (
  <HashRouter>
  <header>
    <div className="container">
      <div className="row">
        <div className="logo col-lg-2 col-10">
          <NavLink to="/"><img src={image} /></NavLink> 
        </div>
      <div className="burguer col-lg-2 col-2">
       <a href="javascript:void(0)"><i className="fas fa-bars"></i></a>
       <ul className="menu-mobile">
          <li className="regular"><NavLink to="/about">About us</NavLink></li>
          <li><NavLink to="/pyramids" className="regular">Game<span>s</span></NavLink></li>
          <li><NavLink to="/contact" className="regular">Contact</NavLink></li>
        </ul>
      </div>
      <nav className="col-lg-10">
             <ul>
               <li className="regular"><NavLink to="/about">About us</NavLink></li>
               <li><NavLink to="/pyramids" className="regular">Game<span>s</span></NavLink>
               <ul><li><NavLink to="/pyramids">Exo and the Pyramids of Chaos</NavLink></li></ul>
               </li>
               <li><NavLink to="/contact" className="regular">Contact</NavLink></li>
             </ul>
           </nav> 
      </div>
      </div>
      </header>
  </HashRouter> );
         
}

export default header;


