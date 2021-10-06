import styled from 'styled-components'

export const ContainerHotelInfo = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	padding: 40px 0;

	.item1 {
		display: flex;
		justify-content: flex-start;

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
			height: 800px;
			border-radius: 40px;
			background: #053b77;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
		}
	}
`
