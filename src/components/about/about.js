import { AboutContainer, TopHalf, TopHalfTitle, TopHalfSubTitle, AboutBody, AuthorPicture, BottomHalf, AuthorContainer, LoadingContainer } from './about-styles.js';
import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import RingLoader from "react-spinners/RingLoader";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
};

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
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
      .then(setIsLoading(false))
      .catch(console.error);
  }, []);



  if (!aboutData) return <div>Loading...</div>;

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <RingLoader />
        </LoadingContainer>
        ) : (
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
        )}

    </>
  );
};

export default About;
