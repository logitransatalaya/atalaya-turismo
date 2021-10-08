import styled from 'styled-components'

export const Info = styled.div`
	display: flex;
	padding: 5px;
	justify-content: flex-start;
	align-items: center;
	width: 50%;

	.icon {
		width: 2rem;
		padding-right: 20px;
		color: #1a2a75;
		svg {
			path {
				fill: #1a2a75;
			}
		}
	}
	.text svg {
		color: #1a2a75;
		p {
			color: #1a2a75;
			font-size: 1.5rem;
			font-weight: 300;
			margin: 0.2em;
		}
		svg {
			color: #1a2a75;
		}
	}
	@media (max-width: 950px) {
		width: 100%;
	}
`
