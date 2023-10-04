import React from 'react';
import ReactDOM from 'react-dom';

//components

import Header from './components/Header';
import Hero from './components/Hero';
// import Footer from './components/Footer';

//stylesheet
import './styles/main.css';

//Creating App

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Footer /> */}
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));