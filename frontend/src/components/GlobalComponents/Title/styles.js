import styled from 'styled-components'
import { animationUpload } from '../animations'

export const StyleTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	animation: ${animationUpload} 0.5s;

	.title {
		font-size: 1.85rem;
		color: #053b77;
		text-transform: uppercase;
		font-weight: ${({ fontWeight }) => (fontWeight ? `800` : `500`)};
	}

	.line {
		height: 3px;
		width: ${({ about }) => (about ? `30%` : `35%`)};
		background: ${({ color }) => (color ? `orange` : `#053b77`)};
	}

	@media (max-width: 700px) {
		.title {
			text-align: center;
			font-size: 1.4rem;
		}
	}
`
