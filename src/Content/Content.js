import React from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import './Content.scss';
import About from '../About/About.js';
import Games from '../Games/Games.js';
import Contact from '../Contact/Contact.js';
import Main from '../Main/Main.js';

const content = (props) => {
  return (
  <HashRouter>
  <div className="container">
    <div className="row">
      <Route path="/index" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/games" component={Games}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </div>
  </HashRouter> );   
}

export default content;