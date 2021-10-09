import styled from 'styled-components'

export const StyleTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title {
		font-size: 1.85rem;
		color: #053b77;
		text-transform: uppercase;
		font-weight: 500;
	}

	.line {
		height: 3px;
		width: ${(props) => (props.about ? `29%` : `30%`)};
		background: #053b77;
	}

	@media (max-width: 700px) {
		.title {
			text-align: center;
			font-size: 1.4rem;
		}
	}
`
