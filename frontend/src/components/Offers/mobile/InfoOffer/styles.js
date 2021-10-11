import styled from 'styled-components'

export const InfoO = styled.div`
	padding: 15px 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.accordion {
		text-align: center;
		background: #10216f;
		color: white;
		text-transform: uppercase;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		outline: none;
		transition: 0.4s;
		cursor: pointer;

		h2 {
			padding: 0;
			font-weight: 400;
			font-size: 1.3rem;
		}

		span {
			color: orange;
			transition: all 0.3s linear;
		}
	}

	.rotate {
		transform: rotate(180deg);
	}

	.panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		transition: max-heigh 0.2s ease-in-out;

		.services {
			width: 70%;
			padding-top: 5px;

			.service {
				color: orange;

				span {
					color: #10216f;
				}
			}
		}
	}

	.disappear {
		max-height: 0;
		overflow: hidden;
	}

	@media (min-width: 800px) {
		width: 40%;

		.accordion {
			background: none;
			text-align: left;
			cursor: inherit;
			user-select: none;

			h2 {
				color: #10216f;
				margin: 0;
				font-size: 2rem;
				width: 70%;
			}

			span {
				display: none;
			}
		}

		.service {
			font-size: 1.1rem;
		}
	}
`
