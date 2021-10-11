import styled, { keyframes } from 'styled-components'

const animationTitle = keyframes`
	0% {
			opacity: 0;
			bottom: -200px;
		}
	100% {
		opacity: 1;
		bottom: 0;
	}
`

export const StyleTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	animation: ${animationTitle} 0.5s;

	.title {
		font-size: 1.85rem;
		color: #053b77;
		text-transform: uppercase;
		font-weight: 500;
	}

	.line {
		height: 3px;
		width: ${(props) => (props.about ? `25%` : `35%`)};
		background: ${(props) => (props.color ? `orange` : `#053b77`)};
	}

	@media (max-width: 700px) {
		.title {
			text-align: center;
			font-size: 1.4rem;
		}
	}
`
