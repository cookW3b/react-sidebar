import styled from 'styled-components';

export const List = styled.ul`
	list-style: none;
	font-family: Raleway;

	margin-top: 30px;
	width: 60px;

	transition: all .5s ease-in;

	span{
		overflow: hidden;
	}

	border-radius: 0 30px 30px 0;

	color: #a1a1a1ff;

	font-size: 14px;

	font-weight: 600;

`;

export const Li = styled.li`
	margin-bottom: 25px;
	cursor: pointer;

	transition: border .2s ease-in;

	&:first-child{
		margin-top: 25px;
	}
	border-right: 4px solid black;
	&:hover{
		border-right: 4px solid white;

		color: white;

		img{
			filter: invert(100%) saturate(13502%) brightness(119%) contrast(119%);
		}
	}
	
	height: 50px;

	white-space: nowrap;

	display: flex;
	align-items: center;
	justify-content: flex-start;
	

	letter-spacing: 1px;
	text-transform: uppercase;
	

	img{
		width: 20px;
		position: absolute;
		left: 17px;
		margin: 0 auto;
		transition: filter .3s ease-in;
	}

	span{
		margin-left: 60px;
	}
`

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	border-radius: 0 30px 30px 0;
	width: 60px;
	height: 80vh;

	position: relative;
`

export const Button = styled.button`

	background-color: #0c0c0c;

	border: none;

	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 30px;

	height: 40px;

	flex-direction: column;

	margin: 30px auto;


	&:hover{
		&::after, &::before{
			background-color: white;
			transform: translateX(3px);
		}

		div{
			background-color: white;
		}
	}
		

	&::after, &::before{
		content: "";
		background-color: gray;
		width: 1.5rem;
		height: 2px;

		transition: all .2s ease-in;

		margin-bottom: 6px;
		margin-top: 6px;

	}
`

export const Stick = styled.div`
	background-color: gray;
	height: 2px;
	width: 1.5rem;
	transition: all .2s ease-in;

`