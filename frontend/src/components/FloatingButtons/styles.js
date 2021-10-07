import styled from 'styled-components'

export const ContainerBtns = styled.div`
	display: inline-block;
	position: fixed;
	top: 160px;
	right: 0;
	z-index: 11111;
`
export const Button = styled.div`
	width: 55px;
	height: 55px;
	cursor: pointer;
	transition: all 0.53s ease;

	.acontainer {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.tiptextW,
	.tiptextM {
		visibility: ${(props) =>
			props.showTooltip === false ? `hidden` : `visible`};
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

	&:hover {
		transform: translateX(-10px);
	}
`
