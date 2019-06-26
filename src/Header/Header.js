import React from 'react';
import './Header.scss';

const header = (props) => {
  return <header>
    <div className="container">
      <div className="row">
           <a className="logo col-lg-2" href="#">HYSTERIA</a> 
           <nav className="col-lg-10">
             <ul>
               <li><a href="#">About us</a></li>
               <li><a href="#">Game<span>s</span></a>
               <ul><li><a href="#">Exo and the Pyramids of Chaos</a></li></ul>
               </li>
               <li><a href="#">Contact</a></li>
             </ul>
           </nav>
      </div>
    </div>
      </header>
         
}

export default header;