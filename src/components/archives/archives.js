import React from "react";
import Gallery from '../gallery/gallery.js';
import { ArchivesHeader, HomeLink, ArchivesHeaderLinks } from './archives-styles.js';


const Archives = () => {

  return (
    <>
      <ArchivesHeaderLinks>
        <ArchivesHeader>The Blog Archives</ArchivesHeader>
        <HomeLink to='/'>Back to Home</HomeLink>
      </ArchivesHeaderLinks>
      <Gallery />
    </>
  );
}

export default Archives;
