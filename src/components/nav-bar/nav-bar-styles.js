import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 80px;
  z-index: 100;
  width: 100%;
  margin-top: 0;
  background-color: rgba(0,0,0,0.0);
  position: sticky;
`;

export const NavTitle = styled(LinkR)`
  color: black;
  height: 80px;
  display: flex;
  text-align: center;
  z-index: 100;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  font-weight: bold;
  align-items: center;
  font-size: 32px;
  border-bottom: 1px solid black;
  @media screen and (min-width: 812px) {
    :hover {
    color: #910d0d;
  }
 }
  
  @media screen and (max-width: 812px) {
    margin-left: 1rem;
    padding: 0;
    justify-content: flex-start;
    text-align: flex-start;
    font-size: 22px;
    border-bottom: none;
    width: 40%;
 }
`;

export const NavTitleContainer = styled.div`
  margin: auto;
  @media screen and (max-width: 812px) {
    width: 100%;
 }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 812px) {
    display: block;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    transfrom: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;

export const NavItem = styled(LinkR)`
  color: black;
  display: flex;
  z-index: 100;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  :hover {
    color: #910d0d;
  }
  @media screen and (max-width: 812px) {
    display: none;  
 }
`;
export const OuterNavItem = styled.a`
  color: black;
  display: flex;
  z-index: 100;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  :hover {
    color: #910d0d;
  }
  @media screen and (max-width: 812px) {
    display: none;  
 }
`;

export const NavRightContainer = styled.h3`
  color: black;
  display: flex;
  text-align: center;
  z-index: 100;
  justify-content: center;
  align-items: center;
  margin-right: auto;
`;

export const NavLeftContainer = styled.h3`
  color: black;
  display: flex;
  text-align: center;
  z-index: 100;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
