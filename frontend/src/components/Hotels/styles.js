import styled from 'styled-components'

export const HotelsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1em;
	padding: 2em 0;

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
				background-color: #10216f;

				h3 {
					color: #fff;
				}
			}
		}
	}
`
