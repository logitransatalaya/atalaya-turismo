import styled from 'styled-components'

export const FooterContainer = styled.div`
	background-color: #10216f;
	position: relative;
`

export const FooterStyle = styled.footer`
	background-color: #10216f;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`

export const FooterWave = styled.div`
	position: absolute;
	bottom: -5px;
	left: 0;
	width: 100%;
	img {
		width: 100%;
	}
`

export const FooterRedes = styled.div`
	grid-column: 2/4;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
	color: #fff;
	padding: 1em 1em 6em 1em;
	z-index: 100;
`

export const FooterContentIcons = styled.div`
	display: flex;
`

export const FooterBoxIcons = styled.div`
	width: 50px;
	height: 50px;

	img {
		transition: transform 0.5s;
		&:hover {
			transform: scale(1.1);
		}
		&:active {
			transform: scale(0.9);
		}
	}
`

export const FooterLey = styled.div`
	text-align: center;
	color: #6a6a6a;
	background-color: #fff;
	padding: 1em;
	@media (max-width: 600px) {
		text-align: justify;
	}
`
export const FooterTitle = styled.h5`
	color: orange;
`
export const FooterContact = styled.ul`
	list-style: none;
	color: #fff;
	z-index: 100;

	li {
		margin-bottom: 1em;
	}
	@media (max-width: 600px) {
		grid-column: 1/-1;
	}
`
export const FooterWe = styled.ul`
	color: #fff;
	z-index: 100;

	li {
		color: orange;
		margin-bottom: 0.5em;
		a {
			color: #fff;
			text-decoration: none;
			transition: color 0.5s, margin-left 0.5s;
			&:hover {
				color: orange;
				margin-left: 0.5em;
			}
		}
	}
	@media (max-width: 600px) {
		grid-column: 1/-1;
	}
`
export const FooterOtherServices = styled.ul`
	color: #fff;
	z-index: 100;

	li {
		color: orange;
		margin-bottom: 0.5em;
		a {
			color: #fff;
			text-decoration: none;
			transition: color 0.5s, margin-left 0.5s;
			&:hover {
				color: orange;
				margin-left: 0.5em;
			}
		}
	}
	@media (max-width: 600px) {
		grid-column: 1/-1;
	}
`
