import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './CSS/style.css';
import Menu from './Components/Header';
import Main from './Pages/Main';
import About from './Pages/About';
import Statistics from './Pages/Statistics';
import Services from './Pages/Services';
import Feature from './Pages/Feature';
import Services2 from './Pages/Services2';
import Quote from './Pages/Quote';
import Team from './Pages/Team';
import Logos from './Pages/Logos';
import Works from './Pages/Works';
import Testimonial from './Pages/Testimonial';
import WhatPeopleSay from './Pages/WhatPeopleSay';
import Blog from './Pages/Blog';
import Map from './Pages/Map';
import Footer from './Pages/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Main />
    <About />
    <Statistics />
    <Services />
    <Feature />
    <Services2 />
    <Quote />
    <Team />
    <Logos />
    <Works />
    <Testimonial />
    <WhatPeopleSay />
    <Blog />
    <Map />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
