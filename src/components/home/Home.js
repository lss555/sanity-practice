import React from "react";
import { HeroImage } from './home-styles.js';
import HomeImage from '../images/home.jpg';
import Gallery from '../gallery/gallery.js';

const Home = () => {



  return (
    <>
      <HeroImage src={HomeImage}/>
      <Gallery />
    </>
  );
}

export default Home;
