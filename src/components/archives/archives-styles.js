import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ArchivesHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  margin: 2rem auto 1rem 2rem;

`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  margin: 2rem 2rem 1rem auto;
  text-decoration: none;
  padding: .5rem;
  color: black;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 25px;
  :hover {
    border: 1px solid black;
  }
`;

export const ArchivesHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  margin: 1rem 2rem 1rem 2rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  border-top: 1px solid black;
`;
