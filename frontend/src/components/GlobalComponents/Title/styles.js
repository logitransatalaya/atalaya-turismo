import styled from 'styled-components'
import { animationUpload } from '../animations'

export const StyleTitle = styled.div`
	margin-top: ${({ mt }) => (mt ? mt : '0')};
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	animation: ${animationUpload} 0.5s;

	.title {
		font-size: 1.85rem;
		color: #0f216f;
		text-transform: uppercase;
		text-align: center;
		font-weight: ${({ fontWeight }) => (fontWeight ? `800` : `500`)};
	}

	.line {
		margin: auto;
		height: 3px;
		width: ${({ about }) => (about ? `25%` : `35%`)};
		background: ${({ color }) => (color ? `orange` : `#0f216f`)};
	}

	@media (max-width: 700px) {
		.title {
			text-align: center;
			font-size: 1.4rem;
		}
	}
`
