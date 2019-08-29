import React from 'react';
import './About.scss';
import image from '../images/about.jpg';


const about = (props) => {
  return <div className="container about">
          <div className="row">
            <div className="col-sm-4">
              <img src={image} alt=""/>
            </div>
            <div className="texto col-sm-8">
                <p>When you work as a programmer and love videogames is only a small step that make you try to make one of your own. We love story driven games so this turns to be our goal. To create indie games with cool stories and memorable characters. </p>
            </div>
         </div>
         </div>
         
      
      
      
         
}


export default about;