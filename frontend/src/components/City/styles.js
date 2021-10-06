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
		}

		.cityPrice {
			flex: 1;
			text-align: end;
		}
	}
`
