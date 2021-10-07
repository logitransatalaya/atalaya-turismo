import styled from 'styled-components'

export const ToursDetailsStyled = styled.div`
	color: #10216f;
	margin-top: 3rem;

	.separator {
		background-color: #f3a719;
		height: 0.15rem;
		margin: 1rem 0;
	}

	header {
		padding: 0 1rem;
		justify-content: space-between;
		align-items: center;
		display: flex;

		h3 {
			margin: 0;
			font-weight: 500;
			font-size: 2rem;
		}

		a {
			width: 4rem;
		}
		img {
			width: 100%;
		}
	}

	.description {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		height: auto;
		padding: 0 1rem;

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
			padding: 0 1rem;
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
		text-align: justify;
		padding: 0 2rem;
		margin-bottom: 2rem;

		h5 {
			font-size: 2rem;
			font-weight: 500;
			margin: 4rem 0 2rem 0;
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
				align-items: flex-start;

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

			img {
				display: inline-block;
				width: 1.5rem;
				margin-right: 1rem;
			}
		}

		@media (min-width: 950px) {
			h5 {
				margin-left: 0;
			}

			.characteristics-content {
				justify-content: space-between;
				gap: 1rem;

				div {
					width: 45%;
				}
			}

			.characteristics-specialItem {
				width: 100%;
			}
		}

		@media (min-width: 1310px) {
			h5 {
				font-size: 2rem;
				font-weight: 500;
				margin-left: -1rem;
			}

			.characteristics-content {
				justify-content: space-between;

				div {
					width: 38rem;
				}
			}
		}
	}
`
