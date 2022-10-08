import React from 'react';
import { FooterContainer, FooterInnerLink, FooterRight, FooterLeft } from './footer-styles.js'

const Footer = () => {

  return (
    <FooterContainer>
      <FooterLeft>
        <FooterInnerLink>
          Footer link
        </FooterInnerLink>
        <FooterInnerLink>
          Footer link
        </FooterInnerLink>
      </FooterLeft>
      <FooterRight>
        <FooterInnerLink>
          Footer link
        </FooterInnerLink>
        <FooterInnerLink>
          Footer link
        </FooterInnerLink>
      </FooterRight>
    </FooterContainer>
  )
};

export default Footer;
