import styled from 'styled-components'

export const InfoO = styled.div`
	padding: 15px 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

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

		h2 {
			padding: 0;
			font-weight: 400;
			font-size: 1.3rem;
		}

		span {
			color: orange;
		}
	}

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
`
