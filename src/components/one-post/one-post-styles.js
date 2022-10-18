import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const OnePostContainer = styled.div`
	display: flex;
	height: 100%;
	min-height: 100vh;
    padding: 1rem;
    flex-direction: column;
`;

export const IntroContainer = styled.div`
	
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	text-align: center;
`;


export const ContentContainer = styled.div`
	display: flex;
	
	margin: auto;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const TextContainer = styled.div`
	padding-right: 1rem;
	padding-left: 1rem;
	border-right: 1px solid black;
	border-left: 1px solid black;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 3rem auto 3rem auto;
	width: 60%;
	height: 100%;

`;

export const ProfilePicture = styled.img`
	border-radius: 50%;
	height: 100%;
	margin-right: 1rem;
`;

export const ContentPicture = styled.img`
	height: auto;
	display: flex;
	justify-content: center;
	margin: 2rem auto 2rem auto;
	align-items: center;
	text-align: center;
	width: 40%;
`;

export const BlogTitle = styled.h1`
	
`;


export const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
`;

export const AuthorText = styled(LinkR)`
	text-decoration: none;
	display: flex;
	align-items: center;
	color: black;
	:hover {
    color: #910d0d;
  }
`;