import styled from 'styled-components'

export const Card = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.9em 0em 0em 0em;

	.containerSF {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 800px) {
		.containerSF {
			flex-direction: row;
			width: 90%;
			margin-bottom: 30px;
			position: relative;
		}
	}
`
