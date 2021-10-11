import styled from 'styled-components'

export const PlansContainer = styled.div`
	.plansContent {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
		padding: 1.9em 0em 2em 2em;
		padding-bottom: 1em;
		@media (max-width: 800px) {
			grid-template-columns: 1fr;
		}
		.plansCard {
			width: 100%;
			height: 350px;
			position: relative;
			border-radius: 1em;
			overflow: hidden;
			cursor: pointer;
			@media (max-width: 800px) {
				height: 200px;
			}
			.plansBoxImg {
				width: 100%;
				height: 400px;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
					transition: transform 0.5s;
					&:hover {
						transform: scale(1.1);
					}
				}
			}
			.plansCardTitle {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				background-color: orange;
				text-align: center;
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0) -5%,
					rgba(1, 38, 209, 1) 95%
				);
				p {
					color: #fff;
					font-size: 2rem;
					text-transform: uppercase;
					letter-spacing: 5px;
					font-weight: bold;
					@media (max-width: 800px) {
						font-size: 1.5rem;
					}
				}
			}
		}
	}
`
