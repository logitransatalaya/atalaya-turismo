import styled from 'styled-components'

export const CardStyle = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	padding: 0.8rem;
	gap: 1rem;
	margin: 2rem 0;

	h1 {
		margin: 0;
		width: 100%;
		text-align: center;
		color: #0b1644;
	}

	.offersCard-imgContainer {
		height: 12rem;
		width: 100%;
		img {
			width: 100%;
			height: 100%;
			border-radius: 20px 20px 0 0;
		}
	}

	.offersCard-textContent {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;

		p {
			margin: 0;
		}
	}

	.offersCard-price {
		font-size: 1.1rem;
		color: #e8641a;
	}

	.btn_offert {
		background-color: orange;
		padding: 15px;
		border-radius: 15px;
		border: none;
		color: white;
		font-size: large;
		margin-bottom: 19px;
		width: 100%;

		&:hover {
			opacity: 0.8;
		}
	}

	/* @media (max-width: 810px) {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	} */
`
