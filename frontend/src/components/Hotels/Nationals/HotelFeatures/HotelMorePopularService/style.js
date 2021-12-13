import styled from 'styled-components'

export const ContainerCards = styled.div`
	width: 95%;
	margin: auto;
	.layoutD {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
		gap: 0.3em;

		@media (max-width: 800px) {
			display: none;
		}
	}

	.layoutM {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
		gap: 1em;
		display: none;

		@media (max-width: 800px) {
			grid-template-columns: 1fr;
			justify-content: space-between;
			align-items: center;
			margin: auto;
			display: block;
			.cardButton {
				text-align: center;
				display: block;
				width: 100%;
				margin: auto;
				cursor: pointer;
				font-size: 1.5rem;
				color: #10216f;
				font-weight: bold;
				cursor: pointer;
				transition: transform 0.5s;
			}

			.cardButtonRotate {
				transform: rotate(180deg);
			}
		}
	}
`
