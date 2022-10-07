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
`;

export const NavTitle = styled.h1`
  color: black;
  height: 80px;
  display: flex;
  text-align: center;
  z-index: 100;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
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
