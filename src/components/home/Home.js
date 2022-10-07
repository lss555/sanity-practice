import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { HeroImage, BlogCards, BlogCardsContainer, BlogCardTitle, GalleryContainer, BlogLink } from './home-styles.js';
import HomeImage from '../images/home.jpg';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Home = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
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
      .catch(console.error);
  }, []);

// <BlogCardTitle>{post.title}</BlogCardTitle>

  return (
    <>
      <HeroImage src={HomeImage}/>
      <GalleryContainer>
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
    </>
  );
}

export default Home;
