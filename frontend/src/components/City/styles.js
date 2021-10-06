import styled from 'styled-components'

export const CityContainer = styled.div`
	padding: 2em 0;
	display: flex;
	gap: 1em;
	flex-direction: column;

	.cityCard {
		display: flex;
		background-color: #dedede;
		padding: 1em;
		border-radius: 1em;
		gap: 1em;

		.cityBoxImg {
			width: 300px;
			border-radius: 1em;
			overflow: hidden;

			img {
				width: 100%;
			}
		}

		.cityInfo {
			flex: 3;

			.cityInfo_title {
				font-size: 2rem;
				margin: 0.3rem;
			}
		}

		.cityPrice {
			flex: 1;
			text-align: end;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

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
