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
      <NavLink className="logo col-lg-2" to="/index"><img src={image} /></NavLink> 
           <nav className="col-lg-10">
             <ul>
               <li className="regular"><NavLink to="/about">About us</NavLink></li>
               <li className="hover"><NavLink to="/about">About us</NavLink></li>
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