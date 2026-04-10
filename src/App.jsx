import React from 'react';
import About from "./components/About";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Home from "./components/Home";
import WhatsAppFloat from './components/WhatsAppfloat';
import Navbar from './components/Navbar'
import Services from './components/service';
import "./App.css";

function APP(){
  return (
    <div class = "APP">
      <Navbar/>
      <h2>Welcome to my portfolio</h2>
      <Home/>
      <WhatsAppFloat/>
      <About />
      <Skills/>
      <Project/>
      <Services/>
      
      <Contact/>
      <Footer />

    </div> 
  );
  }
export default APP;
  

     
          