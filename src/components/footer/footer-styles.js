import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.div`
  display: flex;
  margin-bottom: 0;
  height: 15vh;
  border-top: 1px solid black;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 868px) {
    flex-direction: column;
    padding-top: 1rem;
 }
`;

export const FooterRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 868px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
 }

`;

export const FooterLeft = styled.div`
  width: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media screen and (max-width: 868px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
 }
 }

`;

export const FooterInnerLink = styled(LinkR)`
  text-decoration: none;
  color: black;
  margin: 2rem;
  @media screen and (max-width: 868px) {
    flex-direction: column;
    margin: .5rem auto .5rem auto;
 }
 :hover {
    color: #910d0d;
  }
`;

export const FooterInnerLinkLogo = styled(LinkR)`
  text-decoration: none;
  color: black;
  margin: 2rem;
  @media screen and (max-width: 868px) {
    flex-direction: column;
    margin: .5rem auto 1rem auto;
    font-weight: bold;
 }
 :hover {
    color: #910d0d;
  }
`;

export const FooterOuterLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 2rem;
  @media screen and (max-width: 868px) {
    flex-direction: column;
    margin: .5rem auto .5rem auto;
 }
 :hover {
    color: #910d0d;
  }
`;
