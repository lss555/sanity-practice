import React from "react";
import { HeroImage, HeroContainer } from './home-styles.js';
import HomeImage from '../images/heroImg.jpg';
import Gallery from '../gallery/gallery.js';

const Home = () => {



  return (
    <>
      <HeroContainer>
        <HeroImage src={HomeImage}/>
      </HeroContainer>
      <Gallery />
    </>
  );
}

export default Home;
