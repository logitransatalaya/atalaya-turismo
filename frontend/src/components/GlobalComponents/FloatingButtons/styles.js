import styled, { keyframes } from 'styled-components'

export const ContainerBtns = styled.div`
	display: inline-block;
	position: fixed;
	top: 160px;
	right: 0;
	z-index: 11111;

	@media (max-width: 600px) {
		top: 60px;
	}
`

const disappear = keyframes`
	from {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
	to {
		opacity: 0;
		visibility: hidden;
	}
`

export const Button = styled.div`
	width: 55px;
	height: 55px;
	cursor: pointer;
	transition: all 0.53s ease;

	.red {
		background: red;
		width: 100%;
		height: 100%;
	}

	.blue {
		background: blue;
		width: 100%;
		height: 100%;
	}

	.acontainer {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.tiptextW,
	.tiptextM {
		width: max-content;
		color: #fff;
		text-align: center;
		border-radius: 3px;
		padding: 10px;
		position: absolute;
		z-index: 11111;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
		right: 70px;
		transition: all 0.5s ease;
		background-color: #053b77;
	}

	.tiptextW::after,
	.tiptextM::after {
		content: '';
		position: absolute;
		display: block;
		height: 10px;
		width: 10px;
		border: none;
		transform: rotate(45deg);
		right: -5px;
		background-color: #ff6c0c;
		top: 40%;
	}

	.animation {
		transition: all 0.5s ease;
		animation: ${disappear} 0.5s linear forwards;
	}

	.icons {
		opacity: 0.8;

		border-radius: 15px 0 0 15px;
	}

	&:hover {
		transform: translateX(-10px);
	}

	@media (max-width: 600px) {
		width: 45px;
		height: 45px;
	}
`
