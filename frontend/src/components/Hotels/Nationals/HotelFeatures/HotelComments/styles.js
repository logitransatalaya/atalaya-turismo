import styled from 'styled-components'

export const ContainerHotelInfo = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	padding: 80px 0;
	width: 90%;
	margin: auto;
	.item1 {
		display: flex;
		justify-content: flex-start;
		color: #1a2a75;
		.info {
			width: 90%;
			font-size: 1.7rem;
			text-align: justify;
		}
	}

	.item2 {
		display: flex;
		justify-content: flex-end;

		.sliderContain {
			width: 90%;
			height: 500px;
			border-radius: 40px;
			background: #10216f;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;

			.splideC {
				width: 100%;
			}

			.center {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	@media (max-width: 1365px) {
		.item1 {
			justify-content: center;
		}

		.item2 {
			justify-content: center;
		}
	}

	@media (max-width: 700px) {
		padding: 30px 0;
		grid-template-columns: auto;
		grid-template-rows: repeat(2, auto);

		.item1 {
			display: flex;
			justify-content: center;
			margin-bottom: 40px;

			.info {
				width: 85%;
				font-size: 1rem;
				text-align: left;
			}
		}

		.item2 {
			display: flex;
			justify-content: center;

			.sliderContain {
				height: 550px;
			}
		}
	}
`
export const Message = styled.div`
	width: 300px;
	color: #fff;

	.box-message {
		border: 3px solid orange;
		padding: 1em;
		border-radius: 2em;
		text-align: justify;
	}
	.name {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 50px;
		gap: 0.5em;

		.box-icon {
			width: 20px;
			height: 20px;

			svg {
				width: 100%;
			}
		}
	}
`
