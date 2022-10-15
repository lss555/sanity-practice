import { AboutContainer, TopHalf, TopHalfTitle, TopHalfSubTitle, AboutBody, AuthorPicture, BottomHalf, AuthorContainer } from './about-styles.js';
import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
};

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          slug,
          image{
            asset->{
              _id,
              url
             }
           },
         bio,
       }`
      )
      .then((data) => setAboutData(data))
      .catch(console.error);
  }, []);



  if (!aboutData) return <div>Loading...</div>;

  return (
    <AboutContainer>
      <TopHalfTitle>Authors</TopHalfTitle>
      {aboutData.map((author, index) => (
        <AuthorContainer key={author.slug.current}>
          <TopHalf>
            
            <TopHalfSubTitle>{author.name}</TopHalfSubTitle>
            <AuthorPicture
                src={urlFor(author.image).url()}
                alt="Author is chris"
              />
          </TopHalf>
          <BottomHalf>
            <AboutBody>
              <BlockContent blocks={author.bio} />
            </AboutBody>
          </BottomHalf>
        </AuthorContainer>
      ))}  
    </AboutContainer>
  );
};

export default About;
