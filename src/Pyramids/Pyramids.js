import React from 'react';
import './Pyramids.scss';
import image from '../images/cover.png';


const pyramids = (props) => {
  return <div className="container pyramid">
          <div className="row">
              <div className="col-sm-4">
                <img src={image} alt=""/>
              </div>
              <div className="col-sm-8">
              <h3>Exo and the Pyramids of Chaos</h3>
              <p><span>[IN DEVELOPMENT]</span> Our first project its a platformer/adventure game.<br />
              Exo its an alien that comes to Earth to find artifacts that his race left in our planet thousands of years ago.
              Our hero will travel to pyramids all around the world where he will face odd enemies that want the artifacts for themselves. 
              </p>
              </div>
         </div>
         </div>
         
      
         
}


export default pyramids;