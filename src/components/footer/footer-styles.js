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
`;

export const FooterRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLeft = styled.div`
  width: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const FooterInnerLink = styled(LinkR)`
  text-decoration: none;
  color: black;
  margin: 2rem;
`;
export const FooterOuterLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 2rem;
`;
