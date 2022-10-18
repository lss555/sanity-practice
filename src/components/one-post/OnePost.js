// src/components/OnePost.js
import { OnePostContainer, IntroContainer, TextContainer, ProfilePicture, BlogTitle, ProfileContainer, ContentPicture, AuthorText } from './one-post-styles.js';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <OnePostContainer>
      <IntroContainer>
        <BlogTitle>{postData.title}</BlogTitle>
        <ProfileContainer>
          <ProfilePicture
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author is cap"
          />
          <AuthorText to="/about">Written by:<br /> {postData.name}</AuthorText>
        </ProfileContainer>
      </IntroContainer>
      <TextContainer>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </TextContainer>
      <ContentPicture src={urlFor(postData.mainImage).url()} alt="" />
    </OnePostContainer>
  );
}
