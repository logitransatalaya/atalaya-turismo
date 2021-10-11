import styled from 'styled-components'

export const ToursStyled = styled.div`
	.ToursCards-container {
		display: grid;
		grid-template-columns: repeat(auto, minmax(300px, 1fr));
		grid-template-rows: auto;
		gap: 1em;
		padding: 1.9em 0em 2em 0em;
	}

	.hotelCard {
		height: 300px;
		background-color: #fff;
		text-align: center;
		border-radius: 1em;
		overflow: hidden;
		cursor: pointer;

		.hotelCardBoxImg {
			width: 100%;
			height: 100%;
			position: relative;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 0.5s;
			}

			.hotelCardTitle {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0) 5%,
					rgba(1, 38, 209, 1) 90%
				);
				h3 {
					color: #fff;
					text-transform: uppercase;
					font-size: 1.5rem;
				}
			}
		}

		&:hover .hotelCardBoxImg img {
			transform: scale(1.1);
		}
	}

	@media (min-width: 735px) {
		.ToursCards-container {
			grid-template-columns: repeat(2, minmax(300px, 1fr));
			grid-template-rows: auto;
		}
	}

	@media (min-width: 1100px) {
		.title {
			&::before {
				left: 0;

				width: 35%;
			}

			&::after {
				right: 0;
				width: 35%;
			}
		}

		.ToursCards-container {
			grid-template-columns: repeat(3, minmax(300px, 1fr));
			grid-template-rows: auto;
		}
	}
`
