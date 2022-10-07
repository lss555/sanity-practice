import React from "react";
import { NavContainer, NavTitle, NavItem, NavRightContainer, NavLeftContainer, OuterNavItem } from './nav-bar-styles.js'

const NavBar = () => {

  return (
  <NavContainer>
    <NavLeftContainer>
      <OuterNavItem target="_blank" href='https://www.instagram.com/'>Instagram</OuterNavItem>
      <OuterNavItem target="_blank" href='https://twitter.com/?lang=en'>Twitter</OuterNavItem>
    </NavLeftContainer>
    <NavTitle to='/'>Shred Mtns</NavTitle>
    <NavRightContainer>
      <NavItem to='/'>Archives</NavItem>
      <NavItem to='/'>About</NavItem>
    </NavRightContainer>
  </NavContainer>
  )
}

export default NavBar;
