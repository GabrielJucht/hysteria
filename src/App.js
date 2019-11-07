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
  
  let burguer = document.getElementsByClassName("burguer")[0];
  let menuMobile =  document.getElementsByClassName("menu-mobile")[0];
  let iconoBurguer = burguer.getElementsByTagName("i")[0];
  burguer.onclick = () => {
    if (menuMobile.style.display != 'block') {
      menuMobile.style.display = "block";
      iconoBurguer.classList.remove("fa-bars");
      iconoBurguer.classList.add("");
    } else {
      menuMobile.style.display = "none";
      iconoBurguer.classList.remove("fa-bars");
    }
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


