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
	justify-content: flex-end;
	align-items: center;
	gap: 1em;
	color: #fff;
	padding: 1em 1em 6em 1em;
	z-index: 100;
	width: 80%;

	@media (max-width: 600px) {
		width: 105%;
		grid-column: 1/3;
		justify-content: left;
	}
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
	justify-self: center;

	li {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		margin-bottom: 1em;

		img {
			width: 1rem;
		}
	}
	@media (max-width: 600px) {
		grid-column: 1/-1;
		justify-self: left;
	}
`
export const FooterWe = styled.ul`
	justify-self: center;
	color: #fff;
	z-index: 100;

	li {
		color: orange;
		margin-bottom: 0.5em;

		a {
			display: block;
			text-decoration: none;
			color: #fff;
			transition: color 0.5s, transform 0.5s;
		}

		&:hover a {
			color: orange;
			transform: translateX(0.5em);
		}
	}

	@media (max-width: 600px) {
		grid-column: 1/-1;
		justify-self: left;
	}
`
export const FooterOtherServices = styled.ul`
	color: #fff;
	z-index: 100;
	width: max-content;
	justify-self: center;

	li {
		color: orange;
		margin-bottom: 0.5em;

		a {
			display: block;
			text-decoration: none;
			color: #fff;
			transition: color 0.5s, transform 0.5s;
		}

		&:hover a {
			color: orange;
			transform: translateX(0.5em);
		}
	}
	@media (max-width: 600px) {
		grid-column: 1/-1;
		justify-self: left;
	}
`

export const FooterTours = styled.div`
	margin-top: 5rem;
	height: 35rem;

	position: relative;

	picture {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;

		.gradient {
			top: 0;
			z-index: 10;
			position: absolute;
			box-shadow: 0 2rem 4rem 5rem white;
			height: 1rem;
			width: 100%;
		}

		img {
			top: 2rem;
			position: absolute;
			object-fit: cover;
			width: 100%;
			height: 100%;
			z-index: -10;
		}
	}
`
