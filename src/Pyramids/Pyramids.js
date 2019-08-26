import React from 'react';
import './Pyramids.scss';
import image from '../images/cover.png';


const pyramids = (props) => {
  return <div className="container pyramid">
          <div className="row">
              <div class="col-sm-4">
                <img src={image} alt=""/>
              </div>
              <div class="col-sm-8">
              <h3>Exo and the Pyramids of Chaos</h3>
              <p>[IN DEVELOPMENT] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim risus, viverra eu facilisis sit amet, volutpat ac nisl. Suspendisse potenti. In tincidunt lobortis sem non pellentesque. Vivamus convallis id est sed vehicula. Aliquam quam est, vestibulum varius laoreet feugiat, elementum quis leo. Integer diam urna, sodales nec mattis sed, porta a leo. Sed eros urna, posuere sit amet ligula non, sollicitudin volutpat est. Mauris at dictum leo. Aenean finibus lectus at leo bibendum ultricies. In hac habitasse platea dictumst.</p>
              </div>
         </div>
         </div>
         
      
         
}


export default pyramids;