import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './side-bar-styles.js';

const SideBar = ({ toggle, isOpen}) => {

	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
	          <Icon onClick={toggle}>
	            <CloseIcon />
	          </Icon>
	            <SideBarWrapper>
	              <SideBarMenu>
	                <SideBarLink to='/about' onClick={toggle}>
	                  About
	                </SideBarLink>
	                <SideBarLink to='/archives' onClick={toggle}>
	                  Archives
	                </SideBarLink>
	                <SideBarLink to='/' onClick={toggle}>
	                  Shred Mtns
	                </SideBarLink>
	              </SideBarMenu>
	            </SideBarWrapper>
	        </SideBarContainer>
	        )
};

export default SideBar;