import React from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import './Header.scss';

const header = (props) => {
  return (
  <HashRouter>
  <header>
    <div className="container">
      <div className="row">
      <NavLink className="logo col-lg-2" to="/index">HYSTERIA</NavLink> 
           <nav className="col-lg-10">
             <ul>
               <li><NavLink to="/about">About us</NavLink></li>
               <li><NavLink to="/games">Game<span>s</span></NavLink>
               <ul><li><NavLink to="/pyramids">Exo and the Pyramids of Chaos</NavLink></li></ul>
               </li>
               <li><NavLink to="/contact">Contact</NavLink></li>
             </ul>
           </nav>
      </div>
    </div>
      </header>
  </HashRouter> );
         
}

export default header;