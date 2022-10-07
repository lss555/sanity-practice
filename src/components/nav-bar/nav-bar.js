import React from "react";
import { NavContainer, NavTitle, NavItem, NavRightContainer, NavLeftContainer } from './nav-bar-styles.js'

const NavBar = () => {

  return (
  <NavContainer>
    <NavLeftContainer>
      <NavItem to='/'>Insta</NavItem>
      <NavItem to='/'>Twitter</NavItem>
    </NavLeftContainer>
    <NavTitle>Shred Mtns</NavTitle>
    <NavRightContainer>
      <NavItem to='/'>Archives</NavItem>
      <NavItem to='/'>About</NavItem>
    </NavRightContainer>
  </NavContainer>
  )
}

export default NavBar;
