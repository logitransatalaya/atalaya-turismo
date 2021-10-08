import styled from 'styled-components'

export const CityContainer = styled.div`
	padding: 2em 1em;
	display: flex;
	gap: 1em;
	flex-direction: column;

	.cityCard {
		display: flex;
		background-color: #dedede;
		padding: 1em;
		border-radius: 1em;
		gap: 1em;

		@media (max-width: 600px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.cityBoxImg {
			width: 300px;
			min-width: 300px;
			height: 200px;
			border-radius: 1em;
			overflow: hidden;

			@media (max-width: 600px) {
				width: 90%;
				height: 300px;
			}
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.cityInfo {
			flex: 3;
			padding: 10px 0 0 30px;
			@media (max-width: 600px) {
				display: flex;
				flex-direction: column;
				align-items: center;

				p {
					margin: 0;
				}
			}

			.cityInfo_title {
				font-size: 2rem;
				margin: 0.3rem 0;
			}
		}

		.cityPrice {
			flex: 1;
			text-align: end;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 10px 35px 20px 0;

			@media (max-width: 600px) {
				text-align: start;
				justify-content: center;
				align-items: flex-start;
			}

			div {
				p {
					margin: 0.2em;

					small {
						display: inline-block;
						margin: 0.3em;
					}
				}
			}

			.cityPrice_title {
				font-size: 1.5rem;
			}

			.cityPrice_subTitle {
				font-size: 1.3rem;
			}

			.cityPrice_card {
				font-weight: 300;
			}
		}
	}
`
