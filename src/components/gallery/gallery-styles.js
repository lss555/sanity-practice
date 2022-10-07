import styled from 'styled-components';
import { Link } from "react-router-dom";

export const BlogLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const GalleryContainer = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media screen and (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
 }
 @media screen and (max-width: 480px) {
   -webkit-column-count: 1;
   -moz-column-count: 1;
   column-count: 1;
   -webkit-column-width: 100%;
   -moz-column-width: 100%;
   column-width: 100%;
}
`;

export const BlogCardsContainer = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  text-decoration: none;
  position: relative;
  &:hover {
    filter: opacity(.7);
  }
`;

export const BlogCards = styled.img`
  width: 100%;
`;

export const BlogCardTitle = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;
`;
