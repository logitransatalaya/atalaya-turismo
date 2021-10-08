import styled from 'styled-components'

export const HeaderCardStyled = styled.div`
	margin-top: 2.8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.card_title {
		color: #0f216e;
		font-size: 2rem;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		font-weight: 600;
		margin-left: 15px;
	}
	.card_location {
		height: 55px;
		color: #0f216e;
		display: flex;
		margin-left: 10px;
		align-items: center;
		font-size: x-large;
	}
	.card_icon {
		padding: 5px;
		margin-right: 1rem;
		margin-top: 10px;
		width: 20px;
	}
	.card_button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #00cd64;
		padding: 20px;
		height: 80px;
		width: 80px;
		border-radius: 50px;
	}
`
export const CardGrid = styled.div`
	background-color: white;
	width: 100%;
	gap: 1em;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	.card_1 {
		grid-column: 1/3;
		grid-row: 1/-1;
		width: 100%;
		height: 100%;
	}
	.card_2 {
		width: 100%;
		height: 100%;
	}
	.card_3 {
		grid-column: 4/5;
		grid-row: 1/-1;
		width: 100%;
		height: 100%;
	}
	.card_4 {
		grid-column: 3/4;
		grid-row: 2/3;
		width: 100%;
		height: 100%;
	}
	.box_card {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		border-radius: 1em;
		overflow: hidden;
	}
`
