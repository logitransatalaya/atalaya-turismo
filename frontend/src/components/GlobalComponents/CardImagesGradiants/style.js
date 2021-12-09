import styled from 'styled-components'
import { animationAppear } from '../animations'

export const CardStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1em;
	animation: ${animationAppear} 2s ease forwards;

	.CardImagesGradiantsCard {
		height: 300px;
		text-align: center;
		border-radius: 1em;
		overflow: hidden;
		cursor: pointer;
		background-color: #fff;

		.CardImagesGradiantsBoxImg {
			width: 100%;
			height: 100%;
			position: relative;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 0.5s;
			}

			.CardImagesGradiantsTitle {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100px;
				display: flex;
				align-items: center;
				justify-content: center;

				background: linear-gradient(180deg, #fff0 0%, #0f216f 85%);

				h3 {
					color: #fff;
					text-transform: uppercase;
					font-size: 1.5rem;
				}
			}
		}

		&:hover .CardImagesGradiantsBoxImg img {
			transform: scale(1.1);
		}
	}
`
