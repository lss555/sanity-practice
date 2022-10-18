import React from 'react';
import { FooterContainer, FooterInnerLink, FooterRight, FooterLeft, FooterOuterLink, FooterInnerLinkLogo } from './footer-styles.js'

const Footer = () => {

  return (
    <FooterContainer>
      <FooterLeft>
        <FooterOuterLink target="_blank" href='https://www.instagram.com/'>
          Instagram
        </FooterOuterLink>
        <FooterOuterLink target="_blank" href='https://twitter.com/?lang=en'>
          Twitter
        </FooterOuterLink>
      </FooterLeft>
      <FooterRight>
        <FooterInnerLink to='/archives'>
          Archives
        </FooterInnerLink>
        <FooterInnerLink to='/about'>
          About
        </FooterInnerLink>
        <FooterInnerLinkLogo to='/'>
          Shred Mtns
        </FooterInnerLinkLogo>
      </FooterRight>
    </FooterContainer>
  )
};

export default Footer;
