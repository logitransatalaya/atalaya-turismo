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
				display: block;
				margin-bottom: 1rem;
				text-align: center;
				width: 100%;
				cursor: pointer;
				font-size: 1.4rem;
				color: #0f216f;
				text-decoration: underline;
				font-weight: bold;
				transition: transform 0.5s;

				&:hover {
					color: #00113f;
				}
			}

			.cardButtonRotate {
				transform: rotate(180deg);
			}
		}
	}
`
