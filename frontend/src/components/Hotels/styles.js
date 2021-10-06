import styled from 'styled-components'

export const HotelsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1em;
	padding: 2em 1em;

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

				&:hover {
					transform: scale(1.1);
				}
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
	}
`
