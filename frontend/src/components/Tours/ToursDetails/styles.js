import { animationAppear } from 'components/GlobalComponents/animations'
import styled from 'styled-components'

export const ToursDetailsStyled = styled.div`
	color: #10216f;
	margin: 0 auto;
	width: 95%;

	.description {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 3rem;
		height: auto;
		margin-top: 2.5rem;
		animation: ${animationAppear} 2s ease forwards;

		.descriptionImg-container {
			height: 100%;
			width: calc(100% - 2rem);

			img {
				display: block;
				margin: 0 auto;
				border-radius: 1.5rem;
				width: 100%;
				height: 100%;
			}
		}

		p {
			width: calc(100% - 2rem);
			text-align: justify;
			line-height: 1.9rem;
			font-size: 1.4rem;
		}

		@media (min-width: 950px) {
			height: 15rem;
			padding: 0;
			justify-content: space-between;

			.descriptionImg-container {
				width: 45%;
			}

			p {
				width: 45%;
			}
		}
	}

	.characteristics-container {
		font-size: 1.5rem;
		padding: 0 2rem;
		margin-bottom: 2rem;
		animation: ${animationAppear} 2s ease forwards;

		h5 {
			font-size: 2rem;
			font-weight: 500;
			margin: 4rem 0 1rem 0;
		}

		.characteristics-content {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;

			div {
				width: 90%;
			}

			p {
				display: flex;
				align-items: center;

				img {
					display: inline-block;
					width: 1.5rem;
					margin-right: 1rem;
				}
			}
		}

		.characteristics-specialItem {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			width: 90%;
			margin: 0 auto;
			margin-top: 1rem;

			img {
				display: inline-block;
				width: 1.5rem;
				margin-right: 1rem;
			}
		}

		@media (min-width: 950px) {
			text-align: justify;

			h5 {
				width: auto;
				padding-left: 1rem;
			}

			.characteristics-content {
				justify-content: space-between;
				div {
					width: 45%;
				}
			}

			.characteristics-specialItem {
				width: 100%;
			}
		}

		@media (min-width: 1310px) {
			padding: 0;

			h5 {
				font-size: 2rem;
				font-weight: 500;
				margin-left: -1rem;
			}

			.characteristics-content {
				font-size: 1.4rem;
				justify-content: space-between;
				padding: 0 2rem;

				div {
					width: 30rem;
				}
			}

			.characteristics-specialItem {
				width: calc(100% - 4rem);
				font-size: 1.4rem;
			}
		}
	}
`
