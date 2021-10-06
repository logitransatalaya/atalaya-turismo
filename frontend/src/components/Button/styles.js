import styled from 'styled-components'

export const ButtonStyled = styled.button`
	background-color: ${({ bgColor }) => bgColor || '#000'};
	color: ${({ color }) => color || '#fff'};
	padding: 10px 20px;
	border: none;
	border-radius: 0.5em;
	font-size: 1.1rem;
	cursor: pointer;
	transition: opacity 0.5s, transform 0.1s;

	&:hover {
		opacity: 0.9;
	}

	&:active {
		transform: scale(0.9);
	}

	@media (max-width: 600px) {
		width: ${({ w }) => w || 'auto'};
	}
`
