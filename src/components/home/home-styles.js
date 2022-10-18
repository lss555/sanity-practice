import styled from 'styled-components';

export const HeroImage = styled.img`
  display: flex;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: -80px auto 12px auto;
  overflow: hidden;
  object-fit: cover;
  @media screen and (max-width: 812px) {
    border-bottom: 2px solid black;
  }
`;

export const HeroContainer = styled.div`
  
`;

