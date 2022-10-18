import React from "react";
import { NavContainer, NavTitle, NavItem, NavRightContainer, NavLeftContainer, OuterNavItem, MobileIcon, NavTitleContainer } from './nav-bar-styles.js';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ toggle }) => {

  return (
  <NavContainer>
    <NavLeftContainer>
      <MobileIcon onClick={toggle}>
        <GiHamburgerMenu />
      </MobileIcon>
      <OuterNavItem target="_blank" href='https://www.instagram.com/'>Instagram</OuterNavItem>
      <OuterNavItem target="_blank" href='https://twitter.com/?lang=en'>Twitter</OuterNavItem>
    </NavLeftContainer>
    <NavTitleContainer>
      <NavTitle to='/'>Shred Mtns</NavTitle>
      </NavTitleContainer>
    <NavRightContainer>
      <NavItem to='/archives'>Archives</NavItem>
      <NavItem to='/about'>About</NavItem>
    </NavRightContainer>
  </NavContainer>
  )
}

export default NavBar;
