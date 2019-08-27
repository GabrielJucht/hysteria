import React from 'react';
import './Variables.scss';
import './App.scss';
import Header from './Header/Header.js';
import Content from './Content/Content.js';
import Footer from './Footer/Footer.js';

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
