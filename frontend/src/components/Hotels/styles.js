import styled, { keyframes } from 'styled-components'

const animationHotel = keyframes`
	from{
		opacity: 0;
	}
	30%{
		opacity: 0;
	}
	to{
		opacity: 1;
	}

`

export const HotelsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1em;
	padding: 2em 1em;
	animation: ${animationHotel} 2s ease forwards;

	.hotelCard {
		height: 300px;
		text-align: center;
		border-radius: 1em;
		overflow: hidden;
		cursor: pointer;
		background-color: #fff;

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
`
