// import React, { useEffect, useState } from "react";
// import sanityClient from "../../client.js";
// import imageUrlBuilder from "@sanity/image-url";
// import { ArchivesContainer, ArchivesCardTitle, ArchivesBlogLink, ArchivesCards, ArchivesCardsContainer } from './archives-styles.js';
//
// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }
//
//
// const Archives = () => {
//   // const [allPostsData, setAllPosts] = useState(null);
//   //
//   // useEffect(() => {
//   //   sanityClient
//   //     .fetch(
//   //       `*[_type == "post"]{
//   //       title,
//   //       slug,
//   //       mainImage{
//   //         asset->{
//   //         _id,
//   //         url
//   //       }
//   //     }
//   //   }`
//   //     )
//   //     .then((data) => setAllPosts(data))
//   //     .catch(console.error);
//   // }, []);
//
//   return (
//     <>
//       <h1>Archives</h1>
//     </>
//   );
// }
//
// export default Archives;
