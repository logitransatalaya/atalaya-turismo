import styled from 'styled-components'

export const Card = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

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

			&::before {
				content: '';
				height: 2px;
				background: orange;
				width: 100%;
				position: absolute;
				top: -25px;
				left: 0;
			}
		}
	}
`
