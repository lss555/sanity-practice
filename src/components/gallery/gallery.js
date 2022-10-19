import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { BlogCards, BlogCardsContainer, BlogCardTitle, GalleryContainer, BlogLink, LoaderContainer } from './gallery-styles.js';
import RingLoader from "react-spinners/RingLoader";
// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';
// import { useAnimation } from 'framer-motion';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allPostsData, setAllPosts] = useState(null);
  // const { ref, inView } = useInView({
  //   threshold: 0.05
  // });
  // const animation = useAnimation();

  // useEffect(() => {
  //   if(inView) {
  //     animation.start({
  //       x: 0,
  //       transition: {
  //         type: '', duration: 1, bounce: 0.3
  //       }
  //     });
  //   }
  //   if(!inView) {
  //       animation.start({ x: '-100vw' })
  //     }
  // }, [inView]);

  useEffect(() => {
    setIsLoading(true);
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .then(setIsLoading(false))
      .catch(console.error);
  }, []);

// inside gallery container ref={ref}
// around BlogLink <motion.div animate={animation} > </motion.div>

  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <RingLoader />
        </LoaderContainer>
        ) : (
        <GalleryContainer >
      {allPostsData &&
        allPostsData.map((post, index) => (
          <BlogCardsContainer key={post.slug.current}>
            
              <BlogLink to={"/" + post.slug.current}>
                <BlogCards src={urlFor(post.mainImage.asset.url).url()} alt={post.title} />
                <BlogCardTitle>{post.title}</BlogCardTitle>
              </BlogLink>
            
          </BlogCardsContainer>
          
        ))}
      </GalleryContainer>
        )}
      
    </>
  );
}

export default Gallery;
