import React from 'react';
import './Variables.scss';
import './App.scss';
import Header from './Header/Header.js';
import Content from './Content/Content.js';
import Footer from './Footer/Footer.js';

const fawes = document.createElement("script");
fawes.src = "https://kit.fontawesome.com/0fe20c6fd1.js";
document.head.appendChild(fawes);

window.onload = () => {
  
  var burguer = document.getElementsByClassName("burguer")[0];
  burguer.onclick = () => {
    //document.getElementsByTagName("nav").classList.add("desplegado");
  }
  
};

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;


