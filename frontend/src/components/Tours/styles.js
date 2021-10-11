import styled from 'styled-components'

export const ToursStyled = styled.div`
	margin-top: 3rem;

	.title {
		font-family: 'Ubuntu';
		color: #10216f;
		text-align: center;
		position: relative;
		font-size: 1.3rem;

		h2 {
			font-weight: 500;
		}

		&::before {
			display: none;
		}

		&::after {
			display: none;
		}
	}

	.ToursCards-container {
		display: grid;
		grid-template-columns: repeat(auto, minmax(300px, 1fr));
		grid-template-rows: auto;
		gap: 1em;
		padding: 2em 1em;
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
		.title {
			&::before {
				display: initial;
				content: '';
				top: 50%;
				bottom: 50%;
				left: 5%;
				position: absolute;
				height: 0.2rem;
				width: 25%;
				background-color: #10216f;
			}

			&::after {
				display: initial;
				content: '';
				top: 50%;
				bottom: 50%;
				right: 5%;
				position: absolute;
				height: 0.2rem;
				width: 25%;
				background-color: #10216f;
			}
		}

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
